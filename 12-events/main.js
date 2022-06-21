
window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  
})

function removeTransition(e) {
  console.log(e);
  this.classList.remove('playing')
}
const keys = document.querySelectorAll(".key")
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  let code;
  if (e.keyCode) {
    code = e.keyCode;
  } else {
    code = this.dataset.key;
  }
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}
const click = document.querySelectorAll(".key");
click.forEach(key => key.addEventListener('click',playSound))
