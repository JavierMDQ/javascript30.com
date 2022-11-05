const sHand = document.querySelector('.s-hand');
  const mHand = document.querySelector('.m-hand');
  const hHand = document.querySelector('.h-hand');

  function setDate() {
    const now = new Date();

    const s = now.getSeconds();
    const sDegrees = ((s / 60) * 360) + 90; // Plus 90 degrees so it "starts" at the top of the clock
    sHand.style.transform = `rotate(${sDegrees}deg)`;

    const m = now.getMinutes();
    const mDegrees = ((m / 60) * 360) + ((s/60)*6) + 90;
    mHand.style.transform = `rotate(${mDegrees}deg)`;

    const h = now.getHours();
    const hDegrees = ((h / 12) * 360) + ((m/60)*30) + 90;
    hHand.style.transform = `rotate(${hDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();