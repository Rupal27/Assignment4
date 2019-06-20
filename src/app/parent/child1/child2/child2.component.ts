import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input,OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  
  styleUrls: ['./child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit ,OnChanges , DoCheck{
  @Input() times;
  constructor(private cd: ChangeDetectorRef   ) {
    console.log('Child 2 Constructor');
    this.cd.detach();

  }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('Child2 Onchanges');
    this.cd.detectChanges();
   }
   ngDoCheck() {
      // this.cd.detectChanges();
    }

}
