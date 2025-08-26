import { Module } from '@nestjs/common';
import { SpotController } from './spot.controller';
import { SpotService } from './spot.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Spot, SpotSchema } from './schemas/spot.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Spot.name, schema: SpotSchema }])],
  controllers: [SpotController],
  providers: [SpotService]
})
export class SpotModule { }
