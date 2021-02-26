const button = ({ type, text }, title) => `<div><button type="button" id="${title.toLowerCase()}-${type}" class="btn btn-primary">
    ${text}
  </button></div>`;

export default button;
