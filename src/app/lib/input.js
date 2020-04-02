// Swipe Up / Down / Left / Right
let initialX = null;
let initialY = null;

const startTouch = (e) => {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

const moveTouch = (e) => {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  initialX = null;
  initialY = null;

  callback();

  e.preventDefault();
};

window.input = {
  swipe: {
    startTouch,
    moveTouch,
  },
};
