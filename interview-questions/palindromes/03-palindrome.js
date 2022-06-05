const isPalin  = (str) => {

    return str.split('').every((value, index) => value === str[str.length - 1 - index])
   
}

console.log(isPalin('racecar'))