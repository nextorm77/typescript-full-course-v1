/**
 * Type Predicate
 */

// input is number => 논리적으로 명확(input is number한 코드에서 input 위로 마우스오버시 number로 표시
function isNumber(input: any): input is number{
    return typeof input === 'number';
}

console.log(isNumber(10));

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
}

let number: any = 5;

if(isNumberRetBool(number)){
    number; // 마우스오버시 any로 표시
}

if(isNumber(number)){
    number; // 마우스오버시 input으로 표시
}

interface Doge{
    name: string;
    age: number;
}

interface Cat{
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이'
}

if(isDoge(doge)){
    doge;
}else{
    doge;
}
