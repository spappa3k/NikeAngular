import { Component, Input } from '@angular/core';
import { Prodotti, ProdottoForCheckout } from '../../assets/models/models';

@Component({
  selector: 'app-added-to-basket',
  templateUrl: './added-to-basket.component.html',
  styleUrl: './added-to-basket.component.css'
})
export class AddedToBasketComponent {

@Input()
prodottoToPush?:ProdottoForCheckout
  
}
