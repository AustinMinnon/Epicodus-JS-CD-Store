import { Component, EventEmitter } from 'angular2/core';
import { CdComponent } from './cd.component';
import { Cd } from './cd.model';
import { EditCdDetailsComponent } from './edit-cd-details.component';
import { NewCdComponent } from './new-cd.component';
import {DonePipe} from './done.pipe';

@Component({
  selector: 'cd-list',
  inputs:['cdList'],
  outputs: ['onCdSelect'],
  pipes: [SoldPipe],
  directives: [CdComponent, EditCdDetailsComponent, NewCdComponent],
  template:`
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All Genres</option>
    <option value="rock">Rock</option>
    <option value="funk">Funk</option>
    <option value="rap">Rap</option>
    <option value="country">Country</option>
    <option value="hip-hop">Hip-Hop</option>
    <option value="reggae">Reggae</option>
  </select>
  <cd-display *ngFor="#currentCd of cdList | genre:filterGenre"
    (click)="cdClicked(currentCd)"
    [class.selected]="currentCd === selectedCd"
    [task]="currentCd">
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
  public filterGenre: string = "all";
  constructor() {
    this.onCdSelect = new EventEmitter();
  }
  cdClicked(clickedCd: Cd): void {
    this.selectedCd = clickedCd;
    this.onCdSelect.emit(clickedCd);
  }
  createCd(name: string, artist: string, genre: string, price: number): void{
    this.cdList.push(
      new Cd(name, artist, genre, price, this.Cdlist.length)
    );
  }
  onChange(filterOption) {
    this.filterGenre = filterOption;
  }
}
