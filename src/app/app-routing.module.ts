import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoesDetailsComponent } from './shoes-details/shoes-details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"details/:id", component:ShoesDetailsComponent
  },
  {
    path:"list/:filter", component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
