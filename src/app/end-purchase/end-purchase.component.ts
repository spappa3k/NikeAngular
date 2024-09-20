import { Component, OnInit } from '@angular/core';
import { NikeService } from '../nike.service';

@Component({
  selector: 'app-end-purchase',
  templateUrl: './end-purchase.component.html',
  styleUrl: './end-purchase.component.css'
})
export class EndPurchaseComponent implements OnInit{



  constructor(private ns:NikeService){
  
  }

  ngOnInit(): void {
    this.ns.endOfPurchase=true;
  }
}
