---
title: "Logical Clocks"
date: 2025-06-03
---
# Logical Clocks

Unlike the monotomic clock and the wall clock, logical clocks are typically fully
independent of the device clock. They are defined exclusvely in software, and
two independent logical clocks cannot be compared in any meaningful way. Logical
clocks are widely used in distributed systems to determine the relative ordering
of events, and are often used as Version Vectors.

## Lamport Clock

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

## Hybrid Clocks
## Vector Clocks
## Chain clocks
## Bloom Clocks






