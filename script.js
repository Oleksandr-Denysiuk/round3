const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let TotalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  //   console.log(salary);
  console.log(`Зп працівника ${i} - ${salary}`);
  TotalSalary += salary;
}

console.log(`total salary:`, TotalSalary);

// ---------------------------

// Напиши скрипт який підраховує суму всіх парних чисел, які входять в діапазон
// від min до max

const min = 10;
const max = 150;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log("не парне: ", i);
    continue;
  }

  console.log("парне: ", i);
  total += i;
}

console.log("total :", total);

//----------------------------
//написати скрипт покупки товарів
//1-якщо сума покупки не перевищує баланс -
//відняти від балансу суму покупки, вивести повідомлення "На рахунку залишилось[число] кредитів""
// 2-якщо сума покупки перевищує баланс вивести повідомлення
// "На рахунку недостатньо коштів для проведення операції"
// 3- в кінці вивести повідомлення "Операція завершена"

let balance = 10000;
const payment = 2000;

console.log(`Загальна сума покупки ${payment}, перевіряємо баланс.`);

if (payment <= balance) {
  console.log("У вас достатньо коштів для здійснення покупки.");
  balance -= payment;

  console.log(`На рахунку залишилось ${balance}.`);
} else {
  console.log("На рахунку недостатньо коштів для здійснення покупки.");
}
console.log("Оперція завершена.");

// -----------
//напиши скрипт підрахунку суми покупки зі знижкою в залежності
// від потраченою суми за весь час(партнерська програма)

let totalSpend = 2000;
let paymend = 500;
let discount = 0;

if (totalSpend >= 100 && totalSpend < 1000) {
  console.log("Бронзовий партнер, знижка 2%.");
  discount = 0.02;
} else if (totalSpend >= 1000 && totalSpend < 5000) {
  console.log("Срібний партнер, знижка 5%.");
  discount = 0.05;
} else if (totalSpend >= 5000) {
  console.log("Золотий партнерб знижка 10%.");
  discount = 0.1;
} else {
  console.log("Не партнер,  знижка 0%.");
}
paymend -= paymend * discount;
console.log(
  `Оформляємо заказ на суму ${paymend} зі знижкою ${discount * 100}% `
);
totalSpend += paymend;
console.log(`Загальна сума потраченого в магазині за весь час ${totalSpend}.`);

// ---------------

const btnAdd = document.querySelector("button[data-add]");
const resetBtn = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-otput span");

let tatal = 0;
btnAdd.addEventListener("click", function () {
  //   console.log("click hehehe");
  //   console.log(valueInput.value);
  const value = Number(valueInput.value);
  //   console.log(value);
  tatal += value;
  outputEl.textContent = tatal;
  //   console.log(tatal);
  valueInput.value = "";
});
resetBtn.addEventListener("click", function () {
  tatal = 0;
  outputEl.textContent = tatal;
});
