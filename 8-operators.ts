interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let myName: PersonKeys = 'name'
myName = 'age'
// myName = 'job' // Error - unacceptable key

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // UserKeysNoMeta now includes only 'name' and 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // UserKeysNoMeta now includes only 'name' and 'email'

let user1: UserKeysNoMeta1 = 'name'
// user1 = '_id' // error - not acceptable value

