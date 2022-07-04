const modern = async(data) => {
    const rawData = await fetch('https://swapi.dev/api/people/2/');
    const obj = await rawData.json()
    return obj
}

modern().then((data) => {
    console.log('me',data)
}).catch(e => {
    console.log('lksjdfls')
})