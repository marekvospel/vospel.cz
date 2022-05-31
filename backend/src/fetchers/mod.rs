use crate::fetchers::stackoverflow::structs::{StackOverflowResponse, StackOverflowUser};

mod stackoverflow;

pub(crate) fn run_fetchers() -> Result<(), reqwest::Error> {
  let result =
    reqwest::blocking::get("https://api.stackexchange.com/users/15453477?site=stackoverflow")?;

  let stack: StackOverflowResponse<StackOverflowUser> = result.json()?;

  println!("{:?}", stack);

  Ok(())
}
