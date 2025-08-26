import { Module } from '@nestjs/common';
import { SpotTypeController } from './spot-type.controller';
import { SpotTypeService } from './spot-type.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotType, SpotTypeSchema } from './schemas/spot-type.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SpotType.name, schema: SpotTypeSchema }])],
  controllers: [SpotTypeController],
  providers: [SpotTypeService],
})
export class SpotTypeModule { }
