import getAverage from '../helpers/data/average';
import button from './button';

const buildQuadrant = ({ title, btns, getTotal }) => {
  const divId = title.toLowerCase();
  const selector = document.querySelector(`#${divId}`);

  // ADD QUADRANT CLASS TO MAIN DIV FOR CSS
  $(`#${divId}`).addClass(`${divId}`);

  // BUILD OUT THE CONTAINER FOR EACH QUADRANT
  selector.innerHTML = `
    <div id="${divId}-container">
      <h1>${title}</h1>
      <div id="${divId}-score">${getTotal()}</div>
      <div id="${divId}-btn-container" class="d-flex"></div>
    </div>`;

  // ADD BUTTONS TO DOM
  btns.forEach((btn) => {
    document.querySelector(`#${divId}-btn-container`).innerHTML += button(btn, title);
  });

  // GET THE STARTING TOTAL FOR EACH DIV IF 100, DISABLE INCREMENT BUTTON
  const startingTotal = getTotal();
  if (startingTotal === 100) {
    $(`#${divId}-increment`).prop('disabled', true);
    $(`#${divId}-increment-1`).prop('disabled', true);
    $(`#${divId}-increment-2`).prop('disabled', true);
  }

  // ATTACH EVENTS TO THE BUTTONS THAT WERE CREATED FOR THE QUAD
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === `${divId}-increment`) {
      btns[0].cb();
      const total = getTotal();

      // ENABLE/DISABLE BUTTONS DEPENDING ON QUAD VALUE
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

      // ENABLE/DISABLE BUTTONS DEPENDING ON QUAD VALUE
      if (total < 100 && total > 0) {
        $(`#${divId}-increment`).prop('disabled', false);
        $(`#${divId}-decrement`).prop('disabled', false);
      }
      if (total <= 0) {
        $(`#${divId}-decrement`).prop('disabled', true);
      }

      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    // IF ELEMENT HAS 2 INCREMENTERS UPDATE CAPTURE ITEM 1
    if (e.target.id === `${divId}-increment-1`) {
      btns[0].cb();
      const total = getTotal();

      // ENABLE/DISABLE BUTTONS DEPENDING ON QUAD VALUE
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

    // IF ELEMENT HAS 2 INCREMENTERS UPDATE CAPTURE ITEM 2
    if (e.target.id === `${divId}-increment-2`) {
      btns[1].cb();
      const total = getTotal();

      // ENABLE/DISABLE BUTTONS DEPENDING ON QUAD VALUE
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

    // UPDATE THE PROGRESS BAR BASED ON CLICK EVENT
    getAverage();
  });
};

export default buildQuadrant;
