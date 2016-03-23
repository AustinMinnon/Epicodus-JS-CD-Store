import { Component } from 'angular2/core';
import { Cd } from './cd.model';

@Component({
    selector: 'cd-display',
    inputs: ['cd'],
  template: `
  <div>
    <input *ngIf="cd.sold" type="checkbox" checked (click)="toggleSold(false)"/>
    <input *ngIf="!cd.sold" type="checkbox" (click)="toggleSold(true)"/>
    <label>{{ cd.name }}</label>
  </div>
  `
})

export class CdComponent {
  public cd: Cd;
  toggleSold(setState: boolean) {
    this.cd.sold = setState;
  }
}
