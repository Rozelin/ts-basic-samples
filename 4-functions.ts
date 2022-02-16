// Return number as result
function addNumbers(a: number, b?: number): number {
    if (!b) return a
    return a + b;
}

function toUpperCase(str: string): string {
    return str.toUpperCase();
}

interface MyPosition {
    x: string | undefined,
    y: string | undefined
}
// Return MyPosition as value
function position(): MyPosition {
    return {
        x: '123',
        y: undefined
    }
}

// Return string as value
const createSkills = (name: string, ...skills: Array<string>): string => {
    return `${name}, my skills are ${skills.join(' ')}`
}
createSkills('Jack', 'JS', 'ES6', 'NodeJS')

// Return object as result
const createObject = (): object => ({})
