import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JuegoController } from './juego/juego.controller';
//import { JuegoService } from './juego/juego.service';
//import { JuegoModule } from './juego/juego.module';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';

import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculosService } from './vehiculos/vehiculos.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'app') }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'juego') }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'calculadora') }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'vehiculo') }),
  ],
  controllers: [AppController, JuegoController, CalculadoraController, VehiculosController],
  providers: [AppService, /* JuegoService, */ CalculadoraService, VehiculosService],
})
export class AppModule {}
