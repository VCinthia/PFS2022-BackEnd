import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Concesionaria from './concesionaria';
import { ConcesionariaService } from './concesionaria.service';

@Controller('concesionaria')
export class ConcesionariaController {

    constructor(private concesionariaService : ConcesionariaService) {}

    @Get()
    public listConcesionarias() : Concesionaria[] {
        return this.concesionariaService.listConcesionarias();
    }
    @Get(':sede')
    public listConcesionaria(@Param('sede') sede : string) : Concesionaria {
        return this.concesionariaService.listConcesionaria(sede);
    }
    @Post()
    public addConcesionaria(@Body() datos : any) : string {
        return this.concesionariaService.addConcesionaria(datos);
    }
    @Delete(':sede')
    public delConcesionaria(@Param('sede') sede : string) : string {
        return this.concesionariaService.delConcesionaria(sede);
    }
    @Put()
    public updConcesionaria(@Body() datos : any) : string {
        return this.concesionariaService.updConcesionaria(datos);
    }

}
