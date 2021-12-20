import ShippingContainer from "./ShippingContainer";

export class HeavyContainer implements ShippingContainer {
  tareWeight: number;
  destination: string;
  cargoWeight: number;
  constructor(tareWeight: number, desination: string, cargoWeight: number) {
    this.tareWeight = tareWeight;
    this.destination = desination;
    this.cargoWeight = cargoWeight;
  }
  getGrossWeight(): number {
    //getter
    return this.tareWeight + this.cargoWeight;
  }
}
