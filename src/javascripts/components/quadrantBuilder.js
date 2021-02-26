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

  // ATTACH EVENTS TO THE BUTTONS THAT WERE CREATED FOR THE QUAD
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === `${divId}-increment`) {
      btns[0].cb();
      const total = getTotal();

      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    if (e.target.id === `${divId}-decrement`) {
      btns[1].cb();
      const total = getTotal();
      document.querySelector(`#${divId}-score`).innerHTML = total;
    }

    // UPDATE THE PROGRESS BAR BASED ON CLICK EVENT
    getAverage();
  });
};

export default buildQuadrant;
