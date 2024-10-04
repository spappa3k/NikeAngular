import { Component } from '@angular/core';
import { NikeService } from '../nike.service';
import { Prodotti } from '../../assets/models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-shoes',
  templateUrl: './home-shoes.component.html',
  styleUrl: './home-shoes.component.css'
})
export class HomeShoesComponent {
  bestSelling?:Prodotti[];

constructor(private ns:NikeService, private http:HttpClient){
  this.ns.allProducts()
  .subscribe(data=>{
    this.bestSelling=data.filter(p => p.nuovo_arrivi === true);
    console.log(this.bestSelling);
  })
}
}