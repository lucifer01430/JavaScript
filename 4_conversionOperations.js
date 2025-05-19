//let score = 33; //declare and assign a variable
// but agar hum isse score ko "" me kre toh ye ek string ho jayea 

//let score = "33"; //declare and assign a variable

//let score = "33abc"; //declare and assign a variable

//let score = null; //jab hum null likhte hai toh ye ek object hota hai and iska output as a number 0 aata hai


//let score ; //Undefined lene pe bhi typeof me Undefined and number me NaN(Not a number) aata hai

//let score = true; //true lene pe bhi typeof me boolean and number me 1 aata hai

//let score =  false; //false lene pe bhi typeof me boolean and number me 0 aata hai

//let score = "Ram"  //string lene pe bhi typeof me string and number me NaN aata hai

/* so when 
"33" -> 33
 "33abc" -> NaN
 true ->1 and false -> 0

*/

//console.log(score); //log the variable to the console
//console.log(typeof score); //log the type of the variable to the console

//let valueInNumber = Number(score); //convert the string to a number

//console.log(typeof valueInNumber); //ab humne jo line 4 pe ek string likha tha wo yha ek number me convert ho gya hai
//console.log(valueInNumber); //ab yha pe jo score hai wo Nan ke format me aa gya hai jiska matlab hai not a number
//isliye humne yha pe ek string likha tha jo number me nahi convert ho paya -> 33abc






// let isLoggenIn = 1; //declare and assign a variable and check the type of the variable and shows True
// let isLoggenIn = 0; //declare and assign a variable and check the type of the variable and shows False
// let isLoggenIn = null; //declare and assign a variable and check the type of the variable and shows False
// let isLoggedIn ="" //declare and assign a variable and check the type of the variable and shows False
let isLoggedIn = "Harsh" //declare and assign a variable and check the type of the variable and shows True

let booleanIsLoggedIn = Boolean(isLoggedIn); //convert the number to a boolean

console.log(booleanIsLoggedIn); //log the boolean to the console

/* So when
1 -> true
0 -> false
null -> false
"" -> false
"Harsh" -> true

*/


