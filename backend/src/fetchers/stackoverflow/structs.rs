use serde::{Deserialize, Serialize};
use std::fmt::{Display, Formatter};

#[derive(Debug, Serialize, Deserialize, Eq, PartialEq, Clone)]
pub struct StackOverflowUser {
  pub display_name: String,
  pub account_id: u32,
  pub reputation: u32,
  pub badge_counts: StackOverflowBadgeCounts,
}

impl Display for StackOverflowUser {
  fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
    write!(f, "{} {}", self.display_name, self.reputation)
  }
}

#[derive(Debug, Serialize, Deserialize, Eq, PartialEq, Copy, Clone)]
pub struct StackOverflowBadgeCounts {
  bronze: u32,
  silver: u32,
  gold: u32,
}

impl Display for StackOverflowBadgeCounts {
  fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
    write!(f, "G{} S{} B{}", self.gold, self.silver, self.bronze)
  }
}

#[derive(Debug, Serialize, Deserialize, Eq, PartialEq, Clone)]
pub struct StackOverflowResponse<T> {
  pub items: Vec<T>,
  pub has_more: bool,
  pub quota_max: u32,
  pub quota_remaining: u32,
}

#[cfg(test)]
mod test {
  use crate::fetchers::stackoverflow::structs::{StackOverflowBadgeCounts, StackOverflowUser};
  use serde::Deserialize;
  use serde_json::json;

  #[test]
  fn user_gets_deserialized() -> Result<(), serde_json::Error> {
    let user = StackOverflowUser::deserialize(json!({
        "display_name": "marekvospel",
        "account_id": 15453477,
        "reputation": 1,
        "badge_counts": {
            "bronze": 0,
            "silver": 0,
            "gold": 0
        }
    }))?;

    assert_eq!(
      user,
      StackOverflowUser {
        display_name: "marekvospel".into(),
        account_id: 15453477,
        reputation: 1,
        badge_counts: StackOverflowBadgeCounts {
          bronze: 0,
          silver: 0,
          gold: 0
        }
      }
    );

    Ok(())
  }

  #[test]
  fn user_gets_serialized() -> Result<(), serde_json::Error> {
    let user = StackOverflowUser {
      display_name: "marekvospel".into(),
      account_id: 15453477,
      reputation: 1,
      badge_counts: StackOverflowBadgeCounts {
        bronze: 0,
        silver: 0,
        gold: 0,
      },
    };

    let data = serde_json::to_value(user)?;

    assert_eq!(
      data,
      json!({
          "display_name": "marekvospel",
          "account_id": 15453477,
          "reputation": 1,
          "badge_counts": {
              "bronze": 0,
              "silver": 0,
              "gold": 0
          }
      })
    );

    Ok(())
  }
}
