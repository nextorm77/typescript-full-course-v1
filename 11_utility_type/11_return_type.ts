/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<()=> number>;
// type ReturnTypeSample = number; // 결과

type FunctionSign = (x: number, y: number) => number;

type ReturnType2 = ReturnType<FunctionSign>;
// type ReturnType2 = number; // 결과
