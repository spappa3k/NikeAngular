import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { NikeService } from '../nike.service';
import { ProdottoForCheckout } from '../../assets/models/models';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit{
prodottiInBasket:ProdottoForCheckout[]=[]

  constructor(private ns:NikeService){
  ns.viewBannerHearderOnOff(false);
  }

  ngOnInit(): void {
    this.prodottiInBasket=this.ns.prodottiInBasket;
  }

}
