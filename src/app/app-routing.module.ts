import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprodComponent } from './component/addprod/addprod.component';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdateprodComponent } from './component/updateprod/updateprod.component';
import { ViewproddetailsComponent } from './component/viewproddetails/viewproddetails.component';
import { ViewproductComponent } from './component/viewproduct/viewproduct.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'add',
    component:AddprodComponent
  },

  {
    path:'view',
    component:ViewproductComponent
  },
  {
    path:'update/:id',
    component:UpdateprodComponent
  },
  {
    path:'viewprod/:id',
    component:ViewproddetailsComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
