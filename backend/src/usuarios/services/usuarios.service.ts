/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from '../models/dto/create-usuario.dto';
import { Usuario } from '../models/entities/usuario.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { jwtConstants } from '../constant/jwtConstants';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private jwtService: JwtService,
  ) {}
  async create(usuario: CreateUsuarioDto) {
    const { nome, email, senha } = usuario;
    const hash = await bcrypt.hash(senha, 8);

    return await this.usuarioRepository.save({
      nome,
      email,
      senha: hash,
    });
  }

  async listar(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async signIn(email, senha) {
    const user = await this.usuarioRepository.findOne({ where: { email } });
    const passwordMatch = await bcrypt.compare(senha, user.senha);
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.sign(payload, {
        secret: jwtConstants.secret,
        expiresIn: '10800s',
      }),
    };
  }
}
