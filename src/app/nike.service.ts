import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotti } from '../assets/models/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NikeService{
  prodotti: Prodotti[] = [];
  prodottoFiltered?:Prodotti;


  constructor(private http: HttpClient) {
    this.http.get<Prodotti[]>("http://localhost:3000/prodotti")
    .subscribe(data => {
      this.prodotti = data;
    })
  }


  loadProdotti() {
  }

  searchById(idToSearch:number){
this.prodottoFiltered=this.prodotti.find(p => p.id===idToSearch);
console.log('Prodotti:', this.prodotti); // Verifica che i prodotti siano caricati
console.log('ID da cercare:', idToSearch); // Verifica che l'ID sia corretto
return this.prodottoFiltered;
  }

}
