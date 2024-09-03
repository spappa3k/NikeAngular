import { Component, OnInit, ViewChild } from '@angular/core';
import { NikeService } from '../nike.service';
import { ActivatedRoute } from '@angular/router';
import { Prodotti } from '../../assets/models/models';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-side-of-list',
  templateUrl: './side-of-list.component.html',
  styleUrls: ['./side-of-list.component.css']
})
export class SideOfListComponent implements OnInit {
  @ViewChild(ListComponent) listComponent?: ListComponent;

  prodotti: Prodotti[] = [];
  passedFilter?:string;
fromAppComponent?:string;
  constructor(private ns: NikeService, private route: ActivatedRoute) {
    ns.viewBannerHearderOnOff(false);
  }
// GET THE STRING WITH THE TYPE OF FILTER AT THE START
  ngOnInit(): void {
    this.route.params.subscribe(list => {
      this.passedFilter = list['filter'];
      console.log("status: ", this.passedFilter);
      this.updateToChild();
    });
  }

// CALLED AFTER THE VIEW IT'S READY
  ngAfterViewInit(): void {
   this.updateToChild();    
  }
// GO AND TELL THE CHILD THE FILTER TO USE
  updateToChild(){
    console.log(this.listComponent);
      this.listComponent?.update(this.passedFilter!);
    }

// CLICK ALL
    allP(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }
// CLICK SNEAKERS
    sneakers(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }
// CLICK RUNNING
    running(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }
//  CLICK TRAINING
    training(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }

    //  CLICK NEW ARRIVALS
    newArrivals(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }

      //  CLICK BEST SELLINGS
      best(){
        this.route.params.subscribe(list => {
          this.passedFilter = list['filter'];
          console.log("status: ", this.passedFilter);
          this.updateToChild();
        });
      }
}
