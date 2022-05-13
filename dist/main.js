var a = "1"; // constant
var text = "asd"; // can use like that same let text = "asd";
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
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
console.log(getFullName("ali", "yilmaz"));
