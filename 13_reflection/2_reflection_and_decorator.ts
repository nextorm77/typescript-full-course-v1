/**
 * Reflection and Decorator
 */

// 1. experimental decorator 기능 사용 설정 => TS 기능 => 빌드 타입 작동?
// tsconfig.json 내 아래 설정을 추가
// "compilerOptions": {
//     ...
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true,
//     ...
// }

// 2. Reflection 기능 사용 설정 => JS 기능 => 런타임 작동?
// 사전 패키지 설치 필요
// --save-dev => package.json에 기록하고 개발할 때만 포함해라.
// npm install --save-dev reflect-metadata

// 코드 이해 순서
// 1. "RestrictParamValue 파라메터 데코레이터"만 먼저 실행 분석 후 
// 2. "ValidateMethod 메소드 데코레이터" 실행 분석

// 특이한 import 방식?
import 'reflect-metadata';

const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T> {
  index: number; // Method Parameter 배열(args)의 index
  restrictedValues: T[];
}

// 해당 데코레이터가 선언된 클래스 선언만으로 최초 1회 호출?
// 데코레이터 함수는 타 함수와 분별하기 위해 함수명이 대문자로 시작?
// Parameter Decorator
function RestrictParamValue<T>(restrictedValues: T[]) {
  // 함수 리팩토링?
  // target은 여기서 "Idol 클래스"가 아닌 "Idol.prototype"
  return (target: any, propertyKey: string, index: number) => {
    // 기존 배열 가져오기
    // 고정된 T가 아닌 다양한 타입이 혼재할 수 있어서 any?
    const prevMeta: RestrictionInfo<any>[] =
      Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? []; // ??: Nullish coalescing operator

    // 신규 배열 요소 생성
    // 상단 언급 제네릭 T를 활용
    const info: RestrictionInfo<T> = {
      index,
      restrictedValues,
    };

    // 기존 배열 + 신규 배열 요소
    Reflect.defineMetadata(
      restrictParamValueKey,
      [...prevMeta, info],
      target,
      propertyKey,
    );

    console.log(
      Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey),
    );
  };
}

// 해당 데코레이터가 선언된 클래스 선언만으로 최초 1회 호출?
// Method Decorator
function ValidateMethod(
  target: any,
  propertyKey: string,
  descripter: PropertyDescriptor,
) {
  const metas: RestrictionInfo<any>[] =
    Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

  const original = descripter.value;

  // 화살표 함수는 최신 기법(자신만의 this 생성X)이어서
  // descripter.value(구 문법?)와 호환X?
  // 실행시 작동 코드
  descripter.value = function (...args: any[]) {
    const invalids = metas.filter(
      (x) => !x.restrictedValues.includes(args[x.index]),
    );

    if (invalids.length > 0) {
      throw Error(
        `잘못된 값입니다. ${invalids.map((x) => args[x.index]).join(', ')}`,
      );
    }
    // this는 original 객체 자신?
    return original.apply(this, args);
  };
  //  console.log('메소드 데코레이터 선언');
}

class Idol {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @ValidateMethod
  sing(
    @RestrictParamValue(['신나게', '열정적으로']) style: string,
    @RestrictParamValue([1, 2, 3]) ranking: number,
  ) {
    return `${this.name}이(가) ${style} 노래를 부릅니다.`;
  }
}
// 콘솔 출력 내용
// [ { index: 1, restrictedValues: [ 1, 2, 3 ] } ]
// [
//   { index: 1, restrictedValues: [ 1, 2, 3 ] },
//   { index: 0, restrictedValues: [ '신나게', '열정적으로' ] }
// ]

@Injectable()
export class AppService {
  getHello(): string {
    // const yuju = new Idol('유주', 27);
    console.log('--- sing ---');
    // console.log(yuju.sing('신나게', 1));
    // console.log(yuju.sing('열정적으로', 2));
    // console.log(yuju.sing('기분나쁘게', 4));
    return 'Hello World';
  }
}
