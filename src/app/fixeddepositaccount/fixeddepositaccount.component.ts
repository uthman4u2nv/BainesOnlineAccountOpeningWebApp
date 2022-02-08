import { Component, OnInit, Input } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { AppReq,FixedReq } from 'src/models/application';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fixeddepositaccount',
  templateUrl: './fixeddepositaccount.component.html',
  styleUrls: ['./fixeddepositaccount.component.scss']
})
export class FixeddepositaccountComponent implements OnInit {

  formGroup: FormGroup;
  closeResult='';
  //public showOverlay = true;
  @Input() obj={Amount: 10,InterestRate: 0,Tenure: 1,CustomerID: "",LiquidationAccount: "",ProductCode: ""}
  AccountNumber:string="";
  SuccessMessage:string="";
  CustomerID:string="";
  FullName:string="";
  btn:string="Submit Application";
  form:string="block";
  msg:string="none";
  confirm:string="none";
  loading:string="block";
  error:string="none";
  acctType:string="";
  showOverlay:boolean=false;

  captcha:string;
  email:string;

  constructor(public aps:ApplicationService,private router: Router,private modalService: NgbModal) {
this.captcha="";
this.email="uthman4u2nv@yahoo.com";
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      ]),
      LastName: new FormControl('', [
        Validators.required,
        //Validators.minLength(8),
        //Validators.maxLength(20)
      ])
    });
  }
  onReset() {
    this.formGroup.reset();
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  resolved(captchaResponse:string){
    this.captcha=captchaResponse;
    console.log('Resolved captcha with response: '+this.captcha);
  }
  confirmdetails(){
    var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');

    this.form="none";
      this.msg="none";
      this.confirm="block";
      this.error="none";
  }
  NewApplication(){
    this.form="block";
      this.msg="none";
      this.confirm="none";
      this.error="none";
      this.router.navigate(['fixeddepositaccount']);
  }
  editApplication(){
    this.form="block";
      this.msg="none";
      this.confirm="none";
      this.error="none";
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    if(deviceValue==300){
      this.obj.InterestRate=3
    }else if(deviceValue==301){
      this.obj.InterestRate=5
    }else{
      this.obj.InterestRate=1
    }
}
  SubmitApplication(data:FixedReq){
    this.showOverlay=true;    
    
    this.aps.SubmitFixedApplication(data).subscribe(d=>{
      console.log(data);
      console.log(d);
      if(d.responseCode =="00"){
      this.SuccessMessage=d.responseMessage
      this.obj={Amount: 0,InterestRate: 0,Tenure: 1,CustomerID: "",LiquidationAccount: "",ProductCode: ""}
      this.form="none";
      this.msg="block";
      this.confirm="none";
    }else{
      this.form="none";
      this.msg="none";
      this.confirm="none";
      this.error="block";
    }
    this.showOverlay=false;
    })
  }


  
}
