/**
 * Multi Dimension Array
 */
/**
 * (1)
 * [1,2,3]
 * 
 * (2)
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ]
 * 
 * (3)
 * [
 *  [
 *    [1,2,3]
 *  ]
 * ]
 */

const numb2DArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
] // 타입(number[][]) 지정하지 않아도 해당 타입으로 유추

const str2DArr = [
    ['1', '2', '3'],
    ['4', '5', '6'],
] // string[][] 타입으로 유추

const strAndNumbArr: (number | string)[][] = [
    [1, '2', 3],
    ['4', 5, '6'],
] // 타입((number | string)[][]) 선언하지 않아도 해당 타입으로 유추

let strArrOrNumbArr: string[][] | number[][] = [
    [1, 2, 3],
    [4, 5, 6],
]

strArrOrNumbArr = [
    ['1', '2', '3'],
]

for(let arr of numb2DArr){
    for(let item of arr){
        
    }
}
