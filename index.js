// Write your solution here!
const cats = [];
cats.push('Milo','Otis','Garfield');

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function  destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}

function appendCat(name){
    let copyCats = [...cats,name]
    return copyCats;
}

function prependCat(name){
    let copyOfCats = [name,...cats];
    return copyOfCats;
}

function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat(){
    let NewCopyCats = [...cats];
    NewCopyCats.shift();
    return NewCopyCats;
}





