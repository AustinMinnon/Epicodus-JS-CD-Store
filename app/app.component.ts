import { Component } from 'angular2/core';
import { CdListComponent } from './cd-list.component';
import { Cd } from './cd.model';

// defining annotation aka "decorator"
@Component({
  selector: 'my-app',
  directives: [CdListComponent],
  template: `
  <div class="container">
    <h1>Obsolete CD's For Sale!!</h1>
    <cd-list
     [cdList]="cds"
     (onCdSelect)="cdWasSelected($event)">
     </cd-list>
  </div>
  ` //uses backticks
})

export class AppComponent {
  public cds: Cd[];
  constructor() {
    this.cds = [
      new Cd("George Clinton and the Parliment Funkadelics", "George Clinton", "Funk", 5, 0),
      new Cd("Chocolate Starfish and the Hot Dog Flavored Water", "Limp Bizkit", "Rock", 5, 1),
      new Cd("Hybrid Theory", "Linkin Park", "Rock", 5, 2),
      new Cd("The 18th Letter", "Rakim", "Rap", 5, 3)
    ];
  }
  cdWasSelected(clickedCd: Cd): void {
    console.log('parent', clickedCd);
  }
}
