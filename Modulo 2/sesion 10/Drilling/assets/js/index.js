/* FUNCION QUE TIRA UNA ALERTA UNA VEZ INGRESADO LOS DATOS PEDIDOS EN EL FORMULARIO DE RESERVA */
$('#formReserva').submit(function(event) {
    event.preventDefault();
    const name = $('#nombre').val();
    const email = $('#correo').val();
    const phone = $('#telefono').val();
    const date = $('#fecha').val();
    const time = $('#hora').val();
    const asistente = $('#asistentes').val();
    if (name == '' || email == '' || phone == '' || date == '' || time == '' || asistente == '') {
        alert('por favor rellene todos los campos');
    } else {
        alert(`Estimado: ${name} agradecemos por reservar con nosotros. Hemos registrado ${asistente} asistentes. se ha enviado el código de confirmación al correo ${email}`);
    }
});
/* FUNCION QUE DEVUELVE DATOS QUE INGRESAMOS EN EL FORMULARIO DE COMUNIQUEMONOS */
const formComuniquemonos = document.getElementById("formCom");
formComuniquemonos.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const motivo = document.getElementById("motivo").value;
    const email = document.getElementById("email").value;
    if (name == '' || motivo == '' || email == '') {
        alert("por favor rellene todos los campos")
    } else {
        alert(`Muchas gracias ${name} hemos recibido su ${motivo} y enviaremos una pronta respuesta al correo: ${email}`)
    }
})
/* PERMITE QUE LOS FORMULARIOS OCULTOS EN PANTALLAS DE MOVIL SE DESPLIEGUEN CUANDO CLICKEAMOS EN SU BOTÓN DE LA BARRA DE NAVEGACIÓN */
if (window.innerWidth < 992) {
    const extendFormCom = document.getElementById("btnComuni");
    extendFormCom.addEventListener("click", function (event) {
        event.preventDefault();
        const formComuniquemonos = document.getElementById('comuniquemonos');
        formComuniquemonos.classList.remove('d-none');
        formComuniquemonos.scrollIntoView({ behavior: "smooth" });
    })
    const extendFormReserva = document.getElementById("btnReserva");
    extendFormReserva.addEventListener("click", function (event) {
        event.preventDefault();
        const formReserva = document.getElementById('reserva');
        formReserva.classList.remove('d-none');
        formReserva.scrollIntoView({ behavior: "smooth" });
    })
}
/* DESPLIEGA LAS IMAGENES DE LOS DESTACADOS DE LA SEMANA CON SU RESPECTIVO BOTON DE CIERRE  */
$("#cardGaseosa").on("click", function () {
    $("#modalGaseosa").show();
});
$("#cardTabla").on("click", function () {
    $("#modalTabla").show();
});
$("#cardShop").on("click", function () {
    $("#modalShop").show();
});
$(".close").on("click", function () {
    $(".modale").css("display", "none")
});




