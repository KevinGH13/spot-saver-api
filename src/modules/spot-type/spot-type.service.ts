import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SpotType } from './schemas/spot-type.schema';
import { Model } from 'mongoose';
import { CreateSpotTypeDto } from './dtos/create-spot-type';

@Injectable()
export class SpotTypeService {
  constructor(@InjectModel(SpotType.name) private readonly spotTypeModel: Model<SpotType>) { }

  async create(createSpotTypeDto: CreateSpotTypeDto): Promise<SpotType> {
    const createSpotType = await this.spotTypeModel.create(createSpotTypeDto);
    return createSpotType;
  }

  async findAll(): Promise<SpotType[]> {
    return this.spotTypeModel.find().exec();
  }
}
