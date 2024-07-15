import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
isMenuVisible= false;

makeItVisible(){
  this.isMenuVisible=true
}

hide(){
  this.isMenuVisible=false;
}
}
