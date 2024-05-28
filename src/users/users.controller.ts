import { Controller, Get, HttpStatus, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Roles } from '../auth/roles/roles.decorator';
import SuccessResponse from '../services/responses/success.response';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService
  ) {
  }

  @UseGuards(JwtAuthGuard,RoleGuard)
  @Get('list')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: "List of users",
  })
  @UseGuards(JwtAuthGuard)
  @Roles('Admin')
  async findAll() {
    return SuccessResponse('list of users',await this.usersService.findAll())
  }
}