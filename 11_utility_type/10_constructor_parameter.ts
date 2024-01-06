/**
 * Constructor Parameter
 */
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

type ConstructorParamType = ConstructorParameters<typeof Idol>;
// type ConstructorParamType = [name: string, age: number]; // 위 코드와 동일, 결과값은 Named Tuple?
