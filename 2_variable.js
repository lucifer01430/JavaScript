const accountId = 1430 // const is a constant variable jisko ek baar set krne ke baad change ni kar skte ye poore program me constant hi rhta hai

//JavaScript me let and var two type se varibale ko declear kr skte hai  
let accountEmail = "harsh@google.com" 
var accountPassword = "1234"
accountCity = "Barabanki" //JavaScript me Directly variable ko bina kisi keyword se bhi define kr skte hai jo ki global scope me kaam karta hai and ye kisi bhi function ke andar use ho skta hai but ye koi professional way nahi hai kyunki isse samajhne me dikkat hoti hai ki ye variable kis function ke andar use ho raha hai

let accountState; // ye variable ko declare kiya gaya hai but isse koi value nahi di gayi hai isliye ye undefined hoga jab hum isko run krenge to ye undefined show krega


// accountId = 3  // not acceptable and ye erro show krega because humne accountId ko const se define kiya hai upper line 1 me 


// ye sabhi variables ko print krega ek line me but ye kuch khaas professional nahi lagta hai kyuki ye ek line me sabhi variables ko print krne ke liye alag alag variable ko comma se separate kiya gaya hai
console.log(accountId, accountEmail, accountPassword, accountCity) 


accountEmail = "test@gmail.com" // ye acceptable hai kyuki humne accountEmail ko let se define kiya hai jo ki change ho skta hai`
accountPassword = "7845" // ye bhi acceptable hai kyuki humne accountPassword ko var se define kiya hai jo ki change ho skta hai
accountCity = "Lucknow" // ye bhi acceptable hai kyuki humne accountCity ko bina kisi keyword se define kiya hai jo ki change ho skta hai

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // ye sabhi variables ko table format me print krega and isme sabhi bvariable ko ek saath print krne ke liye arry format me de skte hai isme ek side me variable ki index value show hoti hai and dusri side me variable ki value show hoti hai


//In Javascript {}--> Braces are named as scope
//In Javascript []--> Brackets are named as array
//In Javascript ()--> Parenthesis are named as function
//In Javascript <>--> Angle Brackets are named as HTML tags
//In Javascript //--> Double Slash is used for single line comment
//In Javascript /* */--> Slash Star is used for multi line comment
/*   
var keyword is used to declare a variable in JavaScript. But in present me ye mostly kam use hota hai kyuki ye function scope me kaam karta hai and ye ho skta hai ki kisi dusre function me bhi use ho raha ho.

So basically let and const are the two keywords that are used to declare a variable in JavaScript.
let keyword is used to declare a variable in JavaScript. It is block scoped, which means it is only accessible within the block it is defined in. It can be reassigned a new value.
const keyword is used to declare a constant variable in JavaScript. It is also block scoped, which means it is only accessible within the block it is defined in. It cannot be reassigned a new value.

*/





