use crate::fetchers::run_fetchers;

mod fetchers;

fn main() {
  println!("Hi!");
  run_fetchers().expect("There was an error when fetching data!");
}
