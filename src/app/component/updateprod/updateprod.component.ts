import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserService } from 'src/app/adminser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprod',
  templateUrl: './updateprod.component.html',
  styleUrls: ['./updateprod.component.css']
})
export class UpdateprodComponent implements OnInit{
  public id:any
  public data:any
constructor(private route:ActivatedRoute,private ser : AdminserService,private router:Router){}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  this.ser.getDataById({'id':this.id}).subscribe((res:any)=>{

this.data = res[0]
console.log('daa is',this.data)
  })

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
  
  
  ]),
});

get fdata() {
  return this.myForm.controls;
}
postData(){
  console.log(this.myForm.getRawValue())

let product = {"data":this.myForm.getRawValue() ,"id":this.id}

  this.ser.updatedata(product).subscribe((res:any)=>{
    Swal.fire(`${res.msg}`,'','success').then(()=>{
      this.router.navigate(["/view"])
    })
  })
}
}
