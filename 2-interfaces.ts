// Interface is a method to declare, extend and implement with other interfaces


// Declare Interface => describe object fields
interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

// Implement interface
const rect1: Rect = {
    id: '123',
    size: {
        width: 20,
        height: 5
    }
}

rect1.color = 'red' // optional
// rect1.id = '345' // error - readonly
const rect2 = {} as Rect // New syntax
const rect3 = <Rect>{} // Old syntax

// Extend Interface
interface RectWithArea extends Rect {
    getArea: () => number // getArea is a function that returns a number
}

const rect4: RectWithArea = {
    id: '345',
    size: {
        width: 5,
        height: 8
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

// ==============================================
// Implement interface

interface Clock {
    time: Date,
    setTime(date: Date): void
}

class MyClock implements Clock {
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date
     }
}

//===============================================
// Interfaces with multiple dynamic fields
interface CSS {
    margin: string,
    padding: string,
    [key: string]: string | any  // any key:value pair
}
