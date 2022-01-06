//Red social -> Publicaciones

let reacciones_disponibles = ["Me gusta", "Me divierte", "Me entristece"];
let correo_electronico = "usuario-78@gmail.com";
let clave = "usuario45244";
let url_foto_perfil = "assets.mysocialnetwork.com?=id/assets/img/perfil.png";
let nombre = "Juan Gutierrez";
let edad = 20;
let cant_notificaciones = 0;
let genero =  "Masculino";
let nmr_amigos = 421;

let estado_cuenta = true;
let privacidad = ["Solo yo","Amigos", "Publico"]

$(document).ready(function(){
    $("#btn-ingresar").click(function(){
        var correo = $("#mail").val();
        var clave = $("#pass").val();

        if(correo == "ctc@gmail.com" & clave == "1234"){
            alert("Ingreso Correcto");
            //Llevar al siticio web de la cuenta
        }
    })
})

