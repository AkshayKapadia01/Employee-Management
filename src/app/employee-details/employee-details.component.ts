import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeInterface } from '../EmployeeInterface';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails:EmployeeInterface={
    employeeId:0,
    employeeName:'',
    employeeDesignation:'',
    country:{
      countryId:0,
      countryName:''
    },
    creationDate:new Date("2019-01-16"),
    createdBy:'',
    updationDate:new Date("2019-01-16"),
    updatedBy:'',
    employeeDepartment:'',
    phoneno:'',
    employeeSalary:0,
    status:''
  };

  constructor(private routes:ActivatedRoute, private service: HttpService) { }

  ngOnInit() {
    this.getEmployeeid();
  }

  getEmployeeid(){
    this.routes.paramMap.subscribe(
      data => {
        console.log("employee id is: "+ data.get('id'));
        this.getEmployee(data.get('id'));
      }
    );
  }

  getEmployee(id){
    this.service.getEmployee(id).subscribe(
      response => {
        console.log(response);
        this.employeeDetails=(<EmployeeInterface>response);
        console.log(this.employeeDetails);

      }
    );
    
  }

}
