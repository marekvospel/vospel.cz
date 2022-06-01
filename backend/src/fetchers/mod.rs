use crate::fetchers::stackoverflow::structs::{StackOverflowResponse, StackOverflowUser};

pub(crate) mod stackoverflow;

pub(crate) async fn run_fetchers() -> Result<StackOverflowUser, reqwest::Error> {
  let result =
    reqwest::get("https://api.stackexchange.com/users/15453477?site=stackoverflow").await?;

  let stack: StackOverflowResponse<StackOverflowUser> = result.json().await?;

  // println!("{:?}", stack);

  Ok(stack.items.get(0).unwrap().clone())
}
