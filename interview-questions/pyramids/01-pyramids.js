const pyramid = (step) => {
    let odd = 1;
    for(let i = 1 ; i <= step ; ++i){
        console.log(" ".repeat(step - i) + "#".repeat(odd))
        odd += 2;
    }
}

pyramid(50)