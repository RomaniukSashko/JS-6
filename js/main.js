// Вивести в консоль всі числа від 1 до 10 за допомогою циклу while

let i = 1;

while (i <= 10) {
    console.log(i);
    i += 1;
}

// Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for
// Якщо число (не)парне, пропустити його за допомогою continue

for (let i = 2; i <= 20; i += 1) {
    if (i % 2 === 1) {
        continue;
    }
    
    console.log(i);
}

// Вивести в консоль таблицю множення числа 7 за допомогою циклу for

for (let i = 1; i <= 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// Створити скрипт, який виводить в консоль всі числа , які менші за n 
// Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break

const n = 24;

for (let i = 1; i <= 1000; i += 1) {
    if (i >= n) {
        break;
    }

    console.log(i);
}

// За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3 
// Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue

let num = 1;

while (num < 20) {
    num += 1;

    if (num % 3 === 0) {
        continue;
    }

    console.log(num);
}