
// function declaration
function add (num1, num2){
//     const sum = num1 + num2;
//     return sum;
num2 = num2 || 0
return num1 + num2;
}

console.log(add(20, 30));


// function expression 
const add2 = function add2(num1, num2){
    return num1 + num2;
}

// function expression (anonymous)
const add3 = function(num1, num2){
    return num1+ num2;
}

// arrow function 
const add4 = (num, num2) => num + num2;





const sum1 = add2(30,20);
const sum2  = add2(30, 20);
console.log(sum1 + sum2)

console.log(add3(20, 30))


console.log(add4(20,30))

// c



// document.getElementById('my-btn').onclick = function hanldeBtn (){

// }