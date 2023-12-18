/**
 * Extension
 */
interface IName{
    name: string;
}

interface IIdol extends IName{
    age: number;
}

const idol: IIdol = {
    name: '안유진',
    age: 23,
}

type TName = {
    name: string;
}

type TIdol = TName & {
    age: number
};

const idol2: TIdol = {
    name: '아이유',
    age: 29,
}

interface IIdol2 extends TName{
    age: number;
}

const idol3: IIdol2 = {
    name: '제니',
    age: 29,
}

type TIdol2 = IName & {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 31,
}

/**
 * extending multiple
 */
type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed: 'Poodl',
}

interface CatName{
    name: string;
}
interface CatAge{
    age: number;
}
interface Cat extends CatName, CatAge{
    breed: string;
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed: '코리안 냥냥이',
}

/**
 * Overrding
 */
type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string;
    width: number;
}

// const rectangle: TRectangle = {
//     height:, // never 타입(number 이면서 string인 경우?)으로 어떤 값도 입력 불가
//     width: 100,
// }

type TWidth = {
    width: number | string;
}
type TRectangle2 = TWidth & {
    width: number;
    height: number;
}

const rectangle: TRectangle2 = {
    height: 100, 
    width: 200, // number | string 이면서 number인 것은 number
}

interface IHeight{
    height: number;
}

// interface IRectangle extends IHeight{
//     height: string; // interface에선 프로퍼티 overriding 불가능(논리적 모순인 경우만?) => 문법 오류 발생, 바로 앞 섹션의 동일 interface 중복 확장(?)은 논리적 모순 유무 상관없이 문법 오류 발생
//     width: number;
// }

interface IWidth{
    width: number | string;
}

interface IRectangle extends IWidth{
    width: number; // number | string 이면서 number 인 것은 number => 논리적 모순인 아닌 경우는 프로퍼티 overriding 가능?
    height: number;
}
