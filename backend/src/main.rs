#[macro_use]
extern crate rocket;

use crate::fetchers::run_fetchers;
use crate::routes::index::index;
use crate::routes::stats::stats;
use crate::state::RState;

mod fetchers;
mod routes;
mod state;

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
  let state = RState::new();
  let clone = state.clone();

  tokio::spawn(async move {
    let user = run_fetchers()
      .await
      .expect("There was an error when fetching data!");

    // println!("{}", user);

    clone.set_stackoverflow(Some(user))
  });

  let _rocket = rocket::build()
    .manage(state)
    .mount("/", routes![index, stats])
    .launch()
    .await?;

  Ok(())
}
