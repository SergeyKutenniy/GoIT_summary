//ОБЬЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ

// Методы обьектов

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// Доступ к ключам и свойствам обьекта

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значение свойства с таким ключом
  console.log(book[key]);
}

// Метод Object.create(animal) создаёт и возвращает новый объект, связывая его с объектом animal. Поэтому можно получить значение свойства legs обратившись к нему как dog.legs, хотя его нет в объекте dog - это несобственное свойство из объекта animal.

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

// При переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство. Даже если сейчас мы уверены в том что у объекта нет несобственных свойств, это оградит от возможных ошибок в будущем.

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Если это собственное свойство - выполняем тело if
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }
  // Если это не собственное свойство - ничего не делаем
}

// Доступ ко всем ключам/свойствам обьекта

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// Метод Object.entries()

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

const entries = Object.entries(book);
// [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// Доступ ко всем названиям книг

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];

const bookNames = [];

for (const book of books) {
  bookNames.push(book.title);
}

console.log(bookNames); // ["The Last Kingdom", "На берегу спокойных вод", "Сон смешного человека"]

// Средний рейтинг наших книг

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

//Вычесляемые свойства

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

//Перебор обьекта по ключам и свойствам (for...in)

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

//Проверка на собственные свойства hasOwnProperty()

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }
}

// Сумма всех ключей в обьекте object

function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);
  propCount += keys.length;

  return propCount;
}
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3

//Доступ ко всем ключам и свойствам обьекта с помощью Object.key() and (for..of)

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];

const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}

//Сумма зарплат работников

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);
  for (value of values) {
    totalSalary += value;
  }

  return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

//Доступ ко всем ключам и свойствам обьектов

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// Функция ищет название товара и возвращает его цену

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price;
    }
  }
  return null;
}
getProductPrice("Radar");

// Возвращает все значения ключа propName

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let values = [];
  for (const product of products) {
    if (product[propName]) {
      values.push(product[propName]);
    }
  }
  return values;
}

getAllPropValues("price"); // [1300, 2700, 400, 1200]

// Возвращает общую цену за нужный товар

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  for (const product of products) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
}
calculateTotalPrice("Radar");
