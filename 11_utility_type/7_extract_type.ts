type StringOnly = Extract<string | boolean | number, string>;
// type stringOnly = string; // 위 코드와 동일

type FunctionOnly = Extract<string | (() => void), Function>;
// type FunctionOnly = () => void; // 위 코드와 동일
