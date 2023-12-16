/**
 * Type vs Interface
 */

// Object 선언할때
interface IObject {
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y: number;
}

// function을 선언할때
interface IFunction {
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
    height: number;
}

interface IRectangle {
    width: number;
}

let rectangle: IRectangle = {
    height: 200,
    width: 100,
}

// type TRectangle = {
//     height: number;
// }

// type TRectangle = {
//     width: number;
// }

/**
 * Interface Merging
 */
// interface, class 모두 객체 구현 전단계?
// class는 구현까지, interface는 타입정의까지?
class Review {
    // 프로퍼티
    getY = (x: number) => { return x };

    // 메서드
    getX(x: number) {
        return x;
    }
}

// 프로퍼티
interface GetXnY {
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY {
    getX: (x: number) => number;
    // getY: (y: string) => number; // 프로퍼티는 동일 형식 중복 또는 추가 가능, 그외 불가?
}

// 메소드
interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number; // 메소드 오버라이딩?
}

const testMethod: GetXnY2 = {
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}
