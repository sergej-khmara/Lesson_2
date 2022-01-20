// Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел,
// на которое делится данное число начиная от 1 и заканчивая самим собой). Данная функция должна обязательно
// содержать проверку входного параметра, потому что принимать она может только число больше 0.

getDivisors(12); // [1, 2, 3, 4, 6, 12]
//getDivisors('Content'); // Error: parameter type is not a Number
//getDivisors(0); // Error: parameter can't be a 0

function getDivisors (a) {
    let arr =[];
    if (typeof a === "number") {
        if ( a >= 0 && a  !== 0 ) {
        for (let i =1; i <= a; i++ ){
            if (a % i == 0) {
                arr.push (i);
            }
        }
        } else {
        throw new Error ('parameter can\'t be a 0')
        }
    } else {
        throw new Error ('parameter type is not a Number')
    }
    console.log(arr);
    return arr;
}