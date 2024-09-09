import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prodotti, ProdottoForCheckout } from '../../assets/models/models';

@Component({
  selector: 'app-added-to-basket',
  templateUrl: './added-to-basket.component.html',
  styleUrl: './added-to-basket.component.css'
})
export class AddedToBasketComponent {

@Input()
prodottoToPush?:ProdottoForCheckout

/* emettiamo evento dal template al click sulla x per dire al padre di mettere iteamAdded su false cosi si chiude il minibasket */
@Output()
itemAddedOn = new EventEmitter<boolean>();

}
