import { Body, Controller, Get, Post } from '@nestjs/common';
import { SpotService } from './spot.service';
import { CreateSpotDto } from './dtos/create-spot';
import { Spot } from './schemas/spot.schema';

@Controller('spot')
export class SpotController {
  constructor(private readonly spotService: SpotService) { }

  @Post()
  create(@Body() createSpotDto: CreateSpotDto) {
    return this.spotService.create(createSpotDto);
  }

  @Get()
  findAll(): Promise<Spot[]> {
    return this.spotService.findAll();
  }
}
