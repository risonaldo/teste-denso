import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ProdutosModule } from './produtos/produtos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Produto } from './produtos/models/entities/produto.entity';
import { Categoria } from './categorias/models/entities/categoria.entity';
import { Usuario } from './usuarios/models/entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([Produto, Categoria, Usuario]),
    ProdutosModule,
    CategoriasModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
