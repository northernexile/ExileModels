import { Injectable } from '@nestjs/common';
import DirectoryItemList from "./directory/dto/directory.item.list.dto";

@Injectable()
export class AppService {
  getServices() :any[] {
    return DirectoryItemList
  }
}
