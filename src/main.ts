// Generics 

// function getFirstElement(array: number[]) {
//     return array[0];
// }

function getFirstElement<T>(array: T[]) {
    return array[0];
}

const numArr = [10, 20, 30];
const firstNum = getFirstElement(numArr);
console.log(firstNum);

const strArr = ["a", "b", "c"]
const firsStr = getFirstElement(strArr);
console.log(firsStr);

const username = document.querySelector<HTMLInputElement>("#username")
console.log(username?.placeholder);
 

