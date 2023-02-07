const refs = {
    buttonStart: document.querySelector('[data-start]'),
    buttonStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
  };
  
  const INTERVAL_TIME = 1000;
  refs.buttonStop.disabled = true;
  let timerId = null;
  
  refs.buttonStart.addEventListener('click', onStartChangeColor);
  refs.buttonStop.addEventListener('click', onStoptChangeColor);
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function onGetColorBody() {
    refs.body.style.backgroundColor = getRandomHexColor();
  }
  
  function onStartChangeColor() {
    toggleDisableButton(true, false);
    timerId = setInterval(onGetColorBody, INTERVAL_TIME);
  }
  
  function onStoptChangeColor() {
    toggleDisableButton(false, true);
    clearInterval(timerId);
  }
  
  function toggleDisableButton(buttonStart, buttonStop) {
    refs.buttonStart.disabled = buttonStart;
    refs.buttonStop.disabled = buttonStop;
  }
