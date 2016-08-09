import { Pipe } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "lowKegs",
  pure: false
})
export class LowKegsPipe {
  transform(input: Keg[], args) {
    if(args[0]==="low") {
      return input.filter((keg) => {
        return keg.pints < 10;
      });
    } else {
      return input;
    }
  }
}
