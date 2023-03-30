import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminserService } from "src/app/adminser.service";

import Swal from "sweetalert2";
@Component({
  selector: 'app-addprod',
  templateUrl: './addprod.component.html',
  styleUrls: ['./addprod.component.css']
})
export class AddprodComponent {
  constructor(private ser : AdminserService,private router:Router){

  }
  myForm = new FormGroup({
    pname: new FormControl("", [
      Validators.required,
      Validators.pattern("[a-zA-Z0-9 ]+$"),
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    imgurl: new FormControl("", [
      Validators.required,
     
    ]),
    prodprice: new FormControl("", [
      Validators.required,
      Validators.pattern("[1-9]+$"),
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });

  get fdata() {
    return this.myForm.controls;
  }
  postData(){
    console.log(this.myForm.getRawValue())
    this.ser.postproddata(this.myForm.getRawValue()).subscribe((res:any)=>{
      Swal.fire(`${res.msg}`,'','success').then(()=>{
        this.router.navigate(["/"])
      })
    })
  }

}