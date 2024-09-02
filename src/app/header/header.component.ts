import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval } from 'rxjs';
import { NikeService } from '../nike.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
isMenuVisible=false;
currentIndex:number=0;

/* reactive form per ricerca prodotto dsa nome*/
searchForm:FormGroup

/* NEL TEMPLATE EQUIVALGONO A slider[a], slider[b], slider[c] */
a:number=0;
b:number=2;
c:number=2;

/* Creazione Emitter */
@Output()
evento=new EventEmitter<string>();

/* Stringa che passeremo all emitter*/
productName?:string


constructor(public ns:NikeService){
this.searchForm=new FormGroup({
  searchQuery:new FormControl('')
})
}


/* a,b,c cambieranno ad ogni stato dell index in uno dei seguenti className*/
slider=[
  {
   className:"visualizzato"
  },
  {
   className:"onLeft"
  },
  {
    className:""
  }
]

makeItVisible(){
  this.isMenuVisible=true
}

hide(){
  this.isMenuVisible=false;
}


ngOnInit(): void {
 setInterval(() => {
    this.changeSlide();
  }, 3000);
}




/* Funzione per cui  all aumentare dell index cambia lo stato di a,b,c che rappresentano i 3 sliders*/
changeSlide(){
 
  if(this.currentIndex<2){
    this.currentIndex++;
  }else{
    this.currentIndex=0
  }

  if(this.currentIndex==0){
    this.a=0;
    this.b=1;
    this.c=2;
  }
  if(this.currentIndex==1){
    this.a=1;
    this.b=2;
    this.c=0;
  }
  if(this.currentIndex==2){
    this.a=2;
    this.b=0;
    this.c=1;
  }
  }
  
onSubmit(){   /* prendiamo il nome del prodotto dal submit ed emettiamolo in output */
  this.productName=this.searchForm?.value.searchQuery;
  if(this.productName){
  this.evento.emit(this.productName);
  }
}
}