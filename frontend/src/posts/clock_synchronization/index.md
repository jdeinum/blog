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
install or how the application used the ticket to access the resources.\

## Using Time

When I imagine using time in my application, there's 3 main usages that come to
mind:
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
1. Monotomic 
2. Wall Clock
3. Logical Clocks
4. Hybrid Clocks
5. Vector Clocks
6. Chain clocks?
7. 


## The Problems of Unsynchronized Clocks
1. Algorithms that depend on synchronized clocks
2. Last Write Wins 
3. 


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
