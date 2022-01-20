//Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым.
//Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.
//f(1,2,3); // 6
//f(1,1,1,1,1,1,1,1); // 8
//f(1,2,'s',4); // Error: all parameters type should be a Number

function f() {
    var summ = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number"){
            summ += arguments[i];
        } else {
            throw new Error ('parameter type is not a Number')
        }
    }
    console.log('сумма аргументов функции равна ' + summ)
    return summ;
}


f(1,2,3);
f(1,1,1,1,1,1,1,1);
f(1,2,'s',4);
