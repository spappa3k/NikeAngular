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
selectedToBlack=4; // starting size selected
selectedSideImage=5; // default view of the shoes
numbers: number[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(private ns:NikeService, private route:ActivatedRoute){

// GET ID
    const id= this.route.snapshot.paramMap.get('id');
    const idNumber=id ? +id : null;  /* convert to number */

// CALL TO SERVICE
  this.ns.searchById(idNumber!)
  .subscribe(data=>{
    this.prodotto=data;
    console.log("Photo:", this.prodotto.immagine);
  })
  
console.log("prodotto arrivato", this.prodotto);
ns.viewBannerHearderOnOff(false);
  }


// FUNCTION TO RECALL ON CLICK OF A NEW SIZE
  selectAnotherSize(whichOfArray:number){
this.selectedToBlack=whichOfArray;
  }

  // FUNCTION TO RECALL ON CLICK THE VIEW FROM SIDE SMALL FRAMES
  selectAnotherSideImage(index: number) {
    console.log('Selected side image:', index);
    this.selectedSideImage = index;
  }
  
// BUTTON INCREASE FRAME TO VIEW
  increaseSideImage(index:number){
    if(index==this.numbers.length-1){
      this.selectedSideImage = 0;
    }else{
      this.selectedSideImage++;
    }
  }

// BUTTON DECREASE FRAME TO VIEW
  decreaseSideImage(index:number){
    if(index==0){
      this.selectedSideImage=this.numbers.length-1;
    }else{
      this.selectedSideImage--
    }
  }
}
