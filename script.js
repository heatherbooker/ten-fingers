const fingers = ['thumb', 'index', 'middle', 'ring', 'pinky'];

fingers.forEach(finger => {
  document.getElementById(finger).onclick = (event) => {
    const date = new Date();
    localStorage.setItem(finger, date);
    event.currentTarget.setAttribute('class', 'clicked');
  }
  const lastClicked = new Date(localStorage.getItem(finger));
  if (lastClicked) {
    const today = new Date();
    const millisecondsPerDay = 1000*60*60*24;
    const timeDifference = today.getTime() - lastClicked.getTime();
    const daysDifference = Math.round( timeDifference / millisecondsPerDay );
    document.getElementById(finger + 'Text').innerHTML = daysDifference;
  }
});
