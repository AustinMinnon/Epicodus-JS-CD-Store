import {Pipe, PipeTransform} from 'angular2/core';
import {Cd} from './cd.model';

@Pipe({
name: "sold",
pure: false
})
export class SoldPipe implements PipeTransform {
  transform(input: Cd[], args) {
    var desiredSoldState = args[0];
    if(desiredSoldState === "sold") {
      return input.filter((cd) => {
        return cd.sold;
      });
    } else if (desiredSoldState === "notSold") {
      return input.filter((cd) => {
        return !cd.sold;
      });
    } else {
      return input;
    }
  }
}
