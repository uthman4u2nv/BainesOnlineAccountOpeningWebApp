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
  @Input() obj={Amount: 1000000,InterestRate: 10,Tenure: 90,CustomerID: "",LiquidationAccount: "",ProductCode: "300"}
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
    /**var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');**/

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
  keyPress(event: KeyboardEvent) {
    let t=this.obj.Tenure;
    console.log("Tenure:"+t +"Event:"+event);
    
}
between(x, min, max) {
  return x >= min && x <= max;
}

  onChange(deviceValue) {
    
    let t=this.obj.Tenure;
    
    let nValue=parseFloat(deviceValue);
    /**BETWEEN 1m to 4.9m */
    if (this.between(nValue, 1000000, 4900000) && t.toString()==="90") {
      // something
      this.obj.InterestRate=10;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 1000000, 4900000) && t.toString()==="180") {
      // something
      this.obj.InterestRate=14;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 1000000, 4900000) && t.toString()==="270") {
      // something
      this.obj.InterestRate=16;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 1000000, 4900000) && t.toString()==="365") {
      // something
      this.obj.InterestRate=17;
      console.log("Within range"+ this.obj.InterestRate);
    }
    /**END 1m-4.9m */

    /**start 5m to 9.9m */
    if (this.between(nValue, 5000000, 9900000) && t.toString()==="90") {
      // something
      this.obj.InterestRate=11;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 5000000, 9900000) && t.toString()==="180") {
      // something
      this.obj.InterestRate=15;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 5000000, 9900000) && t.toString()==="270") {
      // something
      this.obj.InterestRate=17;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 5000000, 9900000) && t.toString()==="365") {
      // something
      this.obj.InterestRate=18;
      console.log("Within range"+ this.obj.InterestRate);
    }
    /**end 5m to 9.9m */

    /**start 10m to 49m */
    if (this.between(nValue, 10000000, 49000000) && t.toString()==="90") {
      // something
      this.obj.InterestRate=12;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 10000000, 49000000) && t.toString()==="180") {
      // something
      this.obj.InterestRate=17;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 10000000, 49000000) && t.toString()==="270") {
      // something
      this.obj.InterestRate=18;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 10000000, 49000000) && t.toString()==="365") {
      // something
      this.obj.InterestRate=19;
      console.log("Within range"+ this.obj.InterestRate);
    }
    /**end 10m to 49m */

    /**start 50m and above */
    if (this.between(nValue, 50000000, 500000000) && t.toString()==="90") {
      // something
      this.obj.InterestRate=13;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 50000000, 500000000) && t.toString()==="180") {
      // something
      this.obj.InterestRate=18;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 50000000, 500000000) && t.toString()==="270") {
      // something
      this.obj.InterestRate=19;
      console.log("Within range"+ this.obj.InterestRate);
    }
    if (this.between(nValue, 50000000, 500000000) && t.toString()==="365") {
      // something
      this.obj.InterestRate=20;
      console.log("Within range"+ this.obj.InterestRate);
    }
    /**end 50m and above */

    
    
}
  SubmitApplication(data:FixedReq){
    this.showOverlay=true;    
    
    this.aps.SubmitFixedApplication(data).subscribe(d=>{
      console.log(data);
      console.log(d);
      if(d.responseCode =="00"){
      this.SuccessMessage=d.responseMessage
      this.obj={Amount: 1000000,InterestRate: 10,Tenure: 90,CustomerID: "",LiquidationAccount: "",ProductCode: "300"}
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
