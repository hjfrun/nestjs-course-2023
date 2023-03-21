import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { User } from './user/entity/user.entity'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Htj@0728',
      database: 'nestjs-mssql-demo',
      entities: [User],
      synchronize: true,
      extra: {
        trustServerCertificate: true
      }
    })
  ],
  controllers: [AppController]
})
export class AppModule {}
