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

  constructor(private ns: NikeService, private route: ActivatedRoute) {
    ns.viewBannerHearderOnOff(false);
  }
// GET THE STRING WITH THE TYPE OF FILTER AT THE START
  ngOnInit(): void {
    this.route.params.subscribe(list => {
      this.passedFilter = list['filter'];
      console.log("status: ", this.passedFilter);
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

// WHEN PRESSED ALL FOR THE FILTERS
    allP(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }

    sneakers(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }

    running(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }

    training(){
      this.route.params.subscribe(list => {
        this.passedFilter = list['filter'];
        console.log("status: ", this.passedFilter);
        this.updateToChild();
      });
    }
}
