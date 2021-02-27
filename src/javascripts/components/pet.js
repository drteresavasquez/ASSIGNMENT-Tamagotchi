const addPet = () => {
  document.querySelector('#pet').addEventListener('click', () => {
    $('.modal').modal('toggle');
  });

  document.querySelector('#pet').style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/almost-1564e.appspot.com/o/misc%2Fskeeter.png?alt=media&token=1762a3d2-4e8c-4429-999a-d1d74eb5f163')";
};

const updatePet = (url) => {
  document.querySelector('#pet').style.backgroundImage = `url('${url}')`;
};

export { addPet, updatePet };
