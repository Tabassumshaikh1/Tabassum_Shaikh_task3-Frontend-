import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserService } from 'src/app/adminser.service';

@Component({
  selector: 'app-viewproddetails',
  templateUrl: './viewproddetails.component.html',
  styleUrls: ['./viewproddetails.component.css']
})
export class ViewproddetailsComponent {
  public id:any
  public data:any
constructor(private route:ActivatedRoute,private ser : AdminserService,private router:Router){}
ngOnInit(): void {
  this.id = this.route.snapshot.paramMap.get('id')
  this.ser.getDataById({'id':this.id}).subscribe((res:any)=>{

this.data = res[0]

  })

}
}
