import { Component, OnInit,Input } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';
import { AppReq } from 'src/models/application';
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
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  closeResult='';
  //public showOverlay = true;
  @Input() obj={FirstName: "",MiddleName: "",LastName: "",Email: "",DateOfBirth: "",Gender: 0,Address: "",PhoneNumber: "",ProductCode2: "100"}
  AccountNumber:string="";
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
/*router.events.subscribe((event: RouterEvent) => {
  this.navigationInterceptor(event)
})*/

   }
   // Shows and hides the loading spinner during RouterEvent changes
  /*navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = 'true';
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = 'false';
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = 'false';
    }
    if (event instanceof NavigationError) {
      this.showOverlay = 'false';
    }
  }*/

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  }
  editApplication(){
    this.form="block";
      this.msg="none";
      this.confirm="none";
      this.error="none";
  }
  SubmitApplication(data:AppReq){
    this.showOverlay=true;    
    
    this.aps.SubmitApplication(data).subscribe(d=>{
      if(d.AccountNumber !==null){
      this.AccountNumber=d.AccountNumber;
      this.CustomerID=d.CustomerID;
      this.FullName=d.FullName;
      this.obj={FirstName: "",MiddleName: "",LastName: "",Email: "",DateOfBirth: "",Gender: 0,Address: "",PhoneNumber: "",ProductCode2: "100"}
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

