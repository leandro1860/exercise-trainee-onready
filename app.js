class Vehicles {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

class Car extends Vehicles {
  constructor(brand, model, doors, price) {
    super(brand, model, price);
    this.doors = doors;
  }

  carsByConsole() {
    console.log(
      "Marca: " +
        this.brand +
        " // Modelo: " +
        this.model +
        " // Puertas: " +
        this.doors +
        " // Precio: " +
        priceFormat(this.price)
    );
  }
}

class Motorcycle extends Vehicles {
  constructor(brand, model, displacement, price) {
    super(brand, model, price);
    this.displacement = displacement;
  }

  motorcyclesByConsole() {
    console.log(
      "Marca: " +
        this.brand +
        " // Modelo: " +
        this.model +
        " // Cilindrada: " +
        this.displacement +
        " // Precio: " +
        priceFormat(this.price)
    );
  }
}

const vehicles = [
  new Car("Peugeot", "206", "4", 200000),
  new Motorcycle("Honda", "Titan", "125cc", 60000),
  new Car("Peugeot", "208", "5", 250000),
  new Motorcycle("Yamaha", "YBR", "160cc", 80500.5),
];

const priceFormat = (vehiclePrice) => {
  return (
    "$" +
    vehiclePrice
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
  );
};

let referenceHighestPrice = (referenceLowerPrice = vehicles[0].price);
let modelLetterY;
let highestPrice;
let lowerPrice;

vehicles.forEach((item) => {
  if (item instanceof Car) {
    item.carsByConsole();
  } else if (item instanceof Motorcycle) {
    item.motorcyclesByConsole();
  }
  if (item.price > referenceHighestPrice) {
    referenceHighestPrice = item.price;
    highestPrice = [item.brand, item.model];
  }
  if (item.price < referenceLowerPrice) {
    referenceLowerPrice = item.price;
    lowerPrice = [item.brand, item.model];
  }
  if (item.model.includes("Y")) {
    modelLetterY = [item.brand, item.model, priceFormat(item.price)];
  }
});

console.log("=============================");
console.log("Vehículo más caro: " + highestPrice[0] + " " + highestPrice[1]);
console.log("Vehículo más barato: " + lowerPrice[0] + " " + lowerPrice[1]);
console.log(
  "Vehículo que contiene en el modelo la letra ‘Y’: " +
    modelLetterY[0] +
    " " +
    modelLetterY[1] +
    " " +
    modelLetterY[2]
);

vehicles.sort((a, b) => (a.price < b.price ? 1 : -1));
console.log("=============================");
console.log("Vehículos ordenados por precio de mayor a menor:");
vehicles.forEach((item) => {
  console.log(item.brand + " " + item.model);
});
