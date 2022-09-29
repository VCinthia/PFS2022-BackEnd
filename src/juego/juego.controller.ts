import { Controller, Get } from '@nestjs/common';
import { JuegoService } from '../juego/juego.service';

@Controller('juego')
export class JuegoController {
    
    //constructor(private juegoService : JuegoService) {}

    @Get()
    getEstado() {
        return 'Controller Juego';
    }
    /* @Get('/juegos')
    public listaJuegos(): any {
        return this.juegoService.listaJuegos();
    } */

}
