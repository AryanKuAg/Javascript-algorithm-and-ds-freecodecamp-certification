const funn = async (url, callback) => {
    try{
        const rawData = await fetch(url);
    const obj = await rawData.json()
        throw new Error('klasdjlkjfklasdfjlsfjasfjlkfjlaskjfk;dsjf')
        callback(null, obj)
    }catch(e){
        console.log('To bolo ham ka kare?')
        callback('Ulla la ulla la', null)
    }
}

funn('https://swapi.dev/api/people/2/', (error, data) => {
    if(error){
        return console.log('Jindai Barrbad Ho Giya')
    } 
    console.log('apun ka data hai beta', data)
})