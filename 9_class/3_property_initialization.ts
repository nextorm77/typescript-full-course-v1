/**
 * Property Initialization
 */
class Person {
    // 일반적인 필수값 선언법
    name: string;
    // 초기값 제공 선언법
    age: number = 23;
    // optional 값 선언법
    pet?: string;
    // type of undefined 선언법
    petAge: number | undefined; // undefined가 없는 경우, 초기값 제공 또는 constructor에 명시 필요, 아니면 문법 오류

    constructor(name: string, pet?: string){
        this.name = name;
        this.pet = pet;
    }
}

class RouteStack{
    // TS가 인지하는 초기화(생성자 명시, 초기값 할당)가 아닌 다른 방식(여기에선 initialize함수 이용)으로
    // 프로퍼티 초기화를 보장하는 경우, TS에게 !(느낌표)로 인식시켜줌
    stack!: string[];

    constructor(){
        this.initialize();
    }

    initialize(){
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);
