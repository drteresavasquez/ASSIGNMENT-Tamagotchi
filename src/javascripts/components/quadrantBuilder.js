import getAverage from '../helpers/data/average';
import button from './button';

const buildQuadrant = ({ title, btns, getTotal }) => {
  const divId = title.toLowerCase();
  $(`#${divId}`).addClass(`${divId}`);

  const selector = document.querySelector(`#${divId}`);
  selector.innerHTML = `
    <div id="${divId}-container">
      <h1>${title}</h1>
      <div id="${divId}-score">${getTotal()}</div>
      <div id="${divId}-btn-container" class="d-flex"></div>
    </div>`;

  btns.forEach((btn) => {
    document.querySelector(`#${divId}-btn-container`).innerHTML += button(btn, title);
  });

  const startingTotal = getTotal();
  if (startingTotal === 100) {
    $(`#${divId}-increment`).prop('disabled', true);
  }

  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === `${divId}-increment`) {
      btns[0].cb();
      const total = getTotal();
      if (total >= 100) {
        $(`#${divId}-increment`).prop('disabled', true);
        $(`#${divId}-decrement`).prop('disabled', false);
      }
      if (total < 100) {
        $(`#${divId}-increment`).prop('disabled', false);
        $(`#${divId}-decrement`).prop('disabled', false);
      }
      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    if (e.target.id === `${divId}-decrement`) {
      btns[1].cb();
      const total = getTotal();
      if (total < 100 && total > 0) {
        $(`#${divId}-increment`).prop('disabled', false);
        $(`#${divId}-decrement`).prop('disabled', false);
      }
      if (total <= 0) {
        $(`#${divId}-decrement`).prop('disabled', true);
      }

      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    if (e.target.id === `${divId}-increment-1`) {
      btns[0].cb();
      const total = getTotal();
      if (total >= 100) {
        $(`#${divId}-increment-1`).prop('disabled', true);
        $(`#${divId}-increment-2`).prop('disabled', true);
      }
      if (total < 100) {
        $(`#${divId}-increment-1`).prop('disabled', false);
        $(`#${divId}-increment-2`).prop('disabled', false);
      }
      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    if (e.target.id === `${divId}-increment-2`) {
      btns[1].cb();
      const total = getTotal();
      if (total >= 100) {
        $(`#${divId}-increment-1`).prop('disabled', true);
        $(`#${divId}-increment-2`).prop('disabled', true);
      }
      if (total < 100) {
        $(`#${divId}-increment-1`).prop('disabled', false);
        $(`#${divId}-increment-2`).prop('disabled', false);
      }
      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    getAverage();
  });
};

export default buildQuadrant;
