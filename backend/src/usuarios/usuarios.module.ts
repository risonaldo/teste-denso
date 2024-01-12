/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosController } from './controllers/usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './models/entities/usuario.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
// import { jwtConstants } from './constant/jwtConstants';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), JwtModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, JwtService],
})
export class UsuariosModule {}
