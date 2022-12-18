const FORM = document.querySelector('#form')
FORM.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    swal('Mensaje Enviado!!!','Muchas Gracias','success');
}