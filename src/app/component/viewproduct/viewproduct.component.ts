import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserService } from 'src/app/adminser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
  public data:any
constructor(private ser:AdminserService,private router:Router){}
ngOnInit(): void {
  
  this.ser.getproducts().subscribe((res:any)=>{
    console.log(res)
    this.data=res
  })

}
updateprod(id:any){
this.router.navigate([`/update/${id}`])
}
deleteprod(id:any){
  this.ser.deleteProd({"id":id}).subscribe((res:any)=>{
    Swal.fire(`${res.msg}`,'','success').then(()=>{
      this.ser.getproducts().subscribe((res:any)=>{
        console.log(res)
        this.data=res
      })
    })
  })
}
viewprod(id:any){
  this.router.navigate([`/viewprod/${id}`])
}
}
