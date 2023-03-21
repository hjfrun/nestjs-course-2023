import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { User } from './user/entity/user.entity'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileModule } from './profile/profile.module';

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
    }),
    AuthModule,
    ProfileModule
  ],
  controllers: [AppController, ProfileController]
})
export class AppModule {}
