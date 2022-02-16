const arrayOfNums: Array<number> = [1, 2, 3, 4, 5]
const arrayOfStrings: Array<string> = ['1', '2', '3', '4', '5']

// Generic <T> type => dynamically adjustable type
function reverse<T>(array:T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNums)
reverse(arrayOfStrings)


// ES6 syntax:
const getter = <T>(data: T): T => data;

// ES5 syntax:
 function getter1<T>(data: T): T {
     return data;
 }

 // name and age may be of same type, or of different
 class User<T, K> {
     constructor(public name: T, public age: K) {}

     public getPass(): string {
         return `${this.age}${this.name}`;
     }
 }

// name can be of any type, and age only of type number
class User2<T, K extends number> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.age}${this.name}`;
    }
}
