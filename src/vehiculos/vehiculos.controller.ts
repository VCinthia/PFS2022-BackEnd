import { Body, Controller,Get,Post,Put,Delete } from '@nestjs/common';
import { Vehiculo } from './vehiculo';
import { VehiculosService } from './vehiculos.service';

@Controller('vehiculos')
export class VehiculosController {

    constructor(private vehiculosService : VehiculosService){};

    @Get()
    public getVehiculos() : Vehiculo[] {
        return this.vehiculosService.getvehiculos();
    }

    @Get(':patente')
    public getVehiculo(patente : string) : Vehiculo {
        return this.vehiculosService.getVehiculo(patente);
    }

    @Post('/cargarVehiculo')
        public createVehiculo(@Body() vehiculo : any) : string{
            return this.vehiculosService.addVehiculo(vehiculo);
    }
    
}
