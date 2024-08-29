import { Component, OnInit } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotti } from '../../assets/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  prodotti:Prodotti[]=[];


  constructor(private ns:NikeService, private route:ActivatedRoute){
    ns.viewBannerHearderOnOff(false);
  }


  // FINDING OUT WHICH ROUTE WE ARE GETTING AND WE FILTER THE PRODUCTS BASED ON IT
  ngOnInit(): void {
    this.route.params.subscribe(list=>{
      const passedFilter=list['filter'];
      console.log("status: ",list);

      // ALL PRODUCTS
      if(passedFilter==="all"){
this.ns.allProducts().subscribe(data=>{
this.prodotti=data;
})
      }
    })
  }
}
