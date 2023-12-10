/**
 * Intersection
 * 
 * And
 */
interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    address: '서울시'
};

type NumberAndString = number & string;

// next.js 환경에선 never 값 자체 대입시(아래 코드) 오류 발생
// let numberAndString: NumberAndString = never;
