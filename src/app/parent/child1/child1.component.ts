import { Component, OnInit,  ChangeDetectionStrategy, Input,ChangeDetectorRef, OnChanges, DoCheck } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit,OnChanges,DoCheck {
   @Input() dates;
  constructor(private cd: ChangeDetectorRef) {
    console.log('Child 1 Constructor');
    this.cd.detach();
   }

  ngOnInit() {
  }
  ngOnChanges() {
   console.log('Child1 Onchanges');
   this.cd.detectChanges();
  }
  ngDoCheck() {
    //  this.cd.detectChanges();
   }
 
}
