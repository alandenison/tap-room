import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { NewKegComponent } from './new-keg.component';
import { Keg } from './keg.model';
import { LowKegsPipe } from './low-kegs.pipe';
import { EditKegComponent } from './edit-keg.component';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [LowKegsPipe],
  directives: [KegComponent, NewKegComponent,EditKegComponent],
  template: `
  <button (click)="fullnessSwap()">Toggle Low Kegs Display</button>
  <keg-display *ngFor="#currentKeg of kegList | lowKegs:displayFullness" [keg]="currentKeg" (click)="kegClicked(currentKeg)"
  [class.expensive]="currentKeg.price>10"
  [class.moderate]="currentKeg.price>3 && currentKeg.price<=10"
  [class.cheap]="currentKeg.price<=3"
  [class.strong]="currentKeg.content>10">
  </keg-display>
  <new-keg (onNewKeg)="addKeg($event)"></new-keg>
  <edit-keg *ngIf="selectedKeg" [keg]="selectedKeg"></edit-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public displayFullness = "all";
  public selectedKeg: Keg;
  addKeg(keg) {
    this.kegList.push(keg);
  }
  fullnessSwap() {
    if(this.displayFullness==="low") {
      this.displayFullness = "all";
    } else {
      this.displayFullness = "low";
    }
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
  }
}
