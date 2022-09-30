/* import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegoService {

    constructor(){
        this.listaJuegos();
    }

    //abrir http (metodo, url)
    //CRUD: CREATE- POST | READ - GET | UPDATE - PUT OR PATCH | DELETE - DELETE

    //Fetch API:

    getEstado(): any {
        console.log('Juego Service');        
      }

    public listaJuegos = () => 
    fetch('http://localhost:3000/juegos').then((respuesta) => respuesta.json()); 

    //const crearJuego = () => 

    //const eliminarJuego = () => 

    //const detalleJuego = () => 

    //const actualizarJuego = () => 

    public clientService : any = {
        listaJuegos : this.listaJuegos ,
        //crearJuego,
        //eliminarJuego,
        //detalleJuego,
        //actualizarJuego,
        }
    
}


 */