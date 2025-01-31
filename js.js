function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/*
document.addEventListener('keydown', function (event) {
  const loader = document.getElementById('loader');
  if (loader.getAttribute('style') !== 'display: inline-block;') {
    if (event.key === 'Enter') {
      const rollBtn = document.getElementById('randomiseBtnImage');
      const rerollBtn = document.getElementById('rerollBtnImage');
      if (rollBtn.getAttribute('state') === 'displayed') {
        rollBtn.click();
      }
      if (rerollBtn.getAttribute('state') === 'displayed') {
        rerollBtn.click();
      }
    }
  }
});
*/

function toggleGame(clickedImage) {
  if (clickedImage.classList.contains('active')) {
    clickedImage.classList.remove('active');
    clickedImage.classList.add('inactive');
    return;
  }
  if (clickedImage.classList.contains('inactive')) {
    clickedImage.classList.remove('inactive');
    clickedImage.classList.add('active');
    return;
  }
}

function deactivateAllGames() {
  const gameImages = document.querySelectorAll('.game-list li img');
  for (let image of gameImages) {
    image.classList.replace('active', 'inactive');
    image.classList.remove('js-transform');
  }
}

async function showRandomisedGame() {
  const randomiseBtn = document.getElementById('randomiseBtnImage');
  randomiseBtn.setAttribute('state', 'hidden');
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';
  const imageToBeDisplayed = document.getElementById('displayedGameImage');

  let gameImages = document.querySelectorAll('.game-list li img');
  const hasActive = Array.from(gameImages).some((img) =>
    img.classList.contains('active')
  );
  const hasInactive = Array.from(gameImages).some((img) =>
    img.classList.contains('inactive')
  );
  if (hasActive && hasInactive) {
    gameImages = Array.from(gameImages).filter((img) =>
      img.classList.contains('active')
    );
  }

  const imageSources = Array.from(gameImages).map((item) => item.src);

  const randomGameIndex = Math.floor(Math.random() * gameImages.length);
  let delayMs = 70;
  for (let i = 0; i < Math.floor(Math.random() * gameImages.length); i++) {
    for (let image of gameImages) {
      image.classList.add('active');
      image.classList.add('js-transform');
      await delay(delayMs);
      image.classList.remove('js-transform');
      if (delayMs < 120) {
        delayMs += 10;
      }
    }
  }
  for (let i = 0; i <= randomGameIndex; i++) {
    gameImages[i].classList.add('js-transform');
    await delay(delayMs);
    if (i < randomGameIndex) {
      gameImages[i].classList.remove('js-transform');
    }
  }
  imageToBeDisplayed.src = imageSources[randomGameIndex];
  imageToBeDisplayed.classList.remove('hidden');
  imageToBeDisplayed.style.opacity = 1; // Make sure it is fully visible
  imageToBeDisplayed.style.transform = 'scale(1.8)';
  loader.style.display = 'none';

  const rerollBtn = document.getElementById('rerollBtnImage');
  rerollBtn.style.display = 'block';
}

async function reroll() {
  const rerollBtn = document.getElementById('rerollBtnImage');
  rerollBtn.style.display = 'none';
  const displayedImage = document.getElementById('displayedGameImage');
  displayedImage.setAttribute('src', '');
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';

  let gameImages = document.querySelectorAll('.game-list li img');
  const hasActive = Array.from(gameImages).some((img) =>
    img.classList.contains('active')
  );
  const hasInactive = Array.from(gameImages).some((img) =>
    img.classList.contains('inactive')
  );
  if (hasActive && hasInactive) {
    gameImages = Array.from(gameImages).filter((img) =>
      img.classList.contains('active')
    );
  }

  const imageSources = Array.from(gameImages).map((item) => item.src);

  const randomGameIndex = Math.floor(Math.random() * gameImages.length);
  console.log(randomGameIndex);
  let delayMs = 60;
  for (let i = 0; i < Math.floor(Math.random() * gameImages.length); i++) {
    for (let image of gameImages) {
      image.classList.add('active');
      image.classList.add('js-transform');
      await delay(delayMs);
      image.classList.remove('js-transform');
      if (delayMs < 120) {
        delayMs += 10;
      }
    }
  }
  for (let i = 0; i <= randomGameIndex; i++) {
    gameImages[i].classList.add('js-transform');
    await delay(delayMs);
    if (i < randomGameIndex) {
      gameImages[i].classList.remove('js-transform');
    }
  }
  displayedImage.src = imageSources[randomGameIndex];
  displayedImage.classList.remove('hidden');
  displayedImage.style.opacity = 1; // Make sure it is fully visible
  displayedImage.style.transform = 'scale(1.8)';
  loader.style.display = 'none';
  rerollBtn.style.display = 'block';
}

function sendEmail() {
  // Predefined email details
  const recipient = 'example@example.com'; // Replace with the recipient's email
  const subject = 'Hello from JavaScript!'; // Email subject
  const body = 'This is a predefined message.'; // Email body content

  // Construct mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the user's default email client
  window.location.href = mailtoLink;
}

document
  .getElementById('communicationIcon')
  .addEventListener('click', function () {
    document
      .getElementById('communicationBtn')
      .classList.toggle('show-tooltip');
  });
