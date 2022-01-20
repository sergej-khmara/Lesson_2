// Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет:
// чётное оно или нет. Если чётное — функция возвращает `true`, если нечётное — `false`.
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

isEven(3); // true
isEven(4); // false
isEven('Content'); // Error: parameter type is not a Number

function isEven () {
    let n = 0 ;
    if (typeof arguments [0] === "number") {
            if (arguments [0] % 2 === 0) {
                n =  true
            } else {
                n =  false  }
        } else {
            throw new Error('parameter type is not a Number')
        }

    console.log(n);
    return isEven;
}