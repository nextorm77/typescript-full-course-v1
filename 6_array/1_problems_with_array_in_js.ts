/**
 * Problems with Array in JS
 */
const number = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2', '3'];

// strings.push(1); // 오류

let stringsOrNumbersArray: (string | number)[] = [
    1,
    '2',
    3,
    '4',
]

let stringArrNumberArr: string[] | number[] = [
    1,
    2,
    3,
]

stringArrNumberArr = [
    '1', '2', '3',
]

let stringOrNumberArr: string | number[] = [
    1, 2, 3
]

stringOrNumberArr = '3';

let boolsArr = [true, false, true];

boolsArr.push(false);

// boolsArr.push(1); // 오류

const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for(let i = 0; i < onlyString.length; i++){
    let item = onlyString[i]; // item은 string 타입으로 잘 유추됨
}

for(let item of onlyNumbers){ // item은 number 타입으로 잘 유추됨

}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[9999]; // 불가능하지만 number4는 number타입으로 유추, TypeScript는 인덱스의 길이를 고려X
