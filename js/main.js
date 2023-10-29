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
        // Si hay 5 tareas no se puede agregar más
        const items = document.querySelectorAll('#list-item');
        if (items.length == 5){
            alert('Solo puedes agregar 5 tareas!')
        }
        else{

        const item = document.createElement('li')
        item.id = 'list-item'
        item.classList.add('item-style', 'd-flex', 'justify-content-between', 'align-items-start')
        const containerDivs = document.createElement('div');
        containerDivs.classList.add('d-flex', 'align-items-center', 'justify-content-around', 'h-100', 'w-100')
        // LOGICA IMAGEN
        const imgTarea = document.createElement('img')
        if (tipodetarea.value == 'Personal') {
            imgTarea.src = 'images/tipos/user.png'
        }
        else if(tipodetarea.value == 'Domestica'){
            imgTarea.src = 'images/tipos/home.png'
        }
        else if(tipodetarea.value == 'Entretenimiento'){
            imgTarea.src = 'images/tipos/joystick.png'
        }
        else{
            imgTarea.src = 'images/tipos/briefcase.png'
        }
        imgTarea.classList.add('item-style-img')
        // contenedor parrafos
        const containerText = document.createElement('div')
        containerText.classList.add('contenedor-tareas', 'd-flex', 'flex-column', 'align-items-center')
        // LOGICA TEXTOS
        const texto1 = document.createElement('p')
        texto1.textContent = nombre.value
        texto1.classList.add('texto-titulo')
        const texto2 = document.createElement('p')
        texto2.classList.add('texto-descripcion')
        texto2.textContent = descripcion.value
        const exitIcon = document.createElement('i');
        exitIcon.classList.add('bi', 'bi-x-circle')
        // LOGICA COLOR BORDE
        if (check1.checked){
            item.style.borderLeft = '5px solid yellow'
        }
        else if(check2.checked){
            item.style.borderLeft = '5px solid green'
        }
        else if(check3.checked){
            item.style.borderLeft = '5px solid purple'
        }
        else{
            item.style.borderLeft = '5px solid red'
        }
        // LOGICA BOTON ELIMINAR TAREA
        exitIcon.addEventListener('click', (e)=>{
            e.target.parentElement.remove()
            const items = document.querySelectorAll('#list-item');
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
        body.classList.remove('body-style')
    }}
    else{
        console.log('no funciona')
    }
}

agregar.addEventListener('click', agregarTarea)