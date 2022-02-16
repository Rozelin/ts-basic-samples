namespace Utils {
    export const SECRET: string = '123345';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(date: T): boolean => !date;
}

const myPass = Utils.getPass('Name', 54); // 'Name54'
const isSecret = Utils.isEmpty(Utils.SECRET);  // 'false'


// Import file 'myUtils.ts' with namespaced code with the next syntax
/// <reference path="myUtils.ts" />       // <--- Import

// Content of file is accessible in current scope by it's namespace name name
