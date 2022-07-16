const namePrint = (name: string) => {
    console.log(name)
}

namePrint('alemantrix')

let num: number;
let str : string;
let bool : boolean;


num = 3432.32;
str = 'sfaf'
bool = false;

// array of boolean

let myBools: boolean[] = [false, true, false, false, false]
let myStrings: string[] = ['sfd', '', 'sdfksdfsfj', 'kfsdf','p']
let mynumbers: number[] = [342,5,2,35,235,2235]

// objects

let firts: {
    college: string,
    year: number
} = {college: 'bekar collelge', year: 42332}

// type inference

let one:number | string| boolean= 3;
one = 'hey thre'
one = false;

// type alias

type some = {
    name: string,
    age: number
}

let ss: some;

const somethinggg = (no: number): string  =>  {
    return ''
}

const nulla = (some: any) : void => {
    console.log(some)
}