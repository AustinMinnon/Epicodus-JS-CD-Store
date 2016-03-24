import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { EditCdDetailsComponent } from './edit-cd-details.component';
import { NewCdComponent } from './new-cd.component';
import { CartComponent } from './cart.component';
import {SoldPipe} from './sold.pipe';

@Component({
  selector: 'cd-list',
  inputs:['cdList'],
  outputs: ['onCdSelect'],
  pipes: [SoldPipe],
  directives: [CdComponent, EditCdDetailsComponent, NewCdComponent, CartComponent],
  template:`
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="sold">Show Sold</option>
  <option value="notSold" selected="selected">Show Not Sold</option>
  </select>
<div class="row">
  <div class="col-lg-7">

    <cd-display *ngFor="#currentCd of cdList | sold:filterSold"
      (click)="cdClicked(currentCd)"
      [class.selected]="currentCd === selectedCd"
      [cd]="currentCd">
    </cd-display>
  </div>
  <div class="col-sm-5">
      <h2>Shopping Cart:</h2>
    <cart-display *ngFor="#currentCd of cdList | sold:filterNotSold"
      (click)="cdClicked(currentCd)"
      [class.selected]="currentCd === selectedCd"
      [cd]="currentCd">
    </cart-display>
  </div>
</div>
  <edit-cd-details *ngIf="isEdited" [cd]="selectedCd" (closeEdit)="onEdit()"></edit-cd-details>
  <new-cd (onSubmitNewCd)="createCd($event)"></new-cd>

  `
})

export class CdListComponent {
  public cdList: Cd[];
  public onCdSelect: EventEmitter<Cd>;
  public selectedCd: Cd;
  public filterSold: string = "notSold";
  public filterNotSold: string = "sold";
  public isEdited: boolean= false;
  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  onEdit() {
    console.log('onEdit');
    this.isEdited = false;
  }

  cdClicked(clickedCd: Cd): void {
    this.isEdited = true;
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
