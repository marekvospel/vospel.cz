#[macro_use]
extern crate rocket;

use crate::fetchers::run_fetchers;

mod fetchers;

#[get("/")]
fn index() -> &'static str {
  "Hello"
}

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
  tokio::spawn(async {
    run_fetchers()
      .await
      .expect("There was an error when fetching data!");
  });

  let _rocket = rocket::build().mount("/", routes![index]).launch().await?;

  Ok(())
}
