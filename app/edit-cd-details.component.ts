import {Component, EventEmitter} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'edit-cd-details',
  inputs: ['cd'],
  outputs: ['closeEdit'],
  template: `
  <div class="cd-form" id="show">
    <div>
      <h3>Edit CD Details: </h3>
      <input [(ngModel)]="cd.name" class="col-sm-2 input-md cd-form"/>
      <input [(ngModel)]="cd.artist" class="col-sm-2 input-md cd-form"/>
      <input [(ngModel)]="cd.genre" class="col-sm-1 input-md cd-form"/>
      <input [(ngModel)]="cd.price" class="col-sm-1 input-md cd-form"/>
      <button (click)="submitEdit()" class="btn-warning btn-xs">save</button>
    </div>
  </div>
  `
})

export class EditCdDetailsComponent {
  public cd: Cd;
  public closeEdit: EventEmitter<Object>;
  constructor() {
    this.closeEdit = new EventEmitter();
  }
  submitEdit(){
    console.log('submitEdit');
    this.closeEdit.emit(new Object());
  }
}
