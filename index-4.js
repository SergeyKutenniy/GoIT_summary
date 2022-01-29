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
