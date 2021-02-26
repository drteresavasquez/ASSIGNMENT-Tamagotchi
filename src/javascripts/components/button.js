const button = ({ type, text }, title) => `<div><button type="button" id="${title.toLowerCase()}-${type}" class="btn btn-${type.includes('increment') ? 'light' : 'danger'}">
    ${text}
  </button></div>`;

export default button;
