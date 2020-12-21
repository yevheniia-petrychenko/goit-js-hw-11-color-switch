const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

let timer = null

const handleOnClick = {
    start() {
        timer = setInterval(changeBackgroundColor, 1000);
        refs.startBtn.setAttribute('disabled', true);
        refs.stopBtn.removeAttribute('disabled')
    },
    stop() {
        clearInterval(timer)

        refs.startBtn.removeAttribute('disabled');
        refs.stopBtn.setAttribute('disabled', true)
    }
}


function changeBackgroundColor() {
    refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]
}
    
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', handleOnClick.start);
refs.stopBtn.addEventListener('click', handleOnClick.stop);