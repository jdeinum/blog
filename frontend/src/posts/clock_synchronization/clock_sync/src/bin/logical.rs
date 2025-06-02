use anyhow::{Context, Result};
use clock_sync_lib::{data::SimpleGenerator, time::Clock};
use std::cmp::max;

#[derive(Clone, Debug)]
struct LamportClock {
    pub time: i64,
}

impl Clock for LamportClock {
    fn advance_clock(&mut self) -> i64 {
        self.time += 1;
        self.time
    }

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

#[tokio::main]
async fn main() -> Result<()> {
    // initialize tracing
    tracing_subscriber::fmt::init();

    // create clock all nodes will use
    let clock = LamportClock::new();

    // create data source for producers
    let data = SimpleGenerator {};

    clock_sync_lib::run::run(clock, data, 3)
        .await
        .context("run system")?;

    Ok(())
}
