"use strict";   //treat all JS code as newer version

// alert("hello")   //we are using NodeJS , not browser

// let name = "siddesh";
// let age = 21;
// let isLoggedIn = true;

//Primitive DATA TYPES

//number ==> range -> 2^53 
//bigint
//string => ""
//boolean  => true & false
//null => standalone value
//undefined => if value is not declare
//symbol => find uniqueness in our project



//Object
// console.log(typeof("sidd"));
// console.log(typeof(33));
// console.log(typeof(null));       //=> null is a object
// console.log(typeof(undefined));  //=> it is a datatype 



// DATATYPE SUMMERY
//Primitive datatype-> total 7 types
//all are call by value
// String , Number , Boolean, null ,undefined ,Symbol(it is used for to make unique value),BigInt


//symbol ex=>
// const id = Symbol("20")
// console.log(id)




//Reference type(Non primitive) 
//Arrays , Objects ,Functions
//Basic ex->

//array
const fruits=["Apple","Mango","Orange"];


//object
let myObj ={ 
    name:"Siddesh",
    age:21,
}

//function
const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myObj)         //returns object
console.log(typeof fruits)        //returns object
console.log(typeof myFunction)    //returns function


 
