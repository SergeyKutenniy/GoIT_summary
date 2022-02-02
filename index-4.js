// _________________________________________________________________________________//  forEach

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// _________________________________________________________________________________// Пример 2
// _________________________________________________________________________________// Сумма чисел в масcиве через forEach

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });
  return totalPrice;
}

// _________________________________________________________________________________// Фильтрация чисел в массиве через forEach

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}

// _________________________________________________________________________________// Поиск общих элементов в двух массивах с помощью forEach

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];

  firstArray.forEach(function (number) {
    if (secondArray.includes(number)) {
      commonElements.push(number);
    }
  });
  return commonElements;
}

// _________________________________________________________________________________// Callback

// _________________________________________________________________________________// Пример 1

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Mango", function greet(name) {
  consle.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Poly", function notify(name) {
  consle.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});

// _________________________________________________________________________________// Пример 2

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// _________________________________________________________________________________// Пример 3

function processCall(recipient, onAvailable, onNotAvailable) {
  // Имитируем доступеность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Соединяем с ${name}, ожидайте...`);
  // Логика принятия звонка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
  // Логика активации автоответчика
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступен, записываем голограмму.`);
  // Логика записи голограммы
}

processCall("Mango", takeCall, activateAnsweringMachine);
processCall("Poly", takeCall, leaveHoloMessage);

// _________________________________________________________________________________// Методы заказы пиццы

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// _________________________________________________________________________________// стрелочные функции

// _________________________________________________________________________________// Сумма чисел в массиве

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
calculateTotalPrice([12, 85, 37, 4]); // 138

// _________________________________________________________________________________// Фильтрация чисел в массиве

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
};
filterArray([1, 2, 3, 4, 5], 3); //[4, 5]

// _____________________________________________________________________________________ Поиск общих элементов в массивах

const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
};
getCommonElements([1, 2, 3], [2, 4]); // [2]

// _____________________________________________________________________________________// Умножает каждый элемент массива на value

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ______________________________________________________________________________________//Прибавляет значение value к каждому четному числу массива

function changeEven(numbers, value) {
  const newArray = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      number = number + value;
    }
    newArray.push(number);
  });
  return newArray;
}
changeEven([1, 2, 3, 4, 5], 10); // [1, 12, 3, 14, 5]

//_________________________________________________________________________________________________________//Метод map()

const planets = ["Земля", "Марс", "Венера", "Юпитер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']

//_________________________________________________________________________________________________________ Пример 2 map()

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const names = students.map((student) => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

//__________________________________________________________________________________________________________//метод flatMap()

const students = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

students.map((student) => student.courses);
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

//_______________________________________________________________________________________________//массив с уникальными предметами
const students = [
  { name: "Манго", courses: ["математика", "физика"] },
  { name: "Поли", courses: ["информатика", "математика"] },
  { name: "Киви", courses: ["физика", "биология"] },
];

const allCourses = students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

//__________________________________________________________________________________________________________//метод filter()

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]

//Eсть массив студентов с баллами за тест. Необходимо отфильтровать лучших (балл выше 80), худших (балл ниже 50) и средних студентов (балл от 50 до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон

//__________________________________________________________________________________________________________Метод find()

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === "white"); // undefined

//__________________________________________________________________________________________________________Метод findIndex()

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.findIndex((option) => option.label === "blue"); // 2
colorPickerOptions.findIndex((option) => option.label === "pink"); // 3
colorPickerOptions.findIndex((option) => option.label === "white"); // -1

//__________________________________________________________________________________________________________Метод every()

// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

//__________________________________________________________________________________________________________Метод some()

// Есть хотя бы один элемент больше либо равный нулю? - да
[1, 2, 3, 4, 5].some((value) => value >= 0); // true

// Есть хотя бы один элемент больше либо равный нулю? - да
[-7, -20, 3, -10, -14].some((value) => value >= 0); // true

// Есть хотя бы один элемент меньше нуля? - нет
[1, 2, 3, 4, 5].some((value) => value < 0); // false

// Есть хотя бы один элемент меньше нуля? - да
[1, 2, 3, -10, 4, 5].some((value) => value < 0); // true

//__________________________________________________________________________________________________________Метод every, some()

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every вернет true только если всех фруктов будет больше чем 0 штук
const allAvailable = fruits.every((fruit) => fruit.amount > 0); // false

// some вернет true если хотябы одного фрукта будет больше чем 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0); // true

//__________________________________________________________________________________________________________Метод reduce()

//сумма элементов массива

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

//Средний бал студентов

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

//Подсчет количества лайков

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = (tweets) => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

//__________________________________________________________________________________________________________Метод sort()

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//Cортировка по возростанию

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//Сортировка по убыванию

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//Сортировка по алфавиту

const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
); // cортирует обьект по балу по возростанию

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
); // сортирует обьек по балу по убыванию

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
); // сортирует обьект по имени по алфавиту

//Сортировка

const students = [
  { name: "Манго", score: 83, courses: ["математика", "физика"] },
  { name: "Поли", score: 59, courses: ["информатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["физика", "биология"] },
  { name: "Киви", score: 94, courses: ["литература", "информатика"] },
];

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

//Сортированный по алфавиту массив уникальных посещаемых предметов.

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']

//_______________________________________________________________________________________________Массив уникальных жанров всех книг

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];

const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (genres, index, array) => array.indexOf(genres) === index
);
//allGenres ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
//uniqueGenres ["adventure", "history", "fiction", "mysticism", "horror"]

//__________________________________________________________________ Среднее количество времени проведенное в игре со всех игроков

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = [...playtimes].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

//__________________________________________________________________ Среднее количество времени проведенное в игре каждым игроком

const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce(
  (acc, player) => acc + player.playtime / player.gamesPlayed,
  0
);

// __________________________________________________________________ сумма всех денег у пользователей масива обьектов users

const calculateTotalBalance = (users) => {
  return users.reduce((total, user) => total + user.balance, 0);
};

// __________________________________________________________________общее количество друзей всех пользователей масива обьектов users

const getTotalFriendCount = (users) => {
  return users.reduce((total, user) => total + user.friends.length, 0);
};

// Сортировка названия авторов в алфавитном порядке и наоборот

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//______________________________________________________________________________________________________________Сортировка

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

const sortedByAuthorName = [...books].sort(
  (a, b) => a.author.localeCompare(b.author) //Авторы по алфавиту
);

const sortedByReversedAuthorName = [...books].sort(
  (a, b) => b.author.localeCompare(a.author) // авторы по алфавиту в обратном порядке
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating); // книги по рейтингу

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating); // книги по рейтингу в обратном порядке

//____________________________________________________________________ сортированные уникальные посещаемые предметы

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

////____________________________________________________________________ Отсортированый список авторов рейтинг книг который больше 8

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));
