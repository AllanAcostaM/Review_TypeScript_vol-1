// tipos de datos avanzados 


// Union:

let id: string | number = "plomo es lo que hay, plomo es lo que viene"
id = 12344;

type id = number | string;

let userId: id = "plomo es lo que hay, plomo es lo que viene!!!";

let myArr: (number | string | boolean) [] = [10, 20, 30];

myArr = [40, 50, "str1", "str2", true, false,]

// literal

type stateLoading = "loading";
type stateError = "error"

let stateloading: stateLoading = "loading";
let stateSecond: stateError = "error"; 


type state = stateLoading | stateError 

let state: state = "error";


type movie = {
    title: string;
    duration: number;
    finalContinue: boolean | string;
}

const esdla: movie = {
    title: "el señor de los anillos",
    duration: 240,
    finalContinue: "true",
}

// Interseccion

type book = {
    title: string,
    author: string,
    pages: number,
}

type bookAdaptation = movie & book;

const harryPotter: bookAdaptation = {
    title: "Harry Potter",
    author: "matarife",
    duration: 220,
    pages: 150,
    finalContinue: true
}

console.log(esdla);


console.log(harryPotter);


