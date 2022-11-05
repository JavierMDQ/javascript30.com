function removeTransition(e) {
  // Ignore border-color and box-shadow transitions
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // If there's no sound associated to that key, stop the function
  if (!audio) return;

  key.classList.add('playing');
  // We cn hit the same key multiple times, but the audio won't play if it's already playing.
  // That's why we need to rewind it to the start:
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);