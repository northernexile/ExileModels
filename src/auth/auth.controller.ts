import { Body, Controller, Post, HttpCode, HttpStatus, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import {AuthService} from './auth.service';
import {Public} from "./public-strategy";
import {BaseUser} from '../dto/user/base.user';
import { SignInDto } from '../dto/auth/sign.in';
import { SignUpDto } from '../dto/auth/sign.up';
import { ForgottenUserDto } from '../dto/auth/forgotten.user';
import { ResetEmailSentDto } from '../dto/auth/email/reset.email.sent';
import { ResetUserPasswordDto } from '../dto/auth/reset.user.password';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: "User Login" })
  @ApiResponse({
    status: 200,
    description: "User found",
    type: [BaseUser],
  })
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post("register")
  @ApiOperation({ summary: "User registration" })
  @ApiResponse({
    status: 201,
    description: "User Registered",
    type: [BaseUser],
  })
  async signUp(@Body() signUpDto: SignUpDto) {
    const payload = {
      username: signUpDto.username,
      email: signUpDto.email,
      password: signUpDto.password,
      createdAt: new Date()
    }
    return this.authService.signUp(payload);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('forgotten')
  @ApiOperation({summary:'Forgotten password'})
  @ApiResponse({
    status:200,
    description:"Forgotten password",
    type:[ResetEmailSentDto]
  })
  async forgottenPassword(@Body() forgottenUserDto:ForgottenUserDto) {
    return this.authService.forgottenPassword(forgottenUserDto)
  }

  @Public()
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('reset/:id/:token')
  @ApiOperation({summary:'Reset password'})
  @ApiParam({
    name:'id',
    description:'The user id',
    required:true,
    type:'Number'
  })
  @ApiParam({
    name:'token',
    description:'reset token supplied via email',
    required:true,
    type:'String'
  })
  @ApiResponse({
    status:HttpStatus.OK,
    description:"Reset password",
    type:[ResetUserPasswordDto]
  })
  async resetPassword(id:number,token:string,@Body() resetUserPasswordDto :ResetUserPasswordDto) {
    return this.authService.resetPassword(id,token,resetUserPasswordDto)
  }


}
