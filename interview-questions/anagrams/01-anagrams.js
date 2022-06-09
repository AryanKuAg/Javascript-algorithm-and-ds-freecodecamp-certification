const anagram = (str1, str2) => {
    let obj1 = {}
    let obj2 = {}

    for (let i of str1){
        i = i.toLowerCase();
        if(i === '!'){
            continue;
        }
        if(obj1.hasOwnProperty(i)){
            obj1[i] += 1;
        } else {
            obj1[i] = 1;
        }
    }

    for (let i of str2){
        i = i.toLowerCase();
        if(i === '!'){
            continue;
        }
        if(obj2.hasOwnProperty(i)){
            obj2[i] += 1;
        } else {
            obj2[i] = 1;
        }
    }
    let isAnagram = true;
    for(let k in obj1){
        if(obj1[k] !== obj2[k]){
            isAnagram = false;
        }
    }
    for(let k in obj2){
        if(obj1[k] !== obj2[k]){
            isAnagram = false;
        }
    }

    return isAnagram;
}

console.log(anagram('rail safety', 'fairy tales'))
console.log(anagram('RAIL! SAFETY!', 'fairy tales'))
