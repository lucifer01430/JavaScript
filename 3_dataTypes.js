"use strict"; //iska use krne se JavaScript ke sbhi code newer version me treat kiye jate h but ab update ane ke baad isko likhne ki jarurat nahi hai automatically sb kuch strict mode me chalta hai


//alert(3+3) 
/* ye ek function hai jo alert box me 3+3 ka result dikhata hai but node ke through run krne pe ye error show krega jbki direct kise webpage ke console me ye likhne pe 6 alert box me show krega because engine jo hai wo browser me hide hota hai and console k output browser me show hota h  and node me alert ko use krne k synaxt doosra hota h */

//console.log(3+3) // ye ek function hai jo console me 3+3 ka result dikhata hai and node ke through run krne pe ye 6 show krega because node me console ka output console me hi show hota h

// https://tc39.es/ecma262/ ----> this is the official documentation of JavaScript joki JS ki sabhi features ko define karta hai and Js ke features ko define karne wale log isko use karte h that means ki ye ek standard hai jispe sabhi log kaam karte h

let name = "sachin" //string
let age = 23 //number
let isStudent = true //boolean
let isStudent1 = false //boolean
let isStudent2 = null //null
let isStudent3 //undefined


//Data types in JavaScript

//Number -> 2 to powert 52 
//bigint -> for large numbers
//string -> "" Try to use in double quotes
//boolean -> true or false
//null -> reprentation of an empty value(Standalone value) like kise variable ko null assign karna
//undefined -> variable declared but not assigned
//symbol -> unique and immutable value or use to indicate the unique property of an object 
//object -> collection of key value pairs


console.log(typeof "sachin") //string
console.log(typeof 23) //number
console.log(typeof isStudent) //boolean
console.log(typeof isStudent1) //boolean
console.log(typeof isStudent2) //null
console.log(typeof isStudent3) //undefined
console.log(typeof BigInt(1234567890123456789012345678901234567890)) //bigint
console.log(typeof null) //object 
console.log(typeof undefined) //undefined

