
let populares__card = document.querySelector('populares__card');
let btn_add = document.querySelector('btn_add');
let btn_edit = document.querySelector('btn_edit');
let btn_delete = document.querySelector('btn_delete');

//text-area de carga
/* let juego_nombre = document.querySelector('juego_nombre');
let juego_fecha = document.querySelector('juego_fecha');
let juego_descripcion = document.querySelector('juego_descripcion');
let juego_imagen = document.querySelector('juego_imagen'); */

let juegos = [];
//load();

/* private loadForm(contenido : Contenido){
    this.juegoForm.setValue({
        nombre: juego.nombre,
        fecha: estudio.fecha, 
        descripcion: juego.descripcion,
        imagen: juego.imagen,
      descripcion: juego.descripcion
    })
  } */

btn_add.addEventListener("click",() => {
    console.log("Funcion Agregar");
    let nombre = document.querySelector('juego_nombre').value;
    let fecha = document.querySelector('juego_fecha').value;
    let descripcion = document.querySelector('juego_descripcion').value;
    let imagen = document.querySelector('juego_imagen').value;
    let juego = { 
        "nombre" : nombre,
        "fecha" : fecha,
        "descripcion" : descripcion,
        "imagen" : imagen
    };
    juegos.push(juego);
    document.querySelector('juego_nombre').value="";
    document.querySelector('juego_fecha').value="";
    document.querySelector('juego_descripcion').value="";
    document.querySelector('juego_imagen').value="";
    /* mostrarJuegos(); */ //descomentar cuando lo tenga
});

function mostrarJuegos() {

}