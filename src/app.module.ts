import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotTypeModule } from './modules/spot-type/spot-type.module';
import { SpotModule } from './modules/spot/spot.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import mongoConfig from './config/mongo.config';
import { HealthController } from './modules/health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env', load: [mongoConfig] }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongo.uri'),
      }),
    }),
    SpotTypeModule,
    SpotModule
  ],
  controllers: [AppController, HealthController],
  providers: [AppService]
})
export class AppModule { }
