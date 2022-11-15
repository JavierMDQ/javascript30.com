const pressed = [];
const secretCode = 'javier';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  // TODO: implement other cases like uppercase, or symbols (using Shift key)
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
  }
  console.log(pressed);
});