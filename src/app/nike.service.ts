import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotti } from '../assets/models/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NikeService{
  prodotti: Prodotti[] = [];
  prodottoFiltered:Prodotti | undefined;
  bannerOn=true;


  constructor(private http: HttpClient) {
    this.http.get<Prodotti[]>("http://localhost:3000/prodotti")
    .subscribe(data => {
      this.prodotti = data;
    })
  }


viewBannerHearderOnOff(isBannerOn:boolean){
this.bannerOn=isBannerOn;
}

allProducts(){
  return this.http.get<Prodotti[]>("http://localhost:3000/prodotti")
}

  searchById(idToSearch:number){
const id=idToSearch
return this.http.get<Prodotti>("http://localhost:3000/prodotti/"+id)
  }

// DO THE API CALL DEPENDING ON THE LISTCOMPONENT
  sneakersOnly(){
    return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?categoria=Sneakers")
      }

      runningOnly(){
        return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?categoria=Running")
          }

          trainingOnly(){
            return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?categoria=Training")
              }
              newArrivals(){
                return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?nuovo_arrivi=true")
              }
              best(){
                return this.http.get<Prodotti[]>("http://localhost:3000/prodotti?best_seller=5")
              }
}