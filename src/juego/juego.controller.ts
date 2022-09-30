import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
//import { JuegoService } from '../juego/juego.service';


//Controller hace todo el ruteo
@Controller('juego')
export class JuegoController {

//constructor(private juegoService : JuegoService) {}

@Get('/test')
getEstadoJuego(): string {
    return 'Controller corriendo desde el juego.controller';
}
/* @Get('/juegos')
public listaJuegos(): any {
    return this.juegoService.listaJuegos();
} */

}
