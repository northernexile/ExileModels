import {
  BadRequestException,
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
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles } from '../auth/roles/roles.decorator';
import SuccessResponse from '../services/responses/success.response';
import userResponse from './user.response';
import { CreateUserDto } from '../dto/user/create.user';
import { UpdateUserDto } from '../dto/user/update.user';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get('list')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of users',
  })
  @UseGuards(JwtAuthGuard)
  @Roles('Admin')
  @ApiOperation({ summary: 'List users' })
  async findAll() {
    return SuccessResponse('list of users', await this.usersService.findAll());
  }

  @Get(':userId')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Specific user located by `id`',
  })
  @ApiParam({
    name: 'userId',
    description: 'The user id',
    required: true,
    type: 'Number',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @ApiOperation({ summary: 'Find a user by Id' })
  async getById(@Param('userId') userId: number) {
    const user = await this.usersService.findOneById(userId);

    if (user) {
      user.password = '';
      return userResponse(HttpStatus.OK, 'user found', user);
    }

    throw new NotFoundException({
      code: HttpStatus.NOT_FOUND,
      message: 'User not found',
    });
  }

  @Post()
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create a user',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @ApiOperation({ summary: 'Create user' })
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);

    if (!user) {
      throw new UnauthorizedException();
    }

    const userInfo = {
      id: user.id,
      name: user.username,
      email: user.email,
      createdAt: user.createdAt,
      verifiedAt: user.verifiedAt,
      updatedAt: user.updatedAt,
    };

    return userResponse(HttpStatus.CREATED, 'User created', userInfo);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Update a user',
  })
  @ApiParam({
    name: 'id',
    description: 'The user id',
    required: true,
    type: 'Number',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @ApiOperation({ summary: 'Update a user' })
  async update(
    @Param('userId') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(userId, updateUserDto);

    if (!user) {
      throw new ServiceUnavailableException({
        code: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'Could not update role' + updateUserDto.username,
      });
    }

    const userInfo = {
      id: user.id,
      name: user.username,
      email: user.email,
      createdAt: user.createdAt,
      verifiedAt: user.verifiedAt,
      updatedAt: user.updatedAt,
    };

    return userResponse(HttpStatus.NO_CONTENT, 'Updated user', userInfo);
  }

  @Delete(':userId')
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'delete a user',
  })
  @ApiParam({
    name: 'userId',
    description: 'The user id',
    required: true,
    type: 'Number',
  })
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('Admin')
  @ApiOperation({ summary: 'Delete a user' })
  async delete(@Param('userId') userId: number) {
    console.log(userId);
    if (!userId) {
      throw new BadRequestException({
        code: HttpStatus.BAD_REQUEST,
        message: 'Please supply userId',
      });
    }

    const deleted = await this.usersService.delete(userId);

    if (!deleted) {
      throw new ServiceUnavailableException({
        code: HttpStatus.SERVICE_UNAVAILABLE,
        message: 'Could not delete user',
      });
    }

    return userResponse(HttpStatus.NO_CONTENT, 'Deleted user', {});
  }
}
