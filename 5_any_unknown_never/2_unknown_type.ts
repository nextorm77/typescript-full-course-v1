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

anyValue.toUpperCase();
anyValue.name;
new anyValue();

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
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;
type anyOrU = any | unknown;

/**
 * Intersection Type
 */
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;
type anyAndU = any & unknown;

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
