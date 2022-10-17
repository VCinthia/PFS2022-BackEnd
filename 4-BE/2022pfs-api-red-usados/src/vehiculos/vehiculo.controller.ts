import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import Vehiculo from './vehiculo';

@Controller('vehiculo')
export class VehiculoController {

    constructor(private vehiculoService : VehiculoService) {}

    @Get()
    public listarVehiculos() : Vehiculo[] {
        return this.vehiculoService.listarTodos();
    }
    @Get('/autos')
    public listarVehiculosAutos() : Vehiculo[] {
        return this.vehiculoService.listarAutos();
    }
    @Get('/camionetas')
    public listarVehiculosCamionetas() : Vehiculo[] {
        return this.vehiculoService.listarCamionetas();
    }
    @Get('/:dominio')
    public listarVehiculo(@Param('dominio') dominio : string) : Vehiculo {
        return this.vehiculoService.listarVehiculo(dominio);
    }
    @Get('/tipo/:tipo')
    public listarVehiculoXTipo(@Param('tipo') tipo : string) : Vehiculo[] {
        return this.vehiculoService.listarVehiculosTipo(tipo);
    }
    @Post()
    public agregarVehiculos(@Body() datos : any) : string {
        return this.vehiculoService.agregarVehiculos(datos);
    }
    @Delete('/:dominio')
    public deleteVehiculos(@Param('dominio') dominio : string) : string {
        return this.vehiculoService.eliminarVehiculo(dominio);
    }
    @Put('/:dominio')
    public modificarVehiculos(@Param('dominio') dominio : string, @Body() datos : any) : string {
        return this.vehiculoService.modificarVehiculos(dominio, datos);
    }
}
