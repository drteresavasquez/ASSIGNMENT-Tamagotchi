import { updatePet } from './pet';

const modal = () => {
  document.querySelector('#app').innerHTML += `
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="pet modal" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Your Pet Image</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div id="error"></div>
          <input id="pet-image-url" class="form-control form-control-lg" type="url" placeholder="Enter a URL">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button id="save-pet-image" type="button" class="btn btn-success">Save Pet</button>
          </div>
        </div>
      </div>
    </div>`;

  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id === 'save-pet-image') {
      const url = document.querySelector('#pet-image-url').value;

      const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
      const regex = new RegExp(expression);

      if (url.match(regex)) {
        document.querySelector('#error').innerHTML = '';
        updatePet(url);
        $('.modal').modal('toggle');
      } else {
        document.querySelector('#error').innerHTML = '<div class="error-message">Please enter a properly formatted URL</div>';
      }
    }
  });
};

export default modal;
