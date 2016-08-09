import { Component, EventEmitter} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onNewKeg'],
  template: `
  <input placeholder="Keg Name" #newName>
  <input placeholder="Keg Brand" #newBrand>
  <input type="number" placeholder="Price per Pint" #newPrice>
  <input type="number" placeholder="Alcohol Content"#newContent>
  <button (click)="addKeg(newName, newBrand, newPrice, newContent)">Add</button>
  `
})
export class NewKegComponent {
  public onNewKeg: EventEmitter<Keg>;
  constructor() {
    this.onNewKeg = new EventEmitter();
  }
  addKeg(name: HTMLInputElement,brand: HTMLInputElement,price: HTMLInputElement,content: HTMLInputElement) {
    this.onNewKeg.emit(new Keg(name.value, brand.value, parseInt(price.value), 124, parseInt(content.value)) );
    name.value = "";
    brand.value = "";
    price.value = "";
    content.value = "";
  }
}
