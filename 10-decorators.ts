/* Class decorator */
const logClass = (constructor: Function) => {
    console.log(constructor);
}

/* Property decorator */
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);
}

/* Method decorator */
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    console.log(propertyKey);
}


@logClass
class User {

    @logProperty
    secret: number;

    constructor(public name: string, public age: number) {}

    @logMethod
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

