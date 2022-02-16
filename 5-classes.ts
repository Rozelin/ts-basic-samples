class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string, // Will be set with constructor
//     readonly numberOfWheels: number = 4 // default value
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

// Shorter syntax for readonly props declaration
class Car {
    readonly numberOfWheels: number = 4 // default value
    constructor(
        readonly model: string,
        public color: string
    ) {}
}

// Class property modificators
class Animal {
    protected voice: string = '' // Protected only available on class Animal and it's subclasses
    public color: string = 'black' // Public available on all instances

    private go() {  // Private is only available in class where were defined
        console.log('GO!')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}
const cat = new Cat()
console.log(cat.color)
cat.setVoice('Meou')

// Abstract class describes structure for potential class but doesn't create a new object
abstract class Component {

    constructor(public descriptor: string) {}
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('[Render component]');
    }
    info(): string {
         return 'Some info';
    }
}

//===============================================
class User {
    // Satic property is accessible ar User.secret
    static secret = 12345;

    public userName: string;
    protected age: number;
    private nickname: string;
    readonly pass: number;

    constructor(userName: string, age: number, nickname: string, pass: number) {
        this.userName = userName;
        this.age = age;
        this.nickname = nickname;
        this.pass = pass;
    }

    setNickname(nick: string) {
        this.nickname = nick;
    }

    set setNick(nick: string) {
        this.nickname = nick;
    }
}

console.log(User.secret) // 12345

const user = new User('Oleh', 34, 'Devops', 123)
// user.userName // 'Oleh'
// user.nickname // Private and only accessible within class User
// user.age // Protected, accessible in class User and it's subclasses
// user.pass = 654 // Cannot assign to readonly property

// Setting private properties with setter or a property
user.setNickname('Lord')
user.setNick = 'Lord'

class Dev extends User {
    userName: string = 'Developer';

    constructor(name: string, age: number, nickname: string, pass: number) {
        super(name, age, nickname, pass)
    }
}

