/**
 * Reflection and Decorator
 */
// 데코레이터 실행 환경 편의를 위해
// nest.js 프레임워크에서 실행

// 특이한 import 방식?
import 'reflect-metadata';

const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T> {
  index: number; // 함수 인수 배열(args)의 index와 일치
  restrictedValues: T[];
}

// 해당 데코레이터가 선언된 클래스 선언만으로 최초 1회 호출?
function RestrictParamValue<T>(restrictedValues: T[]) {
  // 함수 리팩토링?
  return (target: any, propertyKey: string, index: number) => {
    // 기존 배열 가져오기
    // 고정된 T가 아닌 다양한 타입이 혼재할 수 있어서 any?
    const prevMeta: RestrictionInfo<any>[] =
      Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];

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
  descripter.value = function (...args: any) {
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
