import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg',
  inputs: ["keg"],
  template: `
  <input [(ngModel)]="keg.name" placeholder="Keg Name">
  <input [(ngModel)]="keg.brand" placeholder="Keg Brand">
  <input [(ngModel)]="keg.price" type="number" placeholder="Price per Pint">
  <input [(ngModel)]="keg.content" type="number" placeholder="Alcohol Content">
  <input [(ngModel)]="keg.pints" type="number" placeholder="Pints Remaining">
  `
})
export class EditKegComponent {
  public keg: Keg;
}
