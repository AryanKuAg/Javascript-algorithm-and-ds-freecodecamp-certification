const vowel = (str) => {
    return str.match(/[aeiou]/ig).length
}

console.log(vowel('aeousssss'))