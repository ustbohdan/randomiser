function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showRandomisedGame() {
  const randomiseBtn = document.getElementById('randomiseBtnImage');
  randomiseBtn.setAttribute('state', 'hidden');
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';
  const imageToBeDisplayed = document.getElementById('displayedGameImage');

  const gameImages = document.querySelectorAll('.game-list li');
  const imageSources = Array.from(gameImages).map(
    (item) => item.querySelector('img').src
  );

  const randomGameIndex = Math.floor(Math.random() * gameImages.length);
  console.log(randomGameIndex);
  for (let i = 0; i < 5; i++) {
    for (let image of gameImages) {
      image.style.transform = 'scale(1.1)';
      const delayMs = `1${i}0`;
      await delay(+delayMs);
      image.style.transform = 'scale(1)';
    }
  }
  imageToBeDisplayed.src = imageSources[randomGameIndex];
  imageToBeDisplayed.classList.remove('hidden');
  imageToBeDisplayed.style.opacity = 1; // Make sure it is fully visible
  imageToBeDisplayed.style.transform = 'scale(2)';
  console.log('lastif');
}
