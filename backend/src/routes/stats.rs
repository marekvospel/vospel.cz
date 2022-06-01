use crate::fetchers::stackoverflow::structs::StackOverflowUser;
use crate::RState;
use rocket::serde::json::Json;
use rocket::State;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub(crate) enum StatsResponse {
  Ok(Option<StackOverflowUser>),
  None,
}

#[get("/stats")]
pub(crate) fn stats(state: &State<RState>) -> Json<StatsResponse> {
  let value = state.stackoverflow();

  match value {
    Ok(value) => Json(StatsResponse::Ok(value)),
    Err(_) => Json(StatsResponse::None),
  }
}
