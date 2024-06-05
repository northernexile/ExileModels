import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScalesService } from './scales.service';
import { CreateScaleDto } from '../dto/scale/create.scale.dto';
import { UpdateScaleDto } from '../dto/scale/update.scale.dto';

@Controller('scales')
export class ScalesController {
  constructor(private readonly scalesService: ScalesService) {}

  @Post()
  create(@Body() createScaleDto: CreateScaleDto) {
    return this.scalesService.create(createScaleDto);
  }

  @Get()
  findAll() {
    return this.scalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scalesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScaleDto: UpdateScaleDto) {
    return this.scalesService.update(+id, updateScaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scalesService.remove(+id);
  }
}
