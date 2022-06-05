const maxChar = (str) => {
    let obj = {}
    for(const i of str){
        if(obj.hasOwnProperty(i)){
            obj[i] += 1;
        }else{
            obj[i] = 1; 
        }
    }
    // map done
    let maxChar, maxCount = 0  ;
    for (let k in obj){
        let tem = maxCount
        maxCount = Math.max(maxCount, obj[k])
        if ( tem !== maxCount){
            maxChar = k
        }
    }

    return maxChar;
}

console.log(maxChar('aaaaabbbbbbbaaa                       bbcsdwrdd'))