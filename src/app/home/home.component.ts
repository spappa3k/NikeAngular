import { Component } from '@angular/core';
import { NikeService } from '../nike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private ns:NikeService){
    ns.viewBannerHearderOnOff(true);
  }
}