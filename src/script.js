function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-content", {
    strings: `My love for you, like a river, flows
My heart it swells, as I’m exposed
To your beauty, like a star, aglow
Your presence, like a melody, I know`,
    autoStart: true,
  });
}

let poemFormElement = document.querySelector("#poem-search-form");
poemFormElement.addEventListener("submit", generatePoem);
