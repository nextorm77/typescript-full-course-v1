/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 2000)
    })
}

const runner = async function () {
    const res = await afterTwoSeconds(); // res: unkown 으로 표출 => 문맥상 string으로 표출되어야 함 => 이것을 아래 코드에서 개선
    console.log(res);
}

runner();

const afterOneSecond = function(): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })
}

const runner2 = async function () {
    const res = await afterOneSecond(); // res: string 으로 표출
    console.log(res);
}

runner2();

// runner3: () => Promise<string>
// async 키워드를 쓰기만 하면 비동기 함수가 없어도 Promise 타입을 반환하는 것으로 표출
const runner3 = async function(){
    return 'string return';
}
