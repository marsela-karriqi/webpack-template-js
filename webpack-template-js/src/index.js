const requestJoke = async () => {
  const url = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const displayJoke = async () => {
  const joke = await requestJoke();
  console.log(joke.value);
}

displayJoke();
