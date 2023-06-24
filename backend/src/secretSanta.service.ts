/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { EmplyeesInputDTO, PreviousEmplyeesInputDTO } from './dto/uploadFilesDto';
@Injectable()
export class SecretSantaService {
  assignSecretSanta(data: {
    employees: EmplyeesInputDTO[],
    previousYearData: PreviousEmplyeesInputDTO[] }): any {
        const { employees, previousYearData } = data;
        if(employees.length < 0) throw new BadRequestException("No Employees in excel ")
        const allocatedEmplyees = this.createSatnta({ employees, previousYearData });
        return allocatedEmplyees;
  }

  createSatnta(data: { employees: EmplyeesInputDTO[],  previousYearData: PreviousEmplyeesInputDTO[] }){
    const { employees, previousYearData } = data;

    let employeePosibleSecretChilds = this.getAllEmployeeSecretChilds(employees, previousYearData);
    let result = this.recursiveCheckSecretChild(employeePosibleSecretChilds, [], {}, 0);
    if(result?.length === employees?.length) return result;
    throw new BadRequestException(`Not Possible to allocate Santa`);
  }

  recursiveCheckSecretChild(employeePosibleSecretChilds: any, result : Array<any>, alreadyAssigned : any, currentIndex: number){
    if(currentIndex === employeePosibleSecretChilds.length )  return [];
    const currentEmplyee = employeePosibleSecretChilds[currentIndex];
    currentEmplyee.possibleScretChilds.find( secretChild => {
      if(alreadyAssigned[secretChild.Employee_EmailID]) return false;
      alreadyAssigned[secretChild.Employee_EmailID] = true;
      let afterAssignResult = this.recursiveCheckSecretChild(employeePosibleSecretChilds, result, alreadyAssigned, currentIndex + 1);
      if((afterAssignResult.length + 1) === ((employeePosibleSecretChilds.length - currentIndex))){
        result.push(this.assignSanta(currentEmplyee.employee, secretChild));
        return true;
      }
      alreadyAssigned[secretChild.Employee_EmailID] = false;
      return false;
    });
    return result;
  }

  assignSanta( employeeData : EmplyeesInputDTO, secretChild : EmplyeesInputDTO ){
    return ({
      Employee_EmailID: employeeData.Employee_EmailID,
      Employee_Name: employeeData.Employee_Name,
      Secret_Child_EmailID: secretChild.Employee_EmailID,
      Secret_Child_Name: secretChild.Employee_Name
    })
  }
  
  getAllEmployeeSecretChilds(allEmployees : EmplyeesInputDTO[],previousYearData : PreviousEmplyeesInputDTO[]){
    return allEmployees.map( emp => ({
      employee : emp,
      possibleScretChilds : this.shuffle(this.getEmployeeSecretChilds(emp, allEmployees, previousYearData))
    }) )
  }

  getEmployeeSecretChilds(employeeData : EmplyeesInputDTO, allEmployees : EmplyeesInputDTO[],previousYearData ?: PreviousEmplyeesInputDTO[]){
    return allEmployees.filter( emp => {
        return (
            emp.Employee_EmailID !== employeeData.Employee_EmailID &&
            !previousYearData?.find( e => e.Employee_EmailID === employeeData.Employee_EmailID && e.Secret_Child_EmailID === emp.Employee_EmailID )
        )
    })
  }
  
  shuffle(array : Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
