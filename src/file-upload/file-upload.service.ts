import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class FileUploadService {
  async uploadFile(file: Express.Multer.File) {
    return {
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
      mimeType: file.mimetype,
    };
  }
}
