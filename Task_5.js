// Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`.
//     Создайте из него новый массив, где останутся лежать только положительные числа `[1, 2, 3, 7]`.
//     Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать число и возвращать true,
//     если число положительное, и false — если отрицательное.
//     Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
// *Для добавление нового элемента в конец массива используйте метод push*

// Пример использования функции isPositvie()
//isPositive(3) // вернет false
//isPositive(-3) // вернет true
//isPositive('s') // Error: parameter type is not a Number

// Пример использования метода push
//var arr = [8];
//arr.push(2);
//console.log(arr[1]); // выведет число 2

//var  arr = [1, 2, -4, 3, -9, -1, 7];

//for(var i=0;i< arr.length; i++){
//console.log(arr[i])
//    isPositive ()
//}

  function isPositive() {
      let n = 0 ;
      for (var i = 0; i < arguments.length; i++) {
          if (typeof arguments[i] == "number") {
              if (arguments[i] > 0 ){
               n=  false

              } else {
                  n= true  }
          } else {
              throw new Error('parameter type is not a Number')
         }
      }
      console.log(n);
      return n;
 }





 let array = [1, 2, -4, 3, -9, -1, 7];
 let result = [];

 function PP(a) {

     if (!isNaN(a)) {
         return a > 0;
     }
 }

 for (let element of array) {
     if (PP(element)) {
         result.push(element);
     }
 }
 console.log(result);

// pos (1,2,3);
//
//  function pos () {
//      for (item of arguments)  {
//  console.log(item);
//      }
//  }
//
//let mas = [1, 2, 3];
// //f(mas);
//
// f ([1,2,3]);

// var arr = ['a', 'b', 'c', 'd', 'f'];
// //f (1,2,3);
// var i = 0, arr ;
// function f(arr) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) f(arr);
//
// }
//  //f(arr);
// console.log (arr)