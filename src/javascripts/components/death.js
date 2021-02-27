const death = () => {
  document.querySelector('#app').innerHTML = `<div class="d-flex death"><h1 class="text-white">Your Pet DIED!</h1>
  <div><img src="https://media1.tenor.com/images/cfcf8abd561bfdbf6c03396f6c14e3aa/tenor.gif?itemid=11565777"></div>
  <div class="mt-3"><a href="/" class="btn btn-info">Try Again</a></div>
  </div>`;
};

export default death;
