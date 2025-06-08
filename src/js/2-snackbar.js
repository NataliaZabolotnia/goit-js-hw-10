import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('.input-delay');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delayValue = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delayValue);
      } else {
        reject(delayValue);
      }
    }, delayValue);
  });

  promise
    .then(delay => {
      iziToast.show({
        title: '✅',
        message: ` Fulfilled promise in ${delay}ms`,
        progressBarColor: 'rgb(0, 255, 184)',
        color: 'rgb(0, 255, 184)',
        position: 'topRight',
        messageColor: 'rgb(248, 245, 245)',
      });
    })
    .catch(delay => {
      iziToast.show({
        title: '❌',
        message: ` Rejected promise in ${delay}ms`,
        color: 'rgb(232, 65, 14)',
        position: 'topRight',
        messageColor: 'rgb(248, 245, 245)',
      });
    });
  event.target.reset();
}
