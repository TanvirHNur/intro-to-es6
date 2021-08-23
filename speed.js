const numbers = [12,12,2,3,32,22,2];
// console.log(numbers)

// console.log(...numbers)

const max = Math.max(12,12,2,3,32,22,2);


const maxInArray = Math.max(...numbers)
console.log(max, maxInArray)

// numbers.push(55);
// console.log(numbers);

const numbers2 = [22, ...numbers, 44, 45,33 ];
numbers.push(55);
console.log(numbers2,)


// arrow function 
const name = (last , first) => last + first;

const name2 = last => last * 10;

const bigArrowFunc = (x,y) => {
    const first = x + y;
    const second = x -y;
    const diff = first - second;
    const result = diff * 10;
    const ouput = result / 5;
    return ouput;
}

console.log(bigArrowFunc(15, 20))

const numbers3 = [23,45,45,66,7,2,2233];
const min = Math.min(...numbers3)
console.log(min)