/**
 * Interface
 */
interface Animal {
    name: string;
    age: number;
    jump(): string; // 함수 시그니처 선언과 유사
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // 인터페이스 구성 요소외 멤버변수(프로퍼티), 멤버함수(메소드) 선언도 가능? 
    dance() {

    }
}

// let ori = new Dog('오리', 3); // 37줄 'ori' 마우스오버시 'Dog' 타입 표시 => 이미 'Dog'타입으로 확정
let ori: any = new Dog('오리', 3); // 37줄 'ori' 마우스오버시 'Animal' 타입 표시

function instanceOfAnimal(object: any): object is Animal {
    return 'jump' in object; // 어떤 객체에서 해당 키 존재 유무 확인시 'in' 키워드 사용
}

if (instanceOfAnimal(ori)) {
    ori;
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
    legsCount: number;
    bark(): void
}

class Cat implements Animal, Pet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

type AnimalAndPet = Animal & Pet; // 다중인터페이스를 type으로 결합

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // Pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    // Aniaml
    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    // Pet
    bark(): void {
        console.log('냐옹');
    }
}

interface WrongInterface1 {
    name: string | number;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2{
// name: number;
// name: number | string;
// }

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 생성자 타입을 설정할 때?, Generic에서 다시 사용한다고 함
interface IdolConstructor {
    new (name: string, age: number): Idol; // 일반 함수 시그니처와 다르게 생성자(constructor) 타입은 'new'를 붙임?
}

function createIdol(constructor: IdolConstructor, name: string, age: number) {
    // return new Idol(name, age); // 아래 코드와 동일
    return new constructor(name, age);
}

console.log(createIdol(Idol, '아이유', 32));
