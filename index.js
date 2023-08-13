// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat("simba");

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat("lofi");

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    return[...cats , name];
}
appendCat("simba");

function prependCat(name){
    return[name , ...cats];
}
prependCat(ralph);

function removeLastCat(){
    return cats.slice(0 , cats.length -1);
}
const newCats = removeLastCat();

function removeFirstCat(){
    return cats.slice(1);
}
 const newCat = removeFirstCat();