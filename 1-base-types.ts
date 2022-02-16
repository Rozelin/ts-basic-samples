// compile TS => tsc filename.ts
// run compiled JS => node filename.js

// Boolean
const boolValue1: boolean = true
const boolValue2: boolean = false

// Number
const decimal: number = 23
const integer: number = 2.3
const hex: number = 0xf00d
const big: number = 5e10

// String
const str1: string = 'Name'

// Array
const numbers1: number[] = [1, 2, 3, 4, 5]
const numbers2: Array<number> = [1, 2, 3, 4, 5] // Generic type

const strings1: string[] = ['hello', 'buddy']
const strings2: Array<string> = ['hello', 'buddy'] // Generic type

// Tuple
const tupleData: [string, number] = ['Harry', 23]

let x: [string, number]
x = ['hello', 11]
// x = [11, 'hello']  // Error => type 'string' not assignable to type 'number'

// Any
// Allows to reassign any value to a let
let anyVariable: any = 42
    anyVariable = 'name'
    anyVariable = {}

// Allows to set any types into array
const mixedArray: Array<any> = ['name', true, 123, { age: 43 }]

// Any with tuple
let y: [any, any]
y = [true, false]

// Void => when function return nothing, it's type - void
function sayName(name: string): void {
    console.log(name)
}

// Never => used if function never returns a value
// Throw an error case
function pushError(message: string): never {
    throw new Error('Push an error')
}

// Endless loop case
function endlessLoop(message: string): never {
    while (true) {
        console.log(true)
    }
}

// Type => custom type
type Login = string
const login: Login = 'admin'
// const login2: Login = 4 // an error

type ID = string | number
const id1: ID = 123
const id2: ID = 'uUIYIuyi'
// const id3: ID = true // an error

// Object type
const user: {name: string, age: number} = {
    name: 'Ihor',
    age: 34,
}
// OR
type User = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string
}
const user1: User = {
    name: 'Ihor',
    age: 34,
    getPass(): string {
        return `${this.name}${this.age}`
    }
}

const user2: User = {
    name: 'Ihor',
    age: 34,
    nickName: 'Sally'
}

// Null | undefined
type AnyValue = string | null | undefined

// Javascript
// typeof null // "object"
// typeof undefined // "undefined"

// Typescript
const u: undefined = undefined
const n: null = null
