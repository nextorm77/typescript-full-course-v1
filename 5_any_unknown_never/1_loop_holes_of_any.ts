/**
 * Loopholes of Any
 */
let number: number;
number = 10;

// number.toUpperCase(); // 문법오류

// (number as any).toUpperCase(); // 문법오류X

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2); // any는 문법오류X
// multiplyTwo('코드팩토리', true); // 문법오류

let iu:any = {name: '아이유', age: 30};
iu; // 프로퍼티 자동완성 기능도 불가능

const callbackRunner = (x: number, y: number, callback: any)=>{
    return callback(x);
}

const callback = (x:number, y: number)=>{
    return x * y;
}

// any 타입 개선 start => 강의 내용에는 없음
interface callbackType {
    (x: number): number;
  }

type callbackType2 = (x: number) => number;

const callbackRunner = (x: number, y: number, callback: callbackType2) => {
return callback(x);
};

const callback = (x: number, y: number) => x * y;
const callback2 = (x: number) => x * x;
// any 타입 개선 end

console.log(callbackRunner(5, 4, callback));
