const fingers = ['thumb', 'index', 'middle', 'ring', 'pinky'];

fingers.forEach(finger => {
  document.getElementById(finger).onclick = (event) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    localStorage.setItem(finger, date);
    console.log(event.currentTarget);
    event.currentTarget.setAttribute('class', 'clicked');
  }
});
