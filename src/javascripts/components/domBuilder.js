const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="progress"></div>
  <div id="eat" class="quad"></div>
  <div id="play" class="quad"></div>
  <div id="fight" class="quad"></div>
  <div id="sleep" class="quad"></div>
  <div id="pet"></div>`;
};

export default domBuilder;
