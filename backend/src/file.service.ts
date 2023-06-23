import * as XLSX from 'xlsx';
import { Injectable } from "@nestjs/common";
import { createReadStream, readFileSync } from 'fs';
import { Readable } from 'stream';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FileService {
  constructor(
    private readonly configService: ConfigService
  ){}
  async WriteFile(rows : Array<any>) : Promise<any> {
    var worksheet = XLSX.utils.json_to_sheet(rows);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const fileName = new Date().valueOf() + '.xlsx';
    const filePath = path.join(__dirname,`../public/excel/${fileName}`);
    XLSX.writeFile(workbook, filePath, { type : 'buffer' });
    const baseUrl = this.configService.get<string>('EXCEL_URL') || 'http://localhost:3002/excel';
    return baseUrl + '/' + fileName;
  }

  s2ab(s) : any {            
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;                
    return buf;
  }
  ReadCell(file: Express.Multer.File) {
    const wb = XLSX.read(file.buffer);
    const sheet_name_list = wb.SheetNames;
    const xlData: any = XLSX.utils.sheet_to_json(wb.Sheets[sheet_name_list[0]]);
    return xlData;
  }
}