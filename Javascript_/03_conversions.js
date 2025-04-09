// let score = 33;//here we know the number we get as number datatype

// console.log(typeof score)
// console.log(typeof(score))

//but in some case it gets in string formate
// let num = "22";
// console.log(typeof num)   //datatype is string
// let valueInNumber = Number(num)  //here converts string to number 
// console.log(typeof valueInNumber);


// let a = "23SSS";
// let value=Number(a)
// console.log(value)         //it prints NaN(Not a Number)
// console.log(typeof value)


// let temp =null
// let getNum = Number(temp)
// console.log(getNum)             //it returns 0

// let s = true;
// let val = Number(s)
// console.log(val)       //here 1 is printed , if false is converted to number it gets 0 output

//NOTE-   
//"33" => 33
//"33aa" => NaN
// true  => 1 , false => 0



// let isLoggedIn =1
// let isLoggedOff=0
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// let booleanIsLoggedOff =Boolean(isLoggedOff)
// console.log(booleanIsLoggedIn)    //return true
// console.log(booleanIsLoggedOff)   //return false

//1 => true
//0=>false


let number = 23
let stringNum = String(number);
console.log(stringNum)      //here return 23 as a string
console.log(typeof stringNum)