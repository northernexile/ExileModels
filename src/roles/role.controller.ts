import { Controller, Get, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import SuccessResponse from '../services/responses/success.response';

@Controller('roles')
export class RoleController {
  constructor(private rolesService:RolesService) {}

  @Get('list')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: "List of roles",
  })
  async findAll() {
    return SuccessResponse('Application user roles',await this.rolesService.findAll())
  }

  @Get(':roleId')
  @ApiBearerAuth()
  @ApiResponse({
    status:HttpStatus.OK,
    description:'Specific role located by `id`'
  })
  async getById(roleId:number) {
    const role = await this.rolesService.findOneById(roleId)
    if (role) {
      return SuccessResponse('Role found', role)
    }

    throw new NotFoundException({
      code:HttpStatus.NOT_FOUND,
      message:'Role not found'
    })
  }
}