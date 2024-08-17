import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
isMenuVisible= false;
currentIndex:number=0;

a:number=0;
b:number=2;
c:number=2;

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
  
}
  
