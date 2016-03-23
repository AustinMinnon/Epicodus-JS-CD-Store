import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { EditCdDetailsComponent } from './edit-cd-details.component';
import { NewCdComponent } from './new-cd.component';
import {SoldPipe} from './sold.pipe';

@Component({
  selector: 'cd-list',
  inputs:['cdList'],
  outputs: ['onCdSelect'],
  pipes: [SoldPipe],
  directives: [CdComponent, EditCdDetailsComponent, NewCdComponent],
  template:`
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">Show All</option>
  <option value="sold">Show Sold</option>
  <option value="notSold" selected="selected">Show Not Sold</option>
  </select>
  <cd-display *ngFor="#currentCd of cdList | sold:filterSold"
    (click)="cdClicked(currentCd)"
    [class.selected]="currentCd === selectedCd"
    [cd]="currentCd">
  <cd-display>
  <edit-cd-details *ngIf="selectedCd" [cd]="selectedCd">
  <edit-cd-details>
  <new-cd (onSubmitNewCd)="createCd($event)"></new-cd>

  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;
  public filterSold: string = "notSold";
  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  cdClicked(clickedCd: Cd): void {
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }
  createCd(theInfo: string[]): void{
    this.cdList.push(
      new Cd(theInfo[0], theInfo[1], theInfo[2], theInfo[3], this.cdList.length)
    );
  }
  onChange(filterOption) {
    this.filterSold = filterOption;
  }
}
