const number = 5;

for (let i = 0; i < number; i++) {
  document.body.innerHTML += '<div class="row"></div>';

  for (let j = 0; j < number; j++) {
    document.body.innerHTML += '<div class="square"></div>';
  }
}
randomInt = number => Math.floor(Math.random() * number);
randomColor = () => `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;

function generateBlocks() {
  document.querySelectorAll(".square").forEach((el) => {
    el.style.backgroundColor = randomColor();
  });
}
generateBlocks();

function generateBlocksInterval() {
  setInterval(function () {
    generateBlocks();
  }, 1000);
}
generateBlocksInterval()
