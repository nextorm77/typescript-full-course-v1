/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue; // 정상
// let unknownType: unknown = anyValue; // 정상
// let booleanType: boolean = anyValue; // 정상
// let arrayType: string[] = anyValue; // 정상    
// let objectType: {} = anyValue; // 정상, 개인적으로 객체 타입 선언 특이함.
// let nullType: null = anyValue; // 정상
// let undefinedType: undefined = anyValue; // 정상

// let anyType: any = unknownValue; // 정상
// let unknownType: unknown = unknownValue; // 정상
// let booleanType: boolean = unknownValue; // 오류, 타입 불일치
// let arrayType: string[] = unknownValue; // 오류, 타입 불일치
// let objectType: {} = unknownValue; // 오류, 타입 불일치
// let nullType: null = unknownValue; // 오류, 타입 불일치
// let undefinedType: undefined = unknownValue; // 오류, 타입 불일치

// any 타입은 기본적으로 아래(3줄) 코드 정상 판단
anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknown 타입은 기본적으로 아래(3줄) 코드 비정상 판단
// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown) : target is string{
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
    testVal;
}

/**
 * Union Type
 */
type uOrString = unknown | string; // 최종타입: unknown
type uOrBoolean = unknown | boolean; // 최종타입: unknown
type uOrNumber = unknown | number; // 최종타입: unknown
type uOrAny = unknown | any; // 최종타입: any, any안에 unknown 포함(?)
type anyOrU = any | unknown; // 최종타입: any, any안에 unknown 포함(?)

/**
 * Intersection Type
 */
type uAndString = unknown & string; // 최종타입: string
type uAndBoolean = unknown & boolean; // 최종타입: boolean
type uAndNumber = unknown & number; // 최종타입: number
type uAndAny = unknown & any; // 최종타입: any, any안에 unknown 포함(?)
type anyAndU = any & unknown; // 최종타입: any, any안에 unknown 포함(?)

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// 아래(4줄) 코드는 오류 발생, unkown 타입이라 계산 성립 불가(?)
// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

// 아래 연산자만 허용, 이유는 강의에 설명x
number1 === number2;
number1 == number2; // 타입을 제외하고 같은 지
number1 !== number2;
number1 != number2; // 타입을 제외하고 다른 지
