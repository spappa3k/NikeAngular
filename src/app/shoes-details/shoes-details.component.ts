import { Component, OnInit } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotti } from '../../assets/models/models';

@Component({
  selector: 'app-shoes-details',
  templateUrl: './shoes-details.component.html',
  styleUrl: './shoes-details.component.css'
})
export class ShoesDetailsComponent implements OnInit {
prodotto?:Prodotti;


  constructor(private ns:NikeService, private route:ActivatedRoute){}


  /* Get ID */
  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    const idNumber=id ? +id : null;  /* convert to number */
  this.prodotto=this.ns.searchById(idNumber!);
console.log(this.prodotto);
  }
}