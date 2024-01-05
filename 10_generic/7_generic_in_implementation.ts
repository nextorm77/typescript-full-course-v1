/**
 * Generic in Implementation
 */

interface Singer<T, V> {
    name: T;
    sing(year: V): void;
}

// 클래스 선언시 Generic 타입 결정
class Idol implements Singer<string, number> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sing(year: number): void {
        console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
    }
}

const yuJin = new Idol('안유진');
yuJin.sing(2003);

// 인스턴스 생성시 Generic 타입 결정
class Idol2<T, V> implements Singer<T, V> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }

    sing(year: V): void {
        console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
    }
}

const wonYoung = new Idol2<string, number>('장원영');
wonYoung.sing(2003);
