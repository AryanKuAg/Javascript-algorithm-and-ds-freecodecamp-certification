const capitalize = (str) => {
    str = str.trim()
    let finalStr = str[0].toUpperCase()
    for(let i = 1 ; i < str.length ; i++){
        if(str[i - 1] === ' '){
        finalStr = finalStr + str[i].toUpperCase()

        }else {

            finalStr = finalStr + str[i]
        }
    }

    return finalStr;
}

console.log(capitalize('Prepare a hot seat for me cause im gonna in'))