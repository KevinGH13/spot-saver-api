import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Spot } from './schemas/spot.schema';
import { Model } from 'mongoose';
import { CreateSpotDto } from './dtos/create-spot';

@Injectable()
export class SpotService {
  constructor(@InjectModel(Spot.name) private readonly spotModel: Model<Spot>) { }

  async create(createSpotDto: CreateSpotDto): Promise<Spot> {
    const spot = await this.spotModel.create(createSpotDto);
    return spot;
  }

  async findAll(): Promise<Spot[]> {
    return this.spotModel.find().exec();
  }
}
