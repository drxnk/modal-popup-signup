const cadastro = document.getElementById("cadastro");
const fechar = document.getElementById('close');

const modal = document.getElementById('form');

cadastro.addEventListener('click', () => {
  document.body.classList.add('modalpopup')
  modal.classList.add('modalpopup')
  cadastro.classList.add('modalpopup')
})

fechar.addEventListener('click', () => {
  document.body.classList.remove('modalpopup')
  modal.classList.remove('modalpopup')
  cadastro.classList.remove('modalpopup')
})