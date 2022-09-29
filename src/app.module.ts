import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JuegoController } from './juego/juego.controller';
import { JuegoService } from './juego/juego.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';
import { JuegoModule } from './juego/juego.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'app') }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'juegos') }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'calculadora') }),
    JuegoModule,
  ],
  controllers: [AppController, JuegoController, CalculadoraController],
  providers: [AppService, JuegoService, CalculadoraService],
})
export class AppModule {}
