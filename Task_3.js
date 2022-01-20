// Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье.
// Данная функция должна обязательно содержать проверку входных параметров,
// потому что принимать она может только числа.


f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number

function f(a,b,c) {
    let result;
    if (typeof  a === "number" && typeof b === "number" && typeof c === "number" )
        {
         result = (a - b) / c;
    } else
    {
        throw new Error ('pallparameter type is not a Number')
    }
    console.log('первый аргумент минус второй деленный на третье равно ' + result)
    return result;

}

