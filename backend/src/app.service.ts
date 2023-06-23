import { BadRequestException, Injectable } from '@nestjs/common';
import { SecretSantaService } from './secretSanta.service';
import { FileService } from './file.service';

@Injectable()
export class AppService {
  constructor(private readonly secretSantaService: SecretSantaService,
    private readonly fileService : FileService) {}
  get() {
    return 'Hello World!';
  }

  santaFileHandler(files: any): Promise<any> {
    if (!files.emplyees || files.emplyees?.length === 0)
      throw new BadRequestException('No File Provided');
    const { employees, previousYearData } = this.transformFiles(files);
    const resultData = this.secretSantaService.assignSecretSanta({
      employees,
      previousYearData,
    });
    return this.fileService.WriteFile(resultData);
  }

  transformFiles(files: any) {
    return {
      employees: this.fileService.ReadCell(files.emplyees[0]),
      previousYearData:
        files.previousYear?.[0] && this.fileService.ReadCell(files.previousYear?.[0]),
    };
  }

}
