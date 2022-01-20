
// Напишите функцию `f`, которая возвращает куб числа.
// Число передается параметром. \
// Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.

//f(2); // 8
//f('Content'); // Error: parameter type is not a Number

 function kubnumber (number) {
     if (typeof number !== 'string'){
    number = number * number * number;
         console.log( 'куб числа равен ' + number )
         return number;
     } else {
         throw new Error('parameter type is not a Number')
     }
 }

kubnumber ('3')
// var rezult_1 = kubnumber ('3')
//throw new  Error( 'Input param not a number ' )
//console.log ('message input data is not a number ')



