/**
 * Tuple: JS에는 존재하지 않은 개념
 */

// 0번째: number, 1번째: string 강제함, 구성요소도 2개만=>빌드타임에서만
let numberAndStringTuple: [number, string] = [
    23,
    '코드팩토리',
]

numberAndStringTuple.push('아이유'); // 하지만, 이 코드는 빌드타임 오류X
console.log(numberAndStringTuple); // [ 23, '코드팩토리', '아이유' ] => 튜플에서 강제한 부분이 깨져서 아래 코드에서 보완

// readonly는 push 사용을 막아줌
let unmodifiableTuple: readonly [number, string] = [
    23,
    '코드팩토리',
]

// unmodifiableTuple.push(); // 오류 발생

/**
 * Tuple 유추하기
 */
let actresses = ['김고은', '박소담', '전여빈'];

let actressesTuple = ['김고은', '박소담', '전여빈'] as const; // as const 는 좀더 구체적인 타입(readonly ['김고은', '박소담', '전여빈'])으로 유추
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const; // const로 선언해도 위 코드와 동일한 타입으로 유추

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
]

/**
 * Named Tuple
 * => 아래 name, age는 기능적인 용도X, 타입에 대한 의미 부여만?
 */
const namedTuple: [name: string, age: number] = [
    '코드팩토리',
    32,
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1; // 오류
// let tuple4: [number, number, number] = tuple2; // 오류

let tuple5: [number, number] = tuple2; // 같은 타입이라 정

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = [
    '장원영',
    '안유진',
]

let stringArr: string[] = ive; // 작은 범위([string, string])를 큰 범위(string[])에 할당 가능

// let ive2: [string, string] = stringArr; // [string, string] < string[]

/**
 * Multi Dimesional Tuple
 */
const tuple2D : [string, number][] = [
    ['코드팩토리', 32],
    ['아이유', 31],
    ['김고은', 30],
]
