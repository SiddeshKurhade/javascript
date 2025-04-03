console.log("Siddesh")

//Const Variable
//wihout changable
const accountId = 23;

//let variable

let accountEmail ="siddhu@gmail.com";

//var variable
var accountPassword = "1234"

//when we not declare anything then it will "undefined"
let accountState;
accountCity = "Pune"

console.log("Before Update ====================>")

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


// accountId=23         // => it gives an error because it is constant


accountEmail ="ss@gmail.com"
accountPassword="2222"
accountCity="Mumbai"
// console.log(accountEmail);

console.log("After Update ====================>")

//table()=> is used to show the variable in tabular form with indexing
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])








//let & var
// The let and var keywords in JavaScript are both used to declare variables,but they have key differences in scope, hoisting, and re-declaration:

//var: Function-scoped – It is only limited to the function in which it is declared.
// let: Block-scoped – It is confined to the block {} in which it is declared.


//Example of var
function testVar() {
    if (true) {
        var a = 10;
    }
    console.log(a); // ✅ Works, because var is function-scoped
}
testVar();


//Example of let
// function testLet() {
//     if (true) {
//         let b = 20;
//     }
//     console.log(b); // ❌ Error! b is not defined outside the block
// }
// testLet();



//In JS used const & let in our projects