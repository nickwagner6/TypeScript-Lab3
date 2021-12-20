import ShippingContainer from "./ShippingContainer";

export class LightContainer implements ShippingContainer {
  destination: string;
  cargoWeight: number;
  constructor(destination: string, cargoWeight: number) {
    this.destination = destination;
    this.cargoWeight = cargoWeight;
  }
  getGrossWeight(): number {
    //getter
    return this.cargoWeight;
  }
}

export default LightContainer;
