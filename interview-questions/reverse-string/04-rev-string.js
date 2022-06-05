const rev  = (str)=> {
    const gimme = str.split('').reduce((store,cur) => cur + store, '');
    return gimme;
}

console.log(rev("I'm the best candidate you ever found!!!!"))