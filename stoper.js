const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const count = document.querySelector('.time div');

let time = 0; //setne sekundy
let active = false;
let idTime;

const timer = () => {
 if (!active) {
  active = !active
  btnStart.textContent = 'Stop';
  idTime = setInterval(start, 10);
 } else {
  active = !active
  btnStart.textContent = 'Start';
  clearInterval(idTime)
 }
}

const start = () => {
 time++;
 count.textContent = (time / 100).toFixed(2);

}

const reset = () => {
 time = 0;
 count.textContent = '- - -';
 active = false;
 btnStart.textContent = 'Start';
 clearInterval(idTime)
}

btnStart.addEventListener('click', timer);
btnReset.addEventListener('click', reset);