/**
 * Generic in Interface
 */
interface Cache<T> {
    data: T[];
    lastUpdate: Date;
}

// 당연한 얘기지만, interface에선 "<타입>" 표시 생략 불가?
const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

const cach2: Cache<number> = {
    data: [123, 456],
    lastUpdate: new Date(),
}

interface DefaultGeneric<T = string>{
    data:T[];
}

// "<타입>" 표시하지 않으면 string을 기본 타입으로 인식
const cache3: DefaultGeneric = {
    data: [123, 456], // 디폴트가 string 이므로 오류 발생
}
