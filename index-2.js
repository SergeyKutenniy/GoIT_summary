// МАСИВЫ И ФУНКЦИИ

// _________________________________________________________________________________//  Используем цикл для вывода только чисел больше определенного значения.

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}

// _________________________________________________________________________________// Метод split

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

// _________________________________________________________________________________// Метод join

const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"

// _________________________________________________________________________________// Метод indexOf

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

// _________________________________________________________________________________// Метод includes

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false

// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}

// _________________________________________________________________________________// Метод slice

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Если begin и end не указаны, будет создана полная копия исходного массива.

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// Если не указан end, копирование будет от start и до конца исходного массива.

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// _________________________________________________________________________________// Метод splice

// _________________________________________________________________________________// Удаление елемента

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]

// _________________________________________________________________________________// Добавление с помощью splice

const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]

// _________________________________________________________________________________// Замена елемента в массиве

const languages = ["C", "C++", "Java", "JavaScript"];

// Заменяем элемент с индексом 1 на новый
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заменяем один элемент (с индексом 2) на несколько
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// _________________________________________________________________________________// Метод concat

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]

// _________________________________________________________________________________// Функции

// _________________________________________________________________________________// Функция умножения любых аргументов

function multiply() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// Используя метод Array.from(), который создаст массив из псевдомассива.

function fn() {
  // В переменной args будет полноценный массив
  const args = Array.from(arguments);
}

// Используя операцию ... (rest), она позволяет собрать произвольное количество элементов, в нашем случае аргументов, в массив и сохранить его в переменную. Собираем все аргументы используя операцию rest прямо в подписи функции.

function fn(...args) {
  // В переменной args будет полноценный массив
}

// _________________________________________________________________________________// Функция снятие наличных со счета

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
  } else if (amount > balance) {
    console.log("Недостаточно средств на счету");
  } else {
    console.log("Операция снятия средств проведена успешно");
  }
}

withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена успешно"

// _________________________________________________________________________________// Slug - строка в URL разделенная тире

function slugify(title) {
  let slug = title.split(" ").join("-").toLowerCase();

  console.log(slug);
}
slugify("Arrays for begginers");

// _________________________________________________________________________________// Поиск самого длиннго слова в строке

const findLongestWord = function (str) {
  let arrStr = str.split(" ");
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }
  }
};
findLongestWord("The quick brown fox jumped over the lazy dog");

// _________________________________________________________________________________// Выводит все целые числа болеше от value

function filterArray(numbers, value) {
  let newArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}

// _________________________________________________________________________________// Ищет уникальный елемент в двух массивах

function getCommonElements(array1, array2) {
  let newArr = [];

  for (let i = 0; i <= array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
}
getCommonElements([1, 2, 3], [2, 4]); // [2]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //[10, 30, 40]

// _________________________________________________________________________________// Выводит сумму элементов в массиве

function calculateTotalPrice(order) {
  let total = 0;

  for (let i of order) {
    total += i;
  }
  return total;
}
calculateTotalPrice([12, 85, 37, 4]); // 138

// _________________________________________________________________________________// Выводит массив всех четных чисел от start до end

function getEvenNumbers(start, end) {
  let arr = [];
  for (i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
getEvenNumbers(2, 5); // [2, 4]

// _________________________________________________________________________________// Выводит первое число которое делиться на divisor без остатка

function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}
findNumber(2, 6, 5); // 5
