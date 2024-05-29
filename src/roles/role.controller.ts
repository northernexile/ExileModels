import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  ServiceUnavailableException,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import SuccessResponse from '../services/responses/success.response';
import roleResponse from './role.response';
import { CreateRoleDto } from '../dto/role/create.role';
import { UpdateRoleDto } from '../dto/role/update.role';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard';
import { Roles } from '../auth/roles/roles.decorator';

@Controller('roles')
export class RoleController {
  constructor(private rolesService: RolesService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('list')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of roles',
  })
  @Roles('Admin', 'Guest')
  async findAll() {
    return SuccessResponse(
      'Application user roles',
      await this.rolesService.findAll(),
    );
  }

  @Get(':roleId')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Specific role located by `id`',
  })
  @ApiParam({
    name: 'id',
    description: 'The role id',
    required: true,
    type: 'Number',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin', 'Guest')
  async getById(@Param('roleId') roleId: number) {
    const role = await this.rolesService.findOneById(roleId);
    if (role) {
      return roleResponse(HttpStatus.OK, 'Role found', role);
    }

    throw new NotFoundException({
      code: HttpStatus.NOT_FOUND,
      message: 'Role not found',
    });
  }

  @Post()
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a role',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  async create(createRoleDto: CreateRoleDto) {
    const role = await this.rolesService.create(createRoleDto);

    if (!role) {
      throw new UnauthorizedException();
    }

    return roleResponse(HttpStatus.CREATED, 'Role created', role);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Update a role',
  })
  @ApiParam({
    name: 'roleId',
    description: 'The role id',
    required: true,
    type: 'Number',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin', 'Guest')
  async update(
    @Param('roleId') roleId: number,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    const role = await this.rolesService.update(roleId, updateRoleDto);

    if (!role) {
      throw new ServiceUnavailableException({
        code: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'Could not update role' + updateRoleDto.name,
      });
    }

    return roleResponse(HttpStatus.NO_CONTENT, 'Role updated', role);
  }

  @Delete(':roleId')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'delete a role',
  })
  @ApiParam({
    name: 'roleId',
    description: 'The role id',
    required: true,
    type: 'Number',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  async delete(@Param('roleId') roleId: number) {
    const deleted = await this.rolesService.delete(roleId);

    if (!deleted) {
      throw new ServiceUnavailableException({
        code: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'Could not delete role',
      });
    }

    return roleResponse(HttpStatus.NO_CONTENT, 'Deleted role', {});
  }
}
