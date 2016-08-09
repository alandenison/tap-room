import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
  <div class = "container">
    <h1>Kegs</h1>
    <keg-list
      [kegList]="kegs">
    </keg-list>
  </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("keg1", "bud light", 5, 124, 5),
      new Keg("keg2", "bud light", 5, 124, 5),
      new Keg("keg3", "ale", 1, 9, 8),
      new Keg("keg4", "duff", 11, 124, 20)
    ];
  }
}
