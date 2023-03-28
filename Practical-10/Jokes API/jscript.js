const url = 'https://official-joke-api.appspot.com/random_joke';
async function getJoke() {
  try {
    const response = await fetch(url);
    const { setup, punchline } = await response.json();
    // display joke setup
    const jokeSetup = document.getElementById('joke-setup');
    jokeSetup.textContent = setup;
    // display joke punchline after 1 seconds
    setTimeout(() => {
      const jokePunchline = document.getElementById('joke-punchline');
      jokePunchline.textContent = punchline;
    }, 1000);
  } catch (error) {
    console.error(error);
  }
}
// attach event listener to button
const getJokeBtn = document.getElementById('get-joke-btn');
getJokeBtn.addEventListener('click', getJoke);
