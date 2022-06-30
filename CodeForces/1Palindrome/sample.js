/* Common Template Starts */
"use strict";
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', input => inputString += input);
process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});
 
function print(message) {
    console.log(message);
}
 
function readLine() {
    return inputString[currentLine++];
}
 
function readLineNumber(parse = parseInt) {
    return parse(readLine());
}
/* Common Template Ends */
// function main() {
    
// var numbers = readLine().split(" ").map(x => parseInt(x));
 
// function isPalindrome (poop) {
// 	return poop.toString().split("").reverse().join("") === poop;
 
// }
 
// const ans = [];
 
// for(let i = 1 ; i < numbers.length ; i+= 2 ){  // perfecto 
// 	const val = numbers[i+1];
// 	let counter = 1;
// 	while(true){
	
// 	if(isPalindrome(val + counter)){
// 	ans.push(counter);
// 	break;
// }else{
// 	counter++;
// }
// }
// }
 
// for(let aryan of ans){
// 	print(aryan)
// }
 
// }


function main() {
    print("somethni g to s")
}