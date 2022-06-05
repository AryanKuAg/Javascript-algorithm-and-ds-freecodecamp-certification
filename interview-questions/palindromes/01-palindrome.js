const isPalin  = (str) => {

    return str.split('').reverse().join('') === str;
}

console.log(isPalin('abcd'))

