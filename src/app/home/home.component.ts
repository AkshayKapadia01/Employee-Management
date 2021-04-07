import { Component, OnInit } from '@angular/core';
import { EmployeeInterface } from '../EmployeeInterface';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeArr:any[]=[];

  constructor(private service:HttpService) { }

  ngOnInit() {
    this.getAllEmployees();
    
  }

  displayedColumns: string[];
  dataSource:any;
  
  getAllEmployees(){
    this.service.getAllEmployees()
        .subscribe( data => {
          console.log(<any>data);
          this.displayedColumns = ['employeeId', 'employeeName', 'employeeDesignation', 'phoneno','country'];
          this.dataSource=(<EmployeeInterface>data);
        } );
  }

}
