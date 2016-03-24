import { Component } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
    selector: 'cd-display',
    inputs: ['cd'],
  template: `
  <div>
  <span><em>Buy</em></span>
    <input *ngIf="cd.sold" type="checkbox" checked (click)="toggleSold(false)"/>
    <input *ngIf="!cd.sold" type="checkbox" (click)="toggleSold(true)"/>
    <label>{{ cd.name + " By: " + cd.artist + " Genre: " + cd.genre + " Price: $" + cd.price }}</label>
  </div>
  `
})

export class CdComponent {
  public cd: Cd;
  toggleSold(setState: boolean) {
    this.cd.sold = setState;
  }
}
