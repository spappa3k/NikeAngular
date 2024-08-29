import { Component, Input, OnInit } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotti } from '../../assets/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent{
  prodotti:Prodotti[]=[];
  nameOfPage?:string;

constructor(private ns:NikeService){}

@Input()
Status?:string;


update(status:string){
  this.Status=status;

  if(this.Status=="all"){
this.ns.allProducts().subscribe(data=>{
  this.prodotti=data;
})
  }

  if(this.Status=="sneakers"){
    this.ns.sneakersOnly().subscribe(data=>{
      this.prodotti=data;
      console.log("Filtrati sneakers: ",this.prodotti);
    })
  }

  if(this.Status=="running"){
    this.ns.runningOnly().subscribe(data=>{
      this.prodotti=data;
      console.log("Filtrati running: ",this.prodotti);
    })
  }

  if(this.Status=="training"){
    this.ns.trainingOnly().subscribe(data=>{
      this.prodotti=data;
      console.log("Filtrati running: ",this.prodotti);
    })
  }
}
}