// tsconfig.json 내 아래 설정을 추가해야 experimental decorator 기능 사용 가능
// "compilerOptions": {
//     ...
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true,
//     ...
// }

/**
 * Class Decorator => 클래스 선언을 읽어들일 때 한번만 실행, 해당 클래스로 객체 생성시 실행X
 */
@Test
@Frozen
@LogTest('PROD') // 인수를 전달하는 방법: '함수명()'=>실행하고 인수가 전달된 데코레이터 함수를 남김? 
@ChangeClass // 이런 함수를 사용할 일은 별로 없다고 함. => Skip해도 됨?
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function) {
    console.log(constructor);
}

function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유진', 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory => 인수를 받을 수 있음
function LogTest(env: string) {
    return function (constructor: Function) {
        console.log(`[${env}] ${constructor}가 실행됐습니다.`);
    }
}

console.log('-----------------------');

const wonYoung = new Idol('장원영', 22); // 데코레이터 실행 X
console.log(wonYoung);

// T: 인스터스화 할 수 있는 constructor?
function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor{
        groupName = '아이브';

        constructor(...params: any[]){
            super(...params);

            console.log('constructor instantiated');
        }
    }
}
