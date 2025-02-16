
let integerVar = 42;
let floatVar = 3.14;
let stringVar = "Hello";
let booleanVar = true;

console.log(typeof integerVar); 
console.log(typeof floatVar);   
console.log(typeof stringVar);  
console.log(typeof booleanVar); 


integerVar = "42";
floatVar = false;
stringVar = 123;
booleanVar = null;

console.log(typeof integerVar); 
console.log(typeof floatVar);  
console.log(typeof stringVar);  
console.log(typeof booleanVar); 


let concatenated = integerVar + floatVar; 
let boolToNumber = Number(booleanVar);   
let stringToBoolean = Boolean(stringVar); 

console.log(concatenated);
console.log(boolToNumber);
console.log(stringToBoolean);


let user = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        city: "Kyiv",
        country: "Ukraine"
    }
};

console.log(JSON.stringify(user));
//завдання 2 

let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let num3 = parseFloat(prompt("Введіть третє число:"));


let average = (num1 + num2 + num3) / 3;
console.log("Середнє арифметичне:", average);


let absNum1 = Math.abs(num1);
let ceilNum2 = Math.ceil(num2);
let floorNum3 = Math.floor(num3);
let powNum1Num2 = Math.pow(num1, num2);

console.log("Модуль першого числа:", absNum1);
console.log("Друге число округлене вгору:", ceilNum2);
console.log("Третє число округлене вниз:", floorNum3);
console.log("Перше число піднесене до степеня другого:", powNum1Num2);


let divisor = 5;
let isDivisible = (average % divisor === 0);
console.log(`Середнє арифметичне ділиться на ${divisor} без залишку:`, isDivisible);


let isTriangleValid = (num1 + num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1);
console.log("Трикутник із заданими сторонами існує:", isTriangleValid);
//завдання 3

let a = 10, b = 20, c = 15;
let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log("Найбільше значення:", max);
console.log("Найменше значення:", min);


let isAnyEven = (a % 2 === 0) || (b % 2 === 0) || (c % 2 === 0);
console.log("Хоча б одне з чисел парне:", isAnyEven);


let complexCondition = (a > b) && (b < c);
console.log("Складна умова:", complexCondition);


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

let numberToCheck = 29;
console.log(`${numberToCheck} є простим числом:`, isPrime(numberToCheck));
//Оголошення змінних у JavaScript:
//var: функціональна область видимості, можна переоголошувати, піднімається.
//let: блочна область видимості, не можна переоголошувати, не піднімається.
///const: блочна область видимості, не можна переоголошувати чи змінювати, не піднімається.
//Операції з рядками:
//Конкатенація, довжина, доступ до символів, пошук підрядка, виділення підрядка, заміна, перетворення регістру, розділення на масив.
//Різниця між == і ===:
//== порівнює значення з приведенням типів.
//=== порівнює значення без приведення типів.
//Логічні оператори:
//&& (AND): повертає true, якщо обидва операнди true.
//|| (OR): повертає true, якщо хоча б один операнд true.
//! (NOT): інвертує значення.
//Перевірка на просте число:
//Число є простим, якщо воно ділиться тільки на 1 і на себе. Перевіряємо ділення на всі числа від 2 до квадратного кореня з числа.

