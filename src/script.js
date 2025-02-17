function displayAnimatedPoem(response) {
  let divPoemElement = document.querySelector("#poem-content");
  divPoemElement.classList.remove("blinking-text");
  new Typewriter("#poem-content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let character = document.querySelector("#search-input");
  //   alert(character);
  let apiKey = "f300cf6ad21c42dc4f0oefe03b237t4a";
  let context =
    "Please write me a romantice poem for me without reaosning it.";
  let prompt = `Please search for a poem describing the character ${character}?`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let divPoemElement = document.querySelector("#poem-content");
  divPoemElement.classList.add("blinking-text");
  divPoemElement.innerHTML =
    "The AI is searching for a romantic poem that will hyptonize you....";
  axios.get(apiUrl).then(displayAnimatedPoem);
}

let poemFormElement = document.querySelector("#poem-search-form");
poemFormElement.addEventListener("submit", generatePoem);
