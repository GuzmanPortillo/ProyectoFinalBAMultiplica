

function enviarSolicitud() {

    let email = (document.getElementById('Email').value);

    if (email == "") {
        const costResult = document.getElementById('terminosYcondiciones');
        costResult.textContent = Swal.fire({
            title: "",
            text: "El campo email es obligatorio",
            icon: "warning"
          });
        return;
        }
        
 
    let terminos = (document.getElementById('terminosYcondiciones'));

    if ((terminos.checked == true)){
        
        const costResult = document.getElementById('terminosYcondiciones');
        costResult.textContent = Swal.fire({
            title: "OK",
            text: "Tu solicitud se envio con éxito",
            icon: "success"
          });
    }
    else{
        const costResult = document.getElementById('terminosYcondiciones')
        costResult.textContent = Swal.fire({
            title: "",
            text: "Debe aceptar los términos y condiciones",
            icon:"warning"
          });
    }
}