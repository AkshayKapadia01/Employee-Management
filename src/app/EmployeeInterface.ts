export interface EmployeeInterface{
    employeeId:number;
    employeeName:string;
    employeeSalary:number;
    employeeDesignation:string;
    country:{
        countryId:number;
        countryName:string;
    };
    creationDate:Date;
    createdBy:string;
    updationDate:Date;
    updatedBy:string;
    employeeDepartment:string;
    phoneno:string;
    status: string;
    
}