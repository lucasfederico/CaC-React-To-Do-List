const mostrarPopup = document.querySelector('#mostrarPopup')
const popup = document.querySelector('#popup')
const body = document.querySelector('body')
// BOTONES
const cancelar = document.querySelector('#cancelar')
const agregar = document.querySelector('#agregar')
// INPUTS
const nombre = document.querySelector('#nombre')
const tipodetarea = document.querySelector('#tipodetarea')
const descripcion = document.querySelector('#descripcion')
// LISTA
const lista = document.querySelector('#lista')

// BOTON MOSTRAR POPUP
mostrarPopup.addEventListener('click', () => {
    popup.classList.remove('show');
    body.classList.add('body-style')
    mostrarPopup.style.cursor = 'auto'
})
// BOTON CANCELAR SE CIERRA EL POPUP
cancelar.addEventListener('click', () => {
    popup.classList.add('show')
    body.classList.remove('body-style')
    mostrarPopup.style.cursor = 'pointer'
})

// LOGICA AGREGAR TAREA
const agregarTarea = () => {
    if ( nombre.value != '' && tipodetarea.value != 'Elegir tipo' && descripcion.value != '' && (check1.checked == true || check2.checked == true || check3.checked == true || check4.checked == true)) {
        const item = document.createElement('li')
        const p = document.createElement('li')
        p.textContent = 'hola que tal'
        item.appendChild(p)
        lista.appendChild(item)
    }
    else{
        console.log('no funciona')
    }
}

agregar.addEventListener('click', agregarTarea)