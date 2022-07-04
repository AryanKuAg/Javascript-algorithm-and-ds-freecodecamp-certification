const tutu = new Promise(async (resolve, reject) => {
    try{
        const rawData = await fetch('https://swapi.dev/api/people/2/');
    const obj = await rawData.json()
        // throw new Error('eeeeeeeeeeeeeeeeee')
    resolve(obj)
    }catch(e){
        reject(e)
    }
    
})

tutu.then((data) => {
    return {...data, poop: 'pee'}
}).catch((e) => {
    console.log('error hai bro', e)
}).then((data) => {
    console.log(data)
})