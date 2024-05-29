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

@Controller('file')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('upload') // Endpoint for uploading files
  @UseGuards(JwtAuthGuard, RoleGuard)
  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'File Upload',
  })
  @Roles('Admin', 'Guest')
  @UseInterceptors(FileInterceptor('file')) // Intercept and handle file uploads
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    fileUploadDto: FileUploadDto,
  ) {
    // Delegate file handling to the FileService
    return await this.fileUploadService.uploadFile(file, fileUploadDto);
  }
}
