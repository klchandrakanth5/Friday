// Var is a Functional scope example
// Function Scope
// Definition: Function scope means a variable can be accessed only inside the function where it is declared.
var name = "Ram"; 
{ 
    var name = "Kumar";
    console.log(name);
}
console.log(name);

//    Block scope 
//Block Scope
//Definition: Block scope means a variable can be accessed only inside the block { } where it is declared.

// let is a Block scope and here first nested value exicute first and then gloabal one 
let name1 = "Ram1";  //global value
{
    let name1 = "sham"; //Nested value
    console.log(name1);
}
console.log(name1);

// Const is also block scope
const num = 12;
{
    const num=13;
    console.log(num);
}
console.log(num);