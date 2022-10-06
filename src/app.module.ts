import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// import { CalculadoraController } from './calculadora/calculadora.controller';
// import { CalculadoraService } from './calculadora/calculadora.service';
// import { VehiculosController } from './vehiculos/vehiculos.controller';
// import { VehiculosService } from './vehiculos/vehiculos.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'app') }),
    // ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'calculadora') }),
    // ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'vehiculo') }),
  ],
  controllers: [AppController, /* CalculadoraController, VehiculosController */],
  providers: [AppService, /* CalculadoraService, VehiculosService */],
})
export class AppModule {}
