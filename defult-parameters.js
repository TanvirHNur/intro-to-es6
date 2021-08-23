function add (num1, num2 = 110){
    // Option 2
//    num2 =num2 || 0;

//    Option 1
    // if(num2 == undefined){
    //     num2 =0;
    // }
    
 const result = num1  + num2;
 return result;
}

console.log(add(20, 0))

