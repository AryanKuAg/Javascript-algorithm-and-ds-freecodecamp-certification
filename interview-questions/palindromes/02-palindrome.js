const isPalin = (str) => {
    let isPalin = true;

    for(let i = 0 ;i < str.length; i++){
        if(str[i] !== str[str.length - i -1]){
            // console.log(str[i], str[str.length - i])
            isPalin = false;
        }
    }

    return isPalin;

}

console.log(isPalin('racecar'))