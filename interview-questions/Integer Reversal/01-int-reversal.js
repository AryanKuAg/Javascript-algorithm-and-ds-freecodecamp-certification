const intRev = (num) => {
    const neg = num <= 0 ? true: false;
    num = num <= 0 ? num * -1 : num;
    const rev = parseInt(num.toString().split('').reverse().join(''))
    return neg ? -1 * rev:rev;
}

console.log(intRev(-90))