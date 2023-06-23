export class UploadFilesDto {
  emplyees?: Express.Multer.File;
  previousYear?: Express.Multer.File;
}

export class EmplyeesInputDTO {
  Employee_EmailID: string;
  Employee_Name: string;
}

export class PreviousEmplyeesInputDTO {
  Employee_EmailID: string;
  Employee_Name: string;
  Secret_Child_Name: string;
  Secret_Child_EmailID: string
}
