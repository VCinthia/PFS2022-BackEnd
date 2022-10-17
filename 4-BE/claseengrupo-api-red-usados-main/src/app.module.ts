import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculoController } from './vehiculos/vehiculo.controller';
import { VehiculoService } from './vehiculos/vehiculo.service';
import { RedController } from './red/red.controller';
import { RedService } from './red/red.service';
import { ConcesionariaController } from './concesionaria/concesionaria.controller';
import { ConcesionariaService } from './concesionaria/concesionaria.service';

@Module({
  imports: [ 
    ServeStaticModule.forRoot ( { rootPath : join (__dirname,'..','app') } )
  ],
  controllers: [AppController, VehiculoController, RedController, ConcesionariaController],
  providers: [AppService, VehiculoService, RedService, ConcesionariaService],
})
export class AppModule {}
