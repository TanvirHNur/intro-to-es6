// const and let 
// const will be used in 80-90% cases

const favName = 'rakib';
// favName = 'sakib';

const yourName = 'permanent name'

// defult parameters
function add(first, last='Mozumder'){
    return first + ' ' + last;
}


// template string 
const myPeople = `my lovly parson is ${yourName} and is ${add('sabbir')}. Sabbir, my name is jasim`
console.log(myPeople)