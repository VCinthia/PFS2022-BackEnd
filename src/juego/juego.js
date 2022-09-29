import { clientService } from "../service/client-service.js";

const crearNuevaLinea = (nombre, fechaLanzamiento, descripcion, img, id) => {
    const linea = document.createElement("div");
    const contenido = `
    <img class="populares__card___imagen" src="${img}"></img>
        <div class="populares__card___base">
            <div class="populares__card___header">
                <div class="populares__principal btn__delete">
                        <!--BOTON ELIMINAR-->
                    <button class="populares__boton ">                             
                        <i class="populares__icon fas fa-trash-alt"></i>                          
                    </button>
                        <!--BOTON EDITAR-->
                    <button class="populares__boton btn__edit">
                        <i class="populares__icon fas fa-edit"></i>                     
                    </button>
                </div> 
                <h5 class="populares__card___titulo">${nombre}</h5>
                <time class="populares__card___data" datetime="201-10-14">${fechaLanzamiento}</time>
            </div>
            <div class="populares__card___descripcion">
                ${descripcion}
            </div>
        </div>`;
        linea.innerHTML = contenido;//transforma la const linea en html con su contenido
    
    return linea;//lo devuelve para que se muestre
};

const div = document.querySelector('[data-card]')//llama a traves a colocar en la clase 'data-card' la constante 'div'-> es importante las [ ]

clientService
    .listaJuegos()
    .then ((data)=> {
        data.forEach(({nombre, fechaLanzamiento, descripcion, img, id}) => {
            const nuevaLinea = crearNuevaLinea(nombre, fechaLanzamiento, descripcion, img, id);
            div.appendChild(nuevaLinea);
        });
    })
    .catch((error) => alert("Ocurrio un error"));
