import { Component, OnInit } from '@angular/core';
import { NikeService } from './nike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'NikeAngular';

  constructor(private ns:NikeService){}

  ngOnInit(): void {
   // this.ns.allProducts().subscribe();
  }
}
