/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUsuarioDto } from '../models/dto/create-usuario.dto';
import { UsuariosService } from '../services/usuarios.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() usuario: CreateUsuarioDto) {
    return this.usuariosService.create(usuario);
  }
  @Post('/login')
  login(@Body() usuario: CreateUsuarioDto) {
    return this.usuariosService.signIn(usuario.email, usuario.senha);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.usuariosService.listar();
  }
}
