import { Test, TestingModule } from '@nestjs/testing';
import { SecretSantaService } from './secretSanta.service';
import { EmplyeesInputDTO } from './dto/uploadFilesDto';

describe('SecretSantaService', () => {
    const employeeData : EmplyeesInputDTO = {  
        Employee_EmailID: "email1",
        Employee_Name: "name"
    };
    
    const allEmployees = [
        employeeData,
        {  
            Employee_EmailID: "email2",
            Employee_Name: "name2"
        },
        {  
            Employee_EmailID: "email3",
            Employee_Name: "name3"
        },  {
            Employee_EmailID: "email4",
            Employee_Name: "name4"
        }
    ];
    const previousYear = [{
        Employee_EmailID: "email1",
        Employee_Name: "name1",
        Secret_Child_EmailID: 'email3',
        Secret_Child_Name: 'name3',
    }]
  let secretSantaService: SecretSantaService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SecretSantaService],
    }).compile();

    secretSantaService = app.get<SecretSantaService>(SecretSantaService);
  });

  describe('secretSantaService assign Santa', () => {
    it('should return Secret Santa', () => {
      expect(secretSantaService.assignSanta(employeeData, {
        Employee_EmailID: 'SecretSanta_EmailId',
        Employee_Name: 'SecretSanta_Name',
      })).toStrictEqual({ 
        Employee_EmailID: "email1",
        Employee_Name: "name",
        Secret_Child_EmailID: 'SecretSanta_EmailId',
        Secret_Child_Name: 'SecretSanta_Name',
      });
    });
  });

  
  describe('secretSantaService get all Santa', () => {
    it('should return Secret all Santa', () => {
      expect(secretSantaService.getEmployeeSecretChilds(employeeData, allEmployees)).toStrictEqual([{  
        Employee_EmailID: "email2",
        Employee_Name: "name2"
    },
    {  
        Employee_EmailID: "email3",
        Employee_Name: "name3"
    },  {
        Employee_EmailID: "email4",
        Employee_Name: "name4"
    }])
    });
  });

  
  describe('secretSantaService get all Santa with previous Assign', () => {
    it('should return Secret all Santa with previous Assign', () => {
      expect(secretSantaService.getEmployeeSecretChilds(employeeData, allEmployees, previousYear)).toStrictEqual([
        {  
            Employee_EmailID: "email2",
            Employee_Name: "name2"
        },{
            Employee_EmailID: "email4",
            Employee_Name: "name4"
        }
      ]);
    });
  });

});
