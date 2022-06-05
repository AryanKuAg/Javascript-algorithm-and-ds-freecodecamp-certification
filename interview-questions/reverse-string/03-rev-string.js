const reverse = (str) => {
    let lastIndex = str.length - 1;
    let rev  = '';

    while(lastIndex >= 0){
        rev =  rev  +str[lastIndex] ; 

        lastIndex--;
    }
    return rev;
} 

console.log(reverse('aryan'));