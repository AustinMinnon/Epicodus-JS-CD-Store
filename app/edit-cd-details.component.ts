import {Component} from 'angular2/core';
import {Cd} from './cd.model';

@Component({
  selector: 'edit-cd-details',
  inputs: ['cd'],
  template: `
    <div class="cd-form">
      <h3>Edit CD Details: </h3>
      <input [(ngModel)]="cd.name" class="col-sm-8 input-lg cd-form"/>
    </div>
  `
})
export class EditCdDetailsComponent {
  public cd: Cd;
}
