// import './css/style.css'
import refs from './js/refs.js'

const { btnStart, btnStop, body } = refs;



const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];



let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



function changeColor() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, 5)]
}


function changeEnableButton(btn) {
  btn.classList.contains('noactive')
    ? btn.removeAttribute('noactive')
    : btn.setAttribute('noactive', true)
  btn.classList.toggle('noactive')
}

function onStartInterval(e) {
    intervalId = setInterval(changeColor, 1000);
    changeEnableButton(btnStop);
    changeEnableButton(btnStart);
}

function onStopInterval() {
  clearInterval(intervalId)
  changeEnableButton(btnStop)
  changeEnableButton(btnStart)
}

btnStop.classList.add('noactive')
btnStart.addEventListener('click', onStartInterval)
btnStop.addEventListener('click', onStopInterval)


