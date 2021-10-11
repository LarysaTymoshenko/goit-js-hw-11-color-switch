
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
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}


function onStartInterval() {
  intervalId = setInterval(changeColor, 1000);
  btnStart.noactive = true;

btnStop.noactive = !btnStart.noactive;
  btnStart.classList.add('noactive');
   btnStop.classList.remove('noactive');
}

function onStopInterval(){
 clearInterval(intervalId);
  btnStart.noactive = false?
  btnStop.noactive = !btnStart.noactive:
  btnStart.classList.remove('noactive')
  btnStop.classList.add('noactive');
}


btnStart.addEventListener('click', onStartInterval);
btnStop.addEventListener('click', onStopInterval);


