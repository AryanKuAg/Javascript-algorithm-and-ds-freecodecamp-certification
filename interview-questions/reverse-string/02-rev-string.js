const reverse = (str) => {  // method 2
    let rev = ''
    for(const i of str){
        rev = i + rev;
    }
    return rev;
}

console.log(reverse('something'))