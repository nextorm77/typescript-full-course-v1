/**
 * Parameter Type
 */

function sampleFunction(x: number, y: string, z: boolean){

}

type Params = Parameters<typeof sampleFunction>;
// type Params = [x: number, y:string, z:boolean]; // 위 코드와 동일
type Params2 = Parameters<(one: number) => void>;
// type Params2 = [one: number]; // 위 코드와 동일
