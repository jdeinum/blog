---
title: "It runs on my clock"
date: 2025-05-31
---

<h1 style="text-align: center;">Clock Synchronization</h1>

## Overview

Device clocks are never really something I paid attention to during school, or
the first few years of my career. I just assumed clocks were working
reasonably well, or atleast well enough to not cause me any problems. The first
time this proved false for me was when I had to debug a Kerberos implementation.
The kerberos implementation had a dedicated host, and clients would connect to
receive tickets that allowed them to get access to resources. The trouble we
started running into was that the tickets stopped granting access to the
resources. At first we thought this was a problem with our either our Kerberos
install or how the application used the ticket to access the resources.

## Using Time

When I imagine using time in my application, there's 3 main usages that come to
mind:

1. Ordering events in a system 
2. Getting the duration of some time frame
3. Comparing the current time to some reference time


####  Ordering Events

The first and most common use for my work is to order events. Here are some of
the things that come to mind:

1. Determining the order that requests come in 
2. Ordering logs to figure out the series of events that led to some outcome
3. Ordering events in concurrent environments to see if any states prevent
   progress or correctness.

#### Durations 

Present in many pieces of software 



#### Comparison to some reference time

## Keeping Time
1. Quartz Crystal Oscillator
2. The problems with these crystals

## Overview of Clocks
### Physical Based Clocks
#### Monotomic
#### Wall Clock

### Logical Clocks

Unlike the monotomic clock and the wall clock, logical clocks are typically fully
independent of the device clock. They are defined exclusvely in software, and
two independent logical clocks cannot be compared in any meaningful way. Logical
clocks are widely used in distributed systems to determine the relative ordering
of events, and are often used as Version Vectors.

#### Lamport Clock

The Lamport clock is a logical clock that allows you to get a *partial ordering*
of events in your system. In essence, a partial ordering tells us that **some**
events in the system happened before others. The reason why Lamport Clocks
only provide a partial ordering is that two nodes, *A* and *B* can generate
independent events *a* and *b* that occur at the same timestamp *T*. Since they
are independent, we have no way of knowing whether *a* or *b* came first.
However, we can extend the Lamport Clock to provide a total ordering by using a
secondary measure to break ties. Two options to do this are the process ID, or a
large random number. Since the events the independent, it doesn't actually
matter which comes first, we just have to pick one.

The algorithm is roughly as follows:

1. Any time an event is discovered (message received, state changed, etc), you
   increment your own logical clock.
2. If you are sending knowledge of this event to another node, include the value
   of your own logical clock. 
3. Any time a message is received, you set your clock to the maximum of
   (your_time, message_time)

In rust, the algorithm looks something like this:

```rust
use std::cmp::max;

#[derive(Clone, Debug)]
struct LamportClock {
    pub time: i64,
}

impl Clock for LamportClock {
    /// Whenever an event occurs on this node (message received, state changed, etc), we
    /// immediately increment our clock to show the passing of time
    fn advance_clock(&mut self) -> i64 {
        self.time += 1;
        self.time
    }

    /// Whenever we receive a message from another node, we set our clock to the maximum of our own
    /// clock and the message timestamp. This ensures time always moves forward, and is what allows
    /// us to define partial ordering for particular events.
    fn update_clock(&mut self, message_timestamp: i64) -> i64 {
        self.time = max(self.time, message_timestamp);
        self.advance_clock()
    }
}

impl LamportClock {
    pub fn new() -> Self {
        Self { time: 0 }
    }
}
```

#### Hybrid Clocks
#### Vector Clocks
#### Chain clocks


## The Problems of Unsynchronized Clocks
1. Algorithms that depend on synchronized clocks
2. Last Write Wins 


## The Challenges of Synchronization
1. Timer per CPU, OS has to provide a consistent view 
3. Network delays affect time synchronization 
4. Users might actually want clocks to be apart (for games)
5. Can you trust your sources? Is there built in protection against outliers?
6. Virtual machine clocks, plus process pauses


## Synchronizing Clocks
1. Having clocks agree with eachother 
2. Having clocks agree with some reference source
3. Sources of truth 


## NTP & PTP
1. An overview of NTP 
2. How NTP actually works (4 timestamps + calculations)
