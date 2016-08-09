import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
    <label> {{ keg.name }}</label>
    <label>, {{ keg.brand }}</label>
    <label>, {{ "$" + keg.price }}</label>
    <label>, {{ keg.pints }} </label>
    <label>, {{ keg.content }} </label>
    <button (click)="keg.Sell()">Sell a Pint</button>
  </div>
`
})

export class KegComponent {
  public keg: Keg;
}
