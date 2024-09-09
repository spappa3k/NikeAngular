import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Prodotti, ProdottoForCheckout } from '../../assets/models/models';
import { style } from '@angular/animations';

@Component({
  selector: 'app-shoes-details',
  templateUrl: './shoes-details.component.html',
  styleUrl: './shoes-details.component.css'
})
export class ShoesDetailsComponent {
  prodotto?: Prodotti;
  selectedToBlack = 4; // starting size selected
  selectedSideImage = 5; // default view of the shoes
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
  itemAdded = false;
  sizeToPush = this.prodotto?.taglie_disponibili[this.selectedToBlack];
  prodottoInfoToPush?: ProdottoForCheckout;
  backgroundBasketOn:boolean=false;
  selectedQuantity:number=1
showMaximumShoesMessage=false;



  constructor(private ns: NikeService, private route: ActivatedRoute) {

    // GET ID
    const id = this.route.snapshot.paramMap.get('id');
    const idNumber = id ? +id : null;  /* convert to number */

    // CALL TO SERVICE
    this.ns.searchById(idNumber!)
      .subscribe(data => {
        this.prodotto = data;
        console.log("Photo:", this.prodotto.immagine);

        // Initialize prodottoInfoToPush after prodotto is fetched
        this.prodottoInfoToPush = {
          id: this.prodotto!.id,
          nome: this.prodotto!.nome,
          categoria: this.prodotto!.categoria,
          prezzo: this.prodotto!.prezzo,
          immagine: this.prodotto!.immagine,
          taglia: this.prodotto!.taglie_disponibili[this.selectedSideImage],
          quantita:this.selectedQuantity
        };
      });

    console.log("prodotto arrivato", this.prodotto);
    ns.viewBannerHearderOnOff(false);
  }

  // FUNCTION TO RECALL ON CLICK OF A NEW SIZE
  selectAnotherSize(whichOfArray: number) {
    this.selectedToBlack = whichOfArray;    /*   Cosi abbiamo pronto il valore della misura da pushare per costruire l array  */
    this.sizeToPush = this.prodotto?.taglie_disponibili[this.selectedToBlack];
    this.prodottoInfoToPush!.taglia = this.sizeToPush!;
    console.log("MISURA: ", this.sizeToPush);
  }
// PRENDIAMO IL VALORE DEL TARGET DELL EVENTO E LO SPOSTIAMO NELLA VARIABILE DA PUSHARE NELL ARRAY DA MANDARE
  onQuantityChange(event:any){
this.selectedQuantity=+event.target.value;  /*  con il + davanti convertiamo il risultato del select in numero */
this.prodottoInfoToPush!.quantita=this.selectedQuantity;
  }

  // FUNCTION TO RECALL ON CLICK THE VIEW FROM SIDE SMALL FRAMES
  selectAnotherSideImage(index: number) {
    console.log('Selected side image:', index);
    this.selectedSideImage = index;
  }

  // BUTTON INCREASE FRAME TO VIEW
  increaseSideImage(index: number) {
    if (index == this.numbers.length - 1) {
      this.selectedSideImage = 0;
    } else {
      this.selectedSideImage++;
    }
  }

  // BUTTON DECREASE FRAME TO VIEW
  decreaseSideImage(index: number) {
    if (index == 0) {
      this.selectedSideImage = this.numbers.length - 1;
    } else {
      this.selectedSideImage--;
    }
  }

  itemAddetoToBasket() {    /* ABBIAMO TUTTE LE INFO NECESSARIE E COSTRUIAMO L OGGETTO DA PUSHARE  */ 

    /* controlliamo se il numero di paia + il numero di quelle che stiamo per mettere supera la quantita massima*/
    if(this.ns.numberOfShoes+this.selectedQuantity<16){
    this.itemAdded = true;
  }else{
    this.showMaximumShoesMessage=true;
  }
  }

  itemAddedToBasketFromEmit(itemAddedFE:boolean){
this.itemAdded=itemAddedFE;
  }


  hideMaxmessage(){
    this.showMaximumShoesMessage=false;
  }

}
