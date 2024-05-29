import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { FileUploadDto } from '../dto/file/file.upload';

@Injectable()
export class FileUploadService {
  async uploadFile(file: Express.Multer.File, payload: FileUploadDto) {
    console.log(payload);
    return {
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
      mimeType: file.mimetype,
    };
  }
}
