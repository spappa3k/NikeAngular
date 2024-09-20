import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoesDetailsComponent } from './shoes-details/shoes-details.component';
import { ListComponent } from './list/list.component';
import { SideOfListComponent } from './side-of-list/side-of-list.component';
import { BasketComponent } from './basket/basket.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EndPurchaseComponent } from './end-purchase/end-purchase.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"details/:id", component:ShoesDetailsComponent
  },
  {
    path:"list/:filter", component:SideOfListComponent
  },
  {
    path:"basket", component:BasketComponent
  },
  {
    path:"checkout", component:CheckoutComponent
  },
  {
    path:"endPurchase", component:EndPurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
