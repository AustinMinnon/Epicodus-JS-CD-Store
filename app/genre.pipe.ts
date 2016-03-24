import { Pipe, PipeTransform } from 'angular2/core';
import { Cd } from './cd.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Cd[], args) {
    var desiredGenre = args[0];
    if(desiredGenre !== "all") {
      return input.filter((cd) =>{
        return cd.genre === args[0];
      })
    }
    else{
      return input;
    }
  }
}
