/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

const testName: TName = iu; // 좌변이 동일한(속성명, 타입 일치) 속성이 1개 이상이면 정상
const testAge: TAge = iu; // 좌변이 동일한(속성명, 타입 일치) 속성이 1개 이상이면 정상
