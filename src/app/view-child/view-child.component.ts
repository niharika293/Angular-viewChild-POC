import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  isViewPresent : boolean = false; 
  constructor() { }

  ngOnInit(): void {
   console.log("isViewPresent in child - ngOnInit ::", this.isViewPresent);
  }

  ngAfterViewInit(){
    this.isViewPresent = false;
    console.log("isViewPresent set up by child - ngAfterViewInit ::", this.isViewPresent);
  }

}
