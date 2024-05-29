import {
  Controller,
  HttpStatus,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { Roles } from '../auth/roles/roles.decorator';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role/role.guard';
import { FileUploadDto } from '../dto/file/file.upload';
import { ParseFilePipeBuilder } from '@nestjs/common';
import Limits from './limits';

@Controller('file')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('upload')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'File Upload',
  })
  @Roles('Admin', 'Guest')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: '.(pdf|png|jpg|jpeg)' })
        .addMaxSizeValidator({ maxSize: Limits() })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
    fileUploadDto: FileUploadDto,
  ) {
    return await this.fileUploadService.uploadFile(file, fileUploadDto);
  }
}
