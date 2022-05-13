const a = "1"; // constant
let text: string = "asd"; // can use like that same let text = "asd";
text = "asddd";

console.log("aaa", a);

//tsc main.ts 
//tsc main.ts -w for watching

// after the tsconfig.json rootDir= src
// we dont use main.ts 
// just use tsc -w 

//--------functions------
/* can use like that but wat if we give true or [] 
const getFullName = (name,surname) =>{
    return name+ ' '+ surname;
}
console.log(getFullName(true, ["asd"]));
*/
const getFullName = (name: string, surname: string): string =>{
    return name+ ' ' + surname;
}
console.log(getFullName("ali","yilmaz"));