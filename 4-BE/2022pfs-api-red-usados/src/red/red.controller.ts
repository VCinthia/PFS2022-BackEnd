import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import UsadosLugar from 'src/vehiculos/usadosLugar';
import Red from './red';
import { RedService } from './red.service';

@Controller('red')
export class RedController {

    constructor(private redService : RedService) {}
    
    @Get()
    public listRedes() : Red[] {
        return this.redService.listRedes();
    }
    //
    @Get('/consulta')
    public consultarRed(@Body() criterio : any) : UsadosLugar[] {
        return this.redService.consultar(criterio);
    }
    //
    @Get(':sede')
    public listRed(@Param('sede') sede : string) : Red {
        return this.redService.listRed(sede);
    }
    @Post()
    public addRed(@Body() datos : any) : string {
        return this.redService.addRed(datos);
    }
    @Delete(':sede')
    public delRed(@Param('sede') sede : string) : string {
        return this.redService.delRed(sede);
    }
    @Put()
    public updRed(@Body() datos : any) : string {
        return this.redService.updRed(datos);
    }
    
}
