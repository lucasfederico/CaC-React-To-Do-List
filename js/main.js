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
// empty
const empty = document.querySelector('#empty')

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
        // Li
        const item = document.createElement('li')
        item.classList.add('item-style', 'd-flex', 'justify-content-between', 'align-items-start')
        const containerDivs = document.createElement('div');
        containerDivs.classList.add('d-flex', 'align-items-center', 'justify-content-around', 'h-100', 'w-100')
        // imagen
        const imgTarea = document.createElement('img')
        imgTarea.src = 'images/tipos/briefcase.png'
        imgTarea.classList.add('item-style-img')
        // contenedor parrafos
        const containerText = document.createElement('div')
        containerText.classList.add('contenedor-tareas', 'd-flex', 'flex-column', 'align-items-center')
        // Textos
        const texto1 = document.createElement('p')
        texto1.textContent = 'Comer'
        texto1.classList.add('texto-titulo')
        const texto2 = document.createElement('p')
        texto2.classList.add('texto-descripcion')
        texto2.textContent ='preparar la mesa, cubiertos'
        const exitIcon = document.createElement('i');
        exitIcon.classList.add('bi', 'bi-x-circle')
        exitIcon.addEventListener('click', (e)=>{
            e.target.parentElement.remove()
            const items = document.querySelectorAll('li');
            if (items.length === 0){
                empty.classList.remove('show')
            }
        })
        
        containerText.appendChild(texto1)
        containerText.appendChild(texto2)
        containerDivs.appendChild(imgTarea)
        containerDivs.appendChild(containerText)
        item.appendChild(containerDivs)
        item.appendChild(exitIcon)
        lista.appendChild(item)

        empty.classList.add('show')
        popup.classList.add('show')
    }
    else{
        console.log('no funciona')
    }
}

agregar.addEventListener('click', agregarTarea)