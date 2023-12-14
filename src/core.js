//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    return (n ^ 0) === n;
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    let arr = [];

    for (let i = 2; i < 21; i += 2) {
        arr.push(i);
    }
    return arr;
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
    let sum = 0;
    function recurs(i, n) {
        if (i <= n) {
            sum += i;
            return recurs(i + 1, n);
        }
        return 0;
    }
    recurs(1, n);
    return sum;
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    let sum = 1;
    for (let i = 2; i <= n; i++) {
        sum *= i;
    }
    return sum;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    return (n & (n - 1)) === 0 && n > 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    let fibNums = Array.from(Array(2).keys());
    let len = fibNums.length;
    while (fibNums.length <= n) {
        len = fibNums.push(fibNums[len - 1] + fibNums[len - 2]);
    }
    return fibNums[len - 1];
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
    let value = initialValue;
    return (val) => {
        if (operatorFn !== undefined) {
            value = operatorFn(value, val);
        }
        return value;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start, step) {
    let startValue = start;
    if (startValue === undefined) startValue = 0;
    return () => {
        let lastValue = startValue;
        if (step === undefined) startValue += 1;
        else startValue += step;
        return lastValue;
    };
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) {
        return true;
    }

    if (
        isNaN(firstObject) &&
        isNaN(secondObject) &&
        typeof firstObject === 'number' &&
        typeof secondObject === 'number'
    ) {
        return true;
    }

    if (
        typeof firstObject !== 'object' ||
        firstObject === null ||
        typeof secondObject !== 'object' ||
        secondObject === null
    ) {
        return false;
    }

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);

    if (firstKeys.length !== secondKeys.length) {
        return false;
    }

    for (let key of firstKeys) {
        if (
            !secondObject.hasOwnProperty(key) ||
            !deepEqual(firstObject[key], secondObject[key])
        ) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
