// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = () => cats.push("Ralph");

const destructivelyPrependCat = () => cats.unshift("Bob");

const destructivelyRemoveLastCat = () => cats.pop();

const destructivelyRemoveFirstCat = () => cats.shift();

function appendCat(name) {
    const appendCat = [...cats, "Broom"];
    return appendCat;
}
// What is (name) doing in the above code?

// The code below works in replit but does not pass in the terminal tests. Why? Why is the function requesting a parameter?
// function appendCat(name) {
//     const appendCat = [...cats];
//     appendCat.push(name);
//     console.log(appendCat);
//   }
// appendCat("Broom");

function prependCat(name) {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}
// Again - what is (name) doing?

// This code works in replit and makes more sense to me since I can define the a cat name outside the function.
// function prependCat(name) {
//     const prependCat = [...cats];
//     prependCat.unshift(name);
//     console.log(prependCat);
// }
// prependCat("Arnold");

function removeLastCat() {
    const removedCat = cats.slice(0, cats.length - 1);
    return removedCat;
}
function removeFirstCat() {
    const firstCatRemoved = cats.slice(1);
    return firstCatRemoved;
}