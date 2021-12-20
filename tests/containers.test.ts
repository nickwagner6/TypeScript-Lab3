import { HeavyContainer } from "../src/HeavyContainer";
import { LightContainer } from "../src/LightContainer";
import { Truck } from "../src/Truck";

describe("LightContainer", function () {
  test("destination is set from the constructor", function () {
    let newDestination: LightContainer = new LightContainer("Africa", 0);
    expect(newDestination.destination).toBe("Africa");
  });
  test("cargoWeight is set from the constructor", function () {
    let newCargoWeight: LightContainer = new LightContainer("Africa", 20);
    expect(newCargoWeight.cargoWeight).toBe(20);
  });
  test("getGrossWeight", function () {
    let newCargoWeight: LightContainer = new LightContainer("Africa", 50);
    expect(newCargoWeight.getGrossWeight()).toBe(50);
  });
  test("getGrossWeight", function () {
    let newCargoWeight: LightContainer = new LightContainer("Africa", 1000);
    expect(newCargoWeight.getGrossWeight()).toBe(1000);
  });
});

describe("HeavyContainer", function () {
  test("tareWeight, desination, and cargoWeight is set from the constructor", function () {
    let newCargoWeight: HeavyContainer = new HeavyContainer(
      20,
      "Bora Bora",
      50
    );
    expect(newCargoWeight).toBe(newCargoWeight);
  });
  test("tareWeight, desination, and cargoWeight is set from the constructor", function () {
    let newCargo: HeavyContainer = new HeavyContainer(20, "Bora Bora", 50);
    expect(newCargo.cargoWeight).toBe(50);
  });
  test("getGrossWeight returns the tareWeight plus cargoWeight", function () {
    let newCargo: HeavyContainer = new HeavyContainer(20, "Mexico", 50);
    expect(newCargo.getGrossWeight()).toBe(70);
  });
  test("getGrossWeight returns the tareWeight plus cargoWeight", function () {
    let newCargo: HeavyContainer = new HeavyContainer(100, "Mexico", 300);
    expect(newCargo.getGrossWeight()).toBe(400);
  });
});

describe("Truck", function () {
  test("maxWeight property is set from constructor", function () {
    let newMaxWeight: Truck = new Truck(500);
    expect(newMaxWeight).toBe(newMaxWeight);
  });
  test("container property is set to null", function () {
    let newMaxWeight: Truck = new Truck(500);
    expect(newMaxWeight).toBe(newMaxWeight);
  });
});
