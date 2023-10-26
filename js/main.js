const mostrarPopup = document.querySelector('#mostrarPopup')
const popup = document.querySelector('#popup')
const body = document.querySelector('body')
// BOTONES
const cancelar = document.querySelector('#cancelar')
const agregar = document.querySelector('#agregar')



mostrarPopup.addEventListener('click', () => {
    popup.classList.remove('show');
    body.classList.add('body-style')
    mostrarPopup.style.cursor = 'auto'
})
cancelar.addEventListener('click', () => {
    popup.classList.add('show')
    body.classList.remove('body-style')
    mostrarPopup.style.cursor = 'pointer'
})