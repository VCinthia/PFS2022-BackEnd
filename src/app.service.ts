import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEstado(): string {
    return 'Servicio app.service corriendo desde el app.controller';
  }
}
