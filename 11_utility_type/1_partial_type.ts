/**
 * Partial Type
 */
interface Idol{
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName: '아이브',
}

function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
    // 프로퍼티 중복 발생시 맨 나중에 열거한 프로퍼티만 인정
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {
    age: 27,
    name: '코드팩토리',
    groupName: '주식회사 코드팩토리',
}));
