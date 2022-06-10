const pyramid = (height) => {


    let init = 1;
    let odd = 1;

    while(init <= height){
        // init will go 1 -> height
        // height is the height of the pyramid
        let line = ''
        // what will be the logic of line space
        for (let i = 1 ; i<= height - init; i++){
            line = line + " "
        }
        for (let i = 1 ; i <= odd ;i++){
            line = line + "#"
        }

        console.log(line)
        init++; 
        odd += 2;
    }
}

pyramid(50);