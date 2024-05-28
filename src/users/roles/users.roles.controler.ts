import { Controller, Get, HttpStatus, Inject, Param, UseGuards } from '@nestjs/common';
import { UsersRolesService } from './users.roles.service';
import { JwtAuthGuard } from '../../auth/jwt.guard';
import { RoleGuard } from '../../auth/role/role.guard';
import { ApiBearerAuth, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Roles } from '../../auth/roles/roles.decorator';
import SuccessResponse from '../../services/responses/success.response';
import { RolesService } from '../../roles/roles.service';

@Controller(['user/roles'])
export class UsersRolesController {
  constructor(
    private userRolesService:UsersRolesService,
    private rolesService:RolesService
  ) {}

  @UseGuards(JwtAuthGuard,RoleGuard)
  @Get(':userId/list')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: "List of user roles",
  })
  @ApiParam({
    name:'userId',
    description:'The user id',
    required:true,
    type:'Number'
  })
  @UseGuards(JwtAuthGuard)
  @Roles('Admin','Guest')
  async findAll(@Param('userId') userId:number) {
    console.log(userId)
    const userRoles = await this.userRolesService.findRolesByUserId(userId);
    const allRoles = await this.rolesService.findAll()
    const response = {
      allRoles:allRoles,
      userRoles:userRoles
    }

    return SuccessResponse('Application user roles',response)
  }
}