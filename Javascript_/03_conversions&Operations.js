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


// let number = 23
// let stringNum = String(number);
// console.log(stringNum)      //here return 23 as a string
// console.log(typeof stringNum)









// ***********************************OPERATIONS************************************************

let value = 3;
let negValue = -value;
// console.log(negValue)   it returns -3

// console.log(2+2)
// console.log(3-1)
// console.log(2*3)
// console.log(2**3)  //2 power 3 
// console.log(2/4)
// console.log(3%4)


// let str1="hello"
// let str2= " Siddesh"
// let str3 = str1+str2
// console.log(str3)


//here we get problem when add int + string number
// console.log(1+"3")   //it returns 13
// console.log("1"+2+3) //it returns 123  , here first number is in string therefor all operation is in string
// console.log(1+2+"3")  //it returns 33     ,here first & second are int therefor it added 1+2 = 3 & then third number is string this will be concatinated with 3 i.e output is 33


console.log(+true)   //prints 1
console.log(+"")     //prints 0

// let num1,num2,num3
// num1= num2=num3 =2+2
// console.log(num1)   //prints 4
// console.log(num2)   //prints 4

let counter=100;
counter++;
console.log(counter)
console.log(++counter)
console.log(--counter)

