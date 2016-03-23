import {Component, EventEmitter} from 'angular2/core';
import {Cd} from './cd.model';


@Component({
  selector: 'new-cd',
  outputs: ['onSubmitNewCd'],
  template: `

  <div class="cd-form">
    <h3>Create Cd:</h3>
    <input placeholder="Name" class="col-sm-2 input-md" #newName>
    <input placeholder="Artist" class="col-sm-2 input-md" #newArtist>
    <input placeholder="Genre" class="col-sm-2 input-md" #newGenre>
    <input placeholder="Price" class="col-sm-2 input-md" #newPrice>
    <button (click)="addCd(newName, newArtist, newGenre, newPrice)" class="btn-info btn-xs add-button">Add</button>
  </div>
  `
})
export class NewCdComponent {
  public onSubmitNewCd: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewCd = new EventEmitter();
  }
  addCd(userName: HTMLInputElement, userArtist: HTMLInputElement, userGenre: HTMLInputElement, userPrice: HTMLInputElement){

    var theInfo:Array<String> = [userName.value, userArtist.value, userGenre.value, userPrice.value];
    this.onSubmitNewCd.emit(theInfo);
    userName.value = "";
    userArtist.value = "";
    userGenre.value = "";
    userPrice.value = "";
  }
}
