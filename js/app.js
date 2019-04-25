// variables
const email = document.getElementById('email')
const asusnto = document.getElementById('asunto')
const mensaje = document.getElementById('mensaje')
const btnEnviar = document.getElementById('enviar')
const form = document.getElementById('enviar-mail')
const btnReset = document.getElementById('resetBtn')

// listeners

eventListeners()

function eventListeners() {

    // inicio de la app y deshabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp)

    // campos del form
    email.addEventListener('blur', validate)
    asusnto.addEventListener('blur', validate)
    mensaje.addEventListener('blur', validate)

    // botones
    btnEnviar.addEventListener('click', send)
    btnReset.addEventListener('click', reset)
}

// funciones
function inicioApp() {

    // deshabilitar el envio
    btnEnviar.disabled = true
}

function validate() {

    // se valida la longitud y contenido
    validarLogitud(this)

    // validamos el mail
    if (this.type === 'email') {
        validateEmail(this)
    }

    let errors = document.querySelectorAll('.error')
    if (email.value !== '' && asusnto.value !== '' && mensaje.value !== '') {
        if (errors.length === 0) btnEnviar.disabled = false
    }
}

function send(e) {

    e.preventDefault()
    // spinner
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'block'

    // gif
    const enviado = document.createElement('img')
    enviado.src = 'img/mail.gif'
    enviado.style.display = 'block'
    
    // ocltar y mostrar
    setTimeout(() => {
        spinner.style.display = 'none'
        document.getElementById('loaders').appendChild(enviado)
        setTimeout(() => {
            enviado.remove()
            form.reset()
        }, 5000)
    }, 3000)
}

function reset(e) {

    form.reset()
    e.preventDefault()
}

const validarLogitud = campo => {

    if (campo.value.length !== 0) {
        campo.style.borderBottomColor = 'lime'
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}

const validateEmail = campo => {

    const mensaje = campo.value
    if (mensaje.indexOf('@') !== -1 && mensaje.indexOf('.') !== -1) {
        campo.style.borderBottomColor = 'lime'
        campo.classList.remove('error')
    } else {
        campo.style.borderBottomColor = 'red'
        campo.classList.add('error')
    }
}
