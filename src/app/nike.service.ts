import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prodotti } from '../assets/models/models';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NikeService implements OnInit {
  prodotti: Prodotti[] = [];


  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<Prodotti[]>("http://localhost:3000/prodotti").subscribe(data => {
      this.prodotti = data;
    })
  }



  loadProdotti() {
    console.log(this.prodotti);
  }

}

