import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-of-search',
  templateUrl: './title-of-search.component.html',
  styleUrl: './title-of-search.component.css'
})
export class TitleOfSearchComponent {
  /* STRINGHE PER CUI SE IL PARAMETRO PASSATO E' UGUALE AD UNA DI QUESTE NON VISUALIZZI LA PAROLA CERCATA */
toAvoid: string[] = ['all', 'sneakers', 'running','training', 'newArrivals', 'best'];


@Input()
searched?:string

constructor(){
  console.log(this.searched);
}
}
