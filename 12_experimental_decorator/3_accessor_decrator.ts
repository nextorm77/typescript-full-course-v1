/**
 * Accessor Decorator
 */
class Rectangle{
    #height: number; // '#'는 private 표시, JS엔진 버전이 높아야 문법 적용 가능? 
    #width: number;

    constructor(height: number, width: number){
        this.#height = height;
        this.#width = width;
    }

    @Configurable(false)
    get height(){
        return this.#height;
    }
    
    @Configurable(true)
    get width(){
        return this.#width;
    }
}

// method descriptor 에서 이미 배운 내용
function Configurable(configurable: boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.configurable = configurable;
    }
}

const rectangle = new Rectangle(100, 200);

console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));
