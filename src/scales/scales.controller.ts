import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { ScalesService } from './scales.service';
import { CreateScaleDto } from '../dto/scale/create.scale.dto';
import { UpdateScaleDto } from '../dto/scale/update.scale.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { RoleGuard } from 'src/auth/role/role.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import ScaleResponse from './scale.response';

@Controller('scales')
@ApiTags('scales')
export class ScalesController {
  constructor(private readonly scalesService: ScalesService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a scale entry',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @Roles('Admin')
  create(@Body() createScaleDto: CreateScaleDto) {
    return this.scalesService.create(createScaleDto);
  }

  @Get()
  findAll() {
    const scales = this.scalesService.findAll();

    return ScaleResponse(HttpStatus.OK, 'List of scales', scales);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const scale = this.scalesService.findOne(+id);

    return ScaleResponse(HttpStatus.FOUND, 'Scale found', scale);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  update(@Param('id') id: string, @Body() updateScaleDto: UpdateScaleDto) {
    const updated = this.scalesService.update(+id, updateScaleDto);

    return ScaleResponse(HttpStatus.NO_CONTENT, 'Scale updated', updated);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  remove(@Param('id') id: string) {
    const deleted = this.scalesService.remove(+id);

    return ScaleResponse(HttpStatus.NO_CONTENT, 'Scale deleted', deleted);
  }
}
