export class Keg {
  constructor(public name: string, public brand: string, public price: number, public pints: number, public content: number) {}
  Sell() {
    this.pints--;
  }
}
