use crate::fetchers::stackoverflow::structs::StackOverflowUser;
use serde::ser::Error;
use std::ops::{Deref, DerefMut};
use std::sync::{Arc, RwLock};

#[derive(Debug, Clone)]
pub(crate) struct RState {
  stackoverflow: Arc<RwLock<Option<StackOverflowUser>>>,
}

impl RState {
  #[inline]
  pub fn new() -> Self {
    RState {
      stackoverflow: Arc::new(RwLock::new(None)),
    }
  }

  #[inline]
  pub fn stackoverflow(&self) -> Result<Option<StackOverflowUser>, std::fmt::Error> {
    let stackoverflow = self.stackoverflow.read();
    match stackoverflow {
      Ok(stackoverflow) => Ok(stackoverflow.deref().clone()),
      Err(_) => Err(std::fmt::Error::custom("Could not borrow from RwLock")),
    }
  }

  #[inline]
  pub fn set_stackoverflow(&self, value: Option<StackOverflowUser>) {
    let stackoverflow = self.stackoverflow.write();
    match stackoverflow {
      Ok(mut stackoverflow) => {
        let stackoverflow = stackoverflow.deref_mut();
        match value {
          None => {
            stackoverflow.take();
          }
          Some(value) => {
            let _ = stackoverflow.insert(value);
          }
        }
        Ok(())
      }
      Err(_) => Err(std::fmt::Error::custom("Could not borrow from RwLock")),
    }
    .unwrap();
  }
}
