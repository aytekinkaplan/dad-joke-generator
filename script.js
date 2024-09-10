const joke_text = document.getElementById("joke-text");
const joke_btn = document.getElementById("joke-btn");
const url = "https://icanhazdadjoke.com/";

joke_btn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  joke_text.style.opacity = 0;
  setTimeout(() => {
    joke_text.innerHTML = data.joke;
    joke_text.style.opacity = 1;
  }, 500);
}
