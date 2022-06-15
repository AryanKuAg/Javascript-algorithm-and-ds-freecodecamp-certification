const matrixSpiral = (n) => {
    let matrix = []

    for(let i = 0 ; i < n ;i++){ // this makes all the skeleton ready
        matrix.push([])
    }

    let counter = 1; 
    let minIndex = 0;
    let maxIndex = n - 1;
    while(counter <= n *n){ // upto its square
        for(let i= minIndex ;i  <= maxIndex ;i++){ // this go top left to right
        if(counter > n *n)break;

            matrix[minIndex][i] = counter;

            counter++;
        } 
        if(counter > n *n)break;

        for(let j = maxIndex -1; j >= minIndex; j--){ // this go right top to down
            matrix[j][maxIndex] = counter;
            

            counter++;
        } 
        if(counter > n *n)break;

        for(let i = maxIndex ; i >= minIndex ; i--) { // this go bottom right to left
            matrix[maxIndex][i] = counter;
console.log(counter)
            counter++;
        }
        if(counter > n *n)break;

        for(let i = minIndex; i <= maxIndex - 1;i++) { // this go left down to up
            matrix[maxIndex - 1][i] = counter;

            counter++;
        }
        if(counter > n *n)break;

        minIndex++;
        maxIndex--;
    }

    console.log(matrix)

}

matrixSpiral(3)
// row, column
// i, j
// 0, 0
// 0, 1
// 0, 2
// 1, 2
// 2, 2
// 2, 1
// 2, 0
// 1, 0
// 1, 1