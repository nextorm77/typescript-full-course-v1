/**
 * Required Type
 * 옵션 프로퍼티도 필수 프로퍼티로 만듦?
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Required<Dog> = {
    name: '모찌',
    age: 7,
    country: '한국'
}
