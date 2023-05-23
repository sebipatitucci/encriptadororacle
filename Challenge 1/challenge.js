const inputMensaje = document.getElementById("txtMensaje");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnLimpiar = document.getElementById("btnLimpiar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const inputResultado = document.getElementById("txtResultado");
const btnCopiar = document.getElementById("btnCopiar");
const imgGoku = document.getElementById("goku");

function encriptar(){
    let mensajeEncriptado = inputMensaje.value;
    let characters = "abcdefghijklmnñopqrstuvwxyz ";
    for(let letra of mensajeEncriptado){
        if(!characters.includes(letra)){
            inputResultado.value = "Ha ingresado un dato incorrecto";
            btnCopiar.style.display = 'none';
            imgGoku.style.display = 'none';
            break;
        }else{
            let mensaje = mensajeEncriptado
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("o", "ober")
            .replaceAll("a", "ai")
            .replaceAll("u", "ufat");

            inputResultado.value = mensaje;
            btnCopiar.style.display = 'block';
            imgGoku.style.display = 'none';
        } 
    }
}

function desencriptar(){
    let mensajeDesencriptado = inputMensaje.value;
    let mensaje = mensajeDesencriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    
    inputResultado.value = mensaje;
}

function copiar(){
    let msgEncriptado = inputResultado.value;
    navigator.clipboard.writeText(msgEncriptado);
    inputMensaje.focus();
    inputMensaje.value = "";
}

function limpiar(){
    inputMensaje.value = "";
    inputMensaje.focus();
    inputResultado.value = "";
    btnCopiar.style.display = 'none';
    imgGoku.style.display = 'block';
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnLimpiar.onclick = limpiar;