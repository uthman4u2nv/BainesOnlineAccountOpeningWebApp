import { Component, OnInit,Input } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { AppReq } from 'src/models/application';

@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  @Input() obj={FirstName: "",MiddleName: "",LastName: "",Email: "",DateOfBirth: "",Gender: 0,Address: "",PhoneNumber: "",ProductCode2: "100"}
  AccountNumber:string="";
  CustomerID:string="";
  FullName:string="";
  btn:string="Submit Application";
  form:string="block";
  msg:string="none";
  confirm:string="none";
  constructor(public aps:ApplicationService) { }

  ngOnInit(): void {
  }
  confirmdetails(){
    this.form="none";
      this.msg="none";
      this.confirm="block";
  }
  editApplication(){
    this.form="block";
      this.msg="none";
      this.confirm="none";
  }
  SubmitApplication(data:AppReq){

    console.log(data);
    this.aps.SubmitApplication(data).subscribe(d=>{
      if(d.AccountNumber !=""){
      this.AccountNumber=d.AccountNumber;
      this.CustomerID=d.CustomerID;
      this.FullName=d.FullName;
      this.obj={FirstName: "",MiddleName: "",LastName: "",Email: "",DateOfBirth: "",Gender: 0,Address: "",PhoneNumber: "",ProductCode2: "100"}
      this.form="none";
      this.msg="block";
      this.confirm="none";
    }
    })
  }

}

