//Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров,
//а затем последовательно выводит на экран его элементы. Обязательно нужно использовать рекурсию.
//Использовать цикл запрещено. Данная функция должна обязательно содержать проверку входного параметра,
//потому что принимать она может только не пустой массив

f ([1,2,3]);
// 1
// 2
// 3
//f(1,2,3) // Error: parameter type should be an array
 //f('Content') // Error: parameter type should be an array
//f([]) // Error: parameter can't be an empty

 function f  (a) {
     if (typeof a == "object" ) {
         if (typeof a == 'string') {
             throw new Error('Error: parameter type should be an array')
         } else {
             if (a.length === 0) {
                 // throw new Error('parameter can\'t be an empty')
             } else {
                 console.log(a.shift());
                 f (a);
             }
         }
     } else {
         throw new Error('parameter can\'t be an empty')
     }
 }




