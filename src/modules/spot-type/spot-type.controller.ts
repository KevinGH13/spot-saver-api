import { Body, Controller, Get, Post } from '@nestjs/common';
import { SpotTypeService } from './spot-type.service';
import { CreateSpotTypeDto } from './dtos/create-spot-type';
import { SpotType } from './schemas/spot-type.schema';

@Controller('spot-type')
export class SpotTypeController {
  constructor(private readonly spotTypeService: SpotTypeService) { }

  @Post()
  async create(@Body() createSpotTypeDto: CreateSpotTypeDto) {
    return this.spotTypeService.create(createSpotTypeDto);
  }

  @Get()
  async findAll(): Promise<SpotType[]> {
    return this.spotTypeService.findAll();
  }
}
