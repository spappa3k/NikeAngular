import { Component, Input, OnInit } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotti, FilterPrice } from '../../assets/models/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent{
  prodotti:Prodotti[]=[];
  nameOfPage?:string;
  prodotttiFiltered:Prodotti[]=[]
  filterOn=false;
  filterDefault={
    expensive:false,
    medium:false,
    cheap:false
  }

constructor(private ns:NikeService){}

@Input()
Status?:string;
priceFilters?:FilterPrice;


update(status:string){
  this.Status=status;

  if (                                         /*  SE NON E' UNA DI QUESTE PAROLE CHIAVI NELLA RICERCA SI VA CON IL FILTRAGGIO  */
    this.Status.toLowerCase() !== "all" &&
    this.Status.toLowerCase() !== "sneakers" &&
    this.Status.toLowerCase() !== "running" &&
    this.Status.toLowerCase() !== "training" &&
    this.Status.toLowerCase() !== "newarrivals" &&
    this.Status.toLowerCase() !== "best"
  ) {

    /*  FACCIAMO LA CHIAMATA DI TUTTI I PRODOTTI E POI FILTRIAMO PER NOME CHE INCLUDONO LA PAROLA RICERCATA E IN LOWERCASE */
    console.log("Chiamata al servizio per tutti i prodotti...");
    this.ns.allProducts().subscribe(data => {
      console.log("DENTRO SUBSCRIBE:",this.Status);
      this.prodotti = data.filter(prodotto =>
        prodotto.nome.toLowerCase().includes(this.Status!.toLowerCase())
      );
    });
}



  /* TAKE DATA FROM OBSERVABLE IN THE SERVICE DEPENDING ON WHICH FILTER IS NEEDED*/
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

  if(this.Status=="newArrivals"){
    this.ns.newArrivals().subscribe(data=>{
      this.prodotti=data;
      console.log("Filtrati New: ",this.prodotti);
    })
  }

  if(this.Status=="best"){
    this.ns.best().subscribe(data=>{
      this.prodotti=data;
      console.log("Filtrati New: ",this.prodotti);
    })
  }

}

updatePriceFilter(filteredPrice: FilterPrice) {
  this.priceFilters = filteredPrice;


  /*  CHEAP ON, MEDIUM ON, EXPENSIVE ON   */
  if (this.priceFilters.cheap && this.priceFilters.medium && this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti;
    this.filterOn=false;
  }

  /*  CHEAP ON, MEDIUM ON, EXPENSIVE OFF   */
  if (this.priceFilters.cheap && this.priceFilters.medium && !this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti.filter(p => p.prezzo < 200);
    this.filterOn=true;
  }

  /*  CHEAP ON, MEDIUM OFF, EXPENSIVE ON   */
  if (this.priceFilters.cheap && !this.priceFilters.medium && this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti.filter(p => p.prezzo < 100 || p.prezzo > 200);
    this.filterOn=true;
  }

  /*  CHEAP ON, MEDIUM OFF, EXPENSIVE OFF   */
  if (this.priceFilters.cheap && !this.priceFilters.medium && !this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti.filter(p => p.prezzo < 100);
    this.filterOn=true;
  }

  /*  CHEAP OFF, MEDIUM ON, EXPENSIVE ON   */
  if (!this.priceFilters.cheap && this.priceFilters.medium && this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti.filter(p => p.prezzo >= 100);
    this.filterOn=true;
  }

  /*  CHEAP OFF, MEDIUM ON, EXPENSIVE OFF   */
  if (!this.priceFilters.cheap && this.priceFilters.medium && !this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti.filter(p => p.prezzo >= 100 && p.prezzo < 200);
    this.filterOn=true;
  }

  /*  CHEAP OFF, MEDIUM OFF, EXPENSIVE ON   */
  if (!this.priceFilters.cheap && !this.priceFilters.medium && this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti.filter(p => p.prezzo > 200);
    this.filterOn=true;
  }

  /*  CHEAP OFF, MEDIUM OFF, EXPENSIVE OFF   */
  if (!this.priceFilters.cheap && !this.priceFilters.medium && !this.priceFilters.expensive) {
    this.prodotttiFiltered  = this.prodotti;
    this.filterOn=false;
  }
  console.log(this.prodotttiFiltered);
}
}
