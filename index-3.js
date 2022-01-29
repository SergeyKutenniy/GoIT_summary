//ОБЬЕКТЫ, ДЕСТРУКТУРИЗАЦИЯ

// _________________________________________________________________________________// Методы обьектов

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

// _________________________________________________________________________________// Доступ к ключам и свойствам обьекта

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

// _________________________________________________________________________________// Доступ ко всем ключам/свойствам обьекта

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'rating']

const values = Object.values(book);
console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// _________________________________________________________________________________// Метод Object.entries()

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

// _________________________________________________________________________________// Доступ ко всем названиям книг

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

// _________________________________________________________________________________// Средний рейтинг наших книг

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating); // 8.2

// _________________________________________________________________________________//Вычесляемые свойства

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

// _________________________________________________________________________________//Перебор обьекта по ключам и свойствам (for...in)

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

// ________________________________________________________________________________//Проверка на собственные свойства hasOwnProperty()

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

// _________________________________________________________________________________// Сумма всех ключей в обьекте object

function countProps(object) {
  let propCount = 0;

  const keys = Object.keys(object);
  propCount += keys.length;

  return propCount;
}
countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3

// _________________________________________________________________________________//Доступ ко всем ключам и свойствам обьекта с помощью Object.key() and (for..of)

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

// _________________________________________________________________________________//Сумма зарплат работников

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);
  for (value of values) {
    totalSalary += value;
  }

  return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// _________________________________________________________________________________//Доступ ко всем ключам и свойствам обьектов

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

// _________________________________________________________________________________// Функция ищет название товара и возвращает его цену

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

// _________________________________________________________________________________// Возвращает все значения ключа propName

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

// _________________________________________________________________________________// Возвращает общую цену за нужный товар

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

// _________________________________________________________________________________// ДЕСТРУКТУРИЗАЦИЯ

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

// Деструктуризируем
const { title, author, isPublic, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = isPublic ? "публичном" : "закрытом";
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

// Значения по умолчанию

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

// Добавим картинку обложки если её нет в объекте книги
const {
  title,
  coverImage = "https://via.placeholder.com/640/480",
  author,
} = book;

console.log(title); // The Last Kingdom
console.log(author); // Bernard Cornwell
console.log(coverImage); // https://via.placeholder.com/640/480

// _________________________________________________________________________________// Изминение имя переменной

const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle); // The Last Kingdom
console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

const secondBook = {
  title: "Сон смешного человека",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle); // Сон смешного человека
console.log(secondCoverImage); // https://via.placeholder.com/640/480

// _________________________________________________________________________________// Деструктуризация в цикле for...of

for (const book of books) {
  const { title, author, rating } = book;

  console.log(title);
  console.log(author);
  console.log(rating);
}

// _________________________________________________________________________________// Глубокая деструктуризация

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log(name); // Jacques Gluke
console.log(tag); // jgluke
console.log(followers); // 5603
console.log(userViews); // 4827
console.log(userLikes); // 1308

// _________________________________________________________________________________// Деструктуризация массивов

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// Иногда из массива необходимо деструктуризировать только первые N элементов, а остальные сохранить в одну переменную в виде массива. При деструкции массива можно распаковать и присвоить оставшуюся часть элементов массива переменной, используя операцию ... (rest).

const rgb = [200, 255, 100];

const [red, ...colors] = rgb;

console.log(red); // "200"
console.log(colors); // [255, 100]

// Элементы можно пропускать. Допустим, из массива rgb необходимо взять только последнее значение. На практике эта возможность используется редко.

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"

// _________________________________________________________________________________// Паттерн "Обьект параметров"

function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// Или сразу в сигнатуре (подписи) функции, разницы нет.

function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  // И так далее
}

// _________________________________________________________________________________// Средняя температура за два дня

function calculateMeanTemperature(forecast) {
  // const todayLow = forecast.today.low;
  // const todayHigh = forecast.today.high;
  // const tomorrowLow = forecast.tomorrow.low;
  // const tomorrowHigh = forecast.tomorrow.high;

  const {
    today: { low: todayLow, high: todayHigh },
    tomorrow: { low: tomorrowLow, high: tomorrowHigh },
  } = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}
calculateMeanTemperature({
  today: { low: 28, high: 32 },
  tomorrow: { low: 25, high: 29 },
}); // 28.5

// _________________________________________________________________________________// Возвращает сумму аргументов любого количества

function add(...args) {
  let sum = 0;
  for (var i = 0; i < args.length; i += 1) {
    sum += args[i];
  }
  return sum;
}
add(12, 4, 11, 48);

// _________________________________________________________________________________// Считает сумму тех чисел которые больше первого

function addOverNum(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (args[0] < args[i]) total += args[i];
  }
  return total;
}
addOverNum(10, 12, 4, 11, 48, 10, 8);

// _________________________________________________________________________________// Возвращает общие числа с args и array

function findMatches(array, ...args) {
  const matches = [];
  for (let i = 0; i < args.length; i += 1) {
    if (array.includes(args[i])) {
      matches.push(args[i]);
    }
  }
  return matches;
}
findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);

// _________________________________________________________________________________// Заменяет название книги в обьекте

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
    return `Updating books ${oldName} to ${newName}`;
  },
};

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      if (this.potions[i].name === oldName) {
        this.potions[i].name = newName;
        return;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};
