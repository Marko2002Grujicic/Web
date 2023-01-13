var mario = document.querySelector('#mario');
var marioRunning = document.querySelector('#mario-running');
var game = document.querySelector('#game');

document.addEventListener('keydown', moveMario);

function moveMario(event) {
  if (event.key === 'ArrowRight') {
    mario.style.display = 'none';
    marioRunning.style.display = 'block';
    var left = parseInt(mario.style.left, 10) || 0;
    mario.style.left = (left + 5) + 'px';
    var backgroundPosition = parseInt(game.style.backgroundPosition, 10) || 0;
    game.style.backgroundPosition = (backgroundPosition - 5) + 'px';
  }
}