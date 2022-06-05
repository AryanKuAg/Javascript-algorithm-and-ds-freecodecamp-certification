const arrayChunk = (arr, n) => {
    let myarr = []
    for(let i = 0 ; i < arr.length ; i+= n){
        myarr.push(arr.slice(i, i + n))
    }
    
    return myarr

}

console.log(arrayChunk([1,2,3,4,5,6,7,8,9], 10))