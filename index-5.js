class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
// В результате вызова `new Car('Audi','Q3', 36000)` получится объект ` {brand: 'Audi', model: 'Q3', price: 36000 }`

// В результате вызова `new Car( 'BMW', 'X5', 58900)` получится объект `{brand: 'BMW', model: 'X5', price: 58900 }`

// В результате вызова `new Car( 'Nissan', 'Murano', 31700)` получится объект `{brand: 'Nissan', model: 'Murano', price: 31700 }`

// ___________________________________________________________________________________________________________Cтроки

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = this.value + str;
  }
  padStart(str) {
    this.value = str + this.value;
  }
  padBoth(str) {
    this.value = str + this.value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// ___________________________________________________________________________________________________________Приватные свойства

class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    return (this.#brand = newBrand);
  }
}

//_____Пример 2_________________________________________________________________________________________________________________

class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter((item) => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
