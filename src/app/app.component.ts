import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
 
  @ViewChild('paratitle')
  p1!: ElementRef;

  @ViewChild(ViewChildComponent)
  vc!: ViewChildComponent;
  
  constructor(){}

  ngOnInit(): void {
   console.log("printing viewchild ngOnInit", this.p1); //undefined
  }

  ngAfterViewInit(): void {
   console.log("printing viewchild ngAfterViewInit", this.p1);
   console.log("printing viewchild ngAfterViewInit innerHTML", this.p1.nativeElement.innerHTML);
   this.vc.isViewPresent = true;
   console.log("isViewPresent set up by parent ::", this.vc.isViewPresent);
  }
  title = 'angular-viewchild-poc';
}
