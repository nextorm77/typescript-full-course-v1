/**
 * Exclude Type
 */

type NoString = Exclude<string | boolean | number, string>;
// type NoString = boolean | number; // 위 코드와 동일

type NoFunction = Exclude<string | (() => void), Function>; // '() => void' 양쪽에 반드시 괄호 필요
// type NoFunction = string; // 위 코드와 동일
