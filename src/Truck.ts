import ShippingContainer from "./ShippingContainer";
import Transporter from "./Transporter";

export class Truck implements Transporter {
  maxWeight: number;
  container!: any;
  constructor(maxWeight: number) {
    this.maxWeight = maxWeight;
  }
  addContainer(container: any): void {
    //returns nothing
  }
  getTotalWeight(): number {
    if (this.container === null) {
      return 0;
    }
    return this.container.getGrossWeight();
  }
  isOverWeight(): boolean {
    if (this.getTotalWeight() > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
