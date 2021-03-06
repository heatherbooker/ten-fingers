const fingers = ['thumb', 'index', 'middle', 'ring', 'pinky'];

function showDaysSinceClicked(id, lastClicked) {
  const lastClickedDate = new Date(lastClicked);
  const today = new Date();
  const millisecondsPerDay = 1000*60*60*24;
  const timeDifference = today.getTime() - lastClickedDate.getTime();
  const daysDifference = Math.round( timeDifference / millisecondsPerDay );

  document.getElementById(id + 'Text').innerHTML = daysDifference;
}

function setup(id) {
  document.getElementById(id + 'Group').onclick = (event) => {
    const date = new Date();
    localStorage.setItem(id, date);
    document.getElementById(id).setAttribute('class', 'clicked');
  }

  const lastClicked = localStorage.getItem(id);
  if (lastClicked) {
    showDaysSinceClicked(id, lastClicked);
  }
}

fingers.forEach(finger => {
  setup(finger + 'Left');
  setup(finger + 'Right');
});
