import { Component, OnInit } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotti } from '../../assets/models/models';
import { style } from '@angular/animations';

@Component({
  selector: 'app-shoes-details',
  templateUrl: './shoes-details.component.html',
  styleUrl: './shoes-details.component.css'
})
export class ShoesDetailsComponent{
prodotto?:Prodotti;

  constructor(private ns:NikeService, private route:ActivatedRoute){
    /* GET ID*/
    const id= this.route.snapshot.paramMap.get('id');
    const idNumber=id ? +id : null;  /* convert to number */

/* CALL TO SERVICE*/
  this.ns.searchById(idNumber!)
  .subscribe(data=>{
    this.prodotto=data;
    console.log("Photo:", this.prodotto.immagine);
  })
  
console.log("prodotto arrivato", this.prodotto);
ns.viewBannerHearderOnOff(false);
  }

}

