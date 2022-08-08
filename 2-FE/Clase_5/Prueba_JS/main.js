let boton;
boton = document.getElementById("btnAviso")

boton.addEventListener("click", enviarAviso)

function enviarAviso() {
    console.log("Aviso");
    alert("Esto es un aviso");
}