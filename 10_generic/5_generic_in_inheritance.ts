/**
 * Generic in Inheritance
 */
class BaseCache<T>{
    data: T[] = [];
}

class StringCache extends BaseCache<string>{ }

const stringCache = new StringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T>{
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */
interface BaseGeneric {
    name: string;
}

// Generic을 특정 구조가 포함되는 조건으로 강제
// 여기서는 name: string을 반드시 포함하는 객체
class Idol<T extends BaseGeneric>{
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

const yuJin = new Idol({
    name: '안유진',
    age: 23, // 추가 구조를 포함할 수 있다
});

/**
 * keyof 함께 사용하기
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

// Generic간의 조건, 관계 설정?
// A extends B: A를 B의 구조로 강제한다 => 강사의 설명
function objectParser<O, K extends keyof O>(obj: O, key: K) {
    return obj[key];
}

const val = objectParser(testObj, 'c');

/**
 * Ternary
 * 1=== 2 ? true : false
 */
class Idol2 {
    type?: string; // 초기화 코드를 생략하려고 옵션 설정?
}

class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}

class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol';
}

// 아래 코드를 나름 해석한 결과,
// Idol2를 충족하는 T타입이
// FemaleIdol를 충족하는 경우, type SpecificIdol = MaleIdol
// FemaleIdol를 충족하지 않은 경우, type SpecificIdol = FemaleIdol
type SpecificIdol<T extends Idol2> = T extends MaleIdol ?
    MaleIdol : FemaleIdol;

const idol2: SpecificIdol<MaleIdol> = new MaleIdol();
// const idol2: SpecificIdol<MaleIdol> = new FemaleIdol(); // 오류
