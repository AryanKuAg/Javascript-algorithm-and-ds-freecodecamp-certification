const steps = (step) => {
    // a loop start with 1 to the step
    // a variable that holds hash
    // nested loop that add hash to the variable

    for(let i =1 ; i <= step ; ++i){
        let hash = ''
        for(let j = 1 ; j<=i;++j){
            hash = hash + '#'
        }
        console.log(hash);
    }
}

steps(10);