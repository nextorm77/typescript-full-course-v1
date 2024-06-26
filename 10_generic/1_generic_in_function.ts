/**
 * Generic 함수에서 사용하기
 */

// 어떤 타입의 인수도 받을 수 있는 함수
function whatValue(value: any) {
    return value;
}

const value = whatValue('test'); // value 타입은 any로 표시

// 리턴 타입은 명시하지 않아도 T타입으로 유추
function genericWhatValue<T>(value: T): T {
    return value;
}

// const VS let
// 이 영역에서 논할 내용은 아니지만
// const 변수는 리터럴하게 타입 결정, but let 변수는 보다 범용적인 타입으로 자동 결정, 단 <제너릭>표시 안했을 경우
// 예시) '123' => const: '123', let: string
const genericResult1 = genericWhatValue<number>(123);

let genericResult2 = genericWhatValue('123') // <제네릭> 표시안해도 정상작동

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}

const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);

const multipleGenericResult2 = multipleGenerics(
    123,
    true,
    '123',
);

function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const; // 50줄의 'tuple' 타입: readonly [boolean, number]
    // return [val1, val2]; // 50줄의 'tuple' 타입: (number | boolean)[]
}

const tuple = getTuple(true, 100);

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

// 클래스 강의에서 interface로 생성자 타입 설정한 것을 Generic으로 일반화해서 설정해본다.
// 참고 코드
// interface IdolConstructor {
//     new (name: string, age: number): Idol; // 일반 함수 시그니처와 다르게 생성자(constructor) 타입은 'new'를 붙임?
// }
//
// function createIdol(constructor: IdolConstructor, name: string, age: number) {
//     // return new Idol(name, age); // 아래 코드와 동일
//     return new constructor(name, age);
// }
//
// console.log(createIdol(Idol, '아이유', 32));

// 표현식이 난해하지만, 실제 필드에서 많이 쓴다고 함.
// 여기서 T는 생성자를 표현하는 타입
// extends는 클래스 확장 키워드를 의미
// new(...args: any[]): {} => 객체(인스턴스:{})를 반환하는 생성자 표현식
function instantiator<T extends { new(...args: any[]): {} }>(constructor: T,
    ...args: any[]) {
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111)); // 생성자 인수의 타입체크가 안된다
