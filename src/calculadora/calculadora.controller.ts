import { Controller, Get, Param } from '@nestjs/common';
import { CalculadoraService } from './calculadora.service';

@Controller('calculadora')
export class CalculadoraController {

    constructor(private calculadoraService: CalculadoraService){}

    @Get('/calculadora/suma/:a/:b')
    public suma(@Param('a') a, @Param('b') b) : number {
        return this.calculadoraService.suma(parseInt(a), parseInt(b));
    }

    @Get('/calculadora/resta/:a/:b')
    public resta(@Param('a') a, @Param('b') b) : number {
        return this.calculadoraService.resta(parseInt(a), parseInt(b));
    }

    @Get('/calculadora/multiplicacion/:a/:b')
    public multiplicacion(@Param('a') a, @Param('b') b) : number {
        return this.calculadoraService.multiplicacion(parseInt(a), parseInt(b));
    }

    @Get('/calculadora/division/:a/:b')
    public division(@Param('a') a, @Param('b') b) : number {
        return this.calculadoraService.division(parseInt(a), parseInt(b));
    }

   /*  @Get('/calculadora/calcular/:a/:b')
    public calcular(@Param ('metodo') @Param('a') a, @Param('b') b) : any {
        return this.calculadoraService.calcular(metodo, parseInt(a), parseInt(b));
    } */
    
}
