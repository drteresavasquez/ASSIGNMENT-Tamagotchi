import button from './button';

const buildQuadrant = ({ title, btns }) => {
  const divId = title.toLowerCase();
  $(`#${divId}`).addClass(`${divId}`);
  const selector = document.querySelector(`#${divId}`);
  selector.innerHTML = `
    <div id="${divId}-container">
      <h1>${title}</h1>
      <div id="${divId}-btn-container" class="d-flex"></div>
    </div>`;

  btns.forEach((btn) => {
    $(`#${divId}-btn-container`).append(button(btn, title));
  });

  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === `${divId}-increment`) {
      console.warn(`${divId}-increment`);
    }
    if (e.target.id === `${divId}-decrement`) {
      console.warn(`${divId}-decrement`);
    }
  });
};

export default buildQuadrant;
