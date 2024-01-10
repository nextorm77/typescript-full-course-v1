/**
 * Infer Keyword
 * 
 * 추론한다
 * 
 * (Inferring Type in Conditional Type)
 * 
 * Infer Keyword는 Conditional Type에서만 사용 가능한 키워드다.
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번 더 추론하는 역할을한다.
 */

// 1) 가장 많이 사용하는 예제
// Flattening -> Array를 벗겨낼때
// string[] -> string
// string[][] -> string[]

// 이해 1단계(예를 들어 string인 경우)
type Flatten1<Type> = Type extends Array<string> ? string : Type;
type StringArray1 = Flatten1<string[]>; // stirng 일 경우만 적용
type NumberArray1 = Flatten1<number[]>; // 다른 타입은 적용 불가

// 이해 2단계(infer 키워드 미사용)
type Flatten2<Type, ElementType> = Type extends Array<ElementType>
  ? ElementType
  : Type;
type StringArray2 = Flatten2<string[], string>; // 오히려 사람이 하는 코딩량만 늘어남
type NumberArray2 = Flatten2<number[], number>;

// 최종 이해 단계(infer 키워드 사용)
// infer ElementType => ElementType으로 추론하라
type Flatten3<Type> = Type extends Array<infer ElementType>
  ? ElementType
  : Type;
type Flatten4<Type> = Type extends (infer ElementType)[] ? ElementType : Type; // Flatten3와 동일
type StringArray3 = Flatten3<string[]>;
type NumberArray3 = Flatten3<number[]>;
type TwoDArray = Flatten3<boolean[][]>;
type TwoDArray2 = Flatten4<boolean[][]>;

// 2) Return Type 추론
// 이해 1단계(string 경우)
type InferReturnType1<Type> = Type extends (...args: any[]) => string
  ? string
  : Type;
type StringFunc1 = InferReturnType1<() => string>;
type NumberFunc1 = InferReturnType1<() => number>;

// 이해 2단계 => flatten과 동일 => 설명 생략

// 최종 이해 단계
type InferReturnType3<Type> = Type extends (...args: any[]) => infer ElementType
  ? ElementType
  : Type;
type StringFunc3 = InferReturnType3<() => string>;
type NumberFunc3 = InferReturnType3<() => number>;
