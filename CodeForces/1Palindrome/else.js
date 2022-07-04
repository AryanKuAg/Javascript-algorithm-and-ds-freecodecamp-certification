/************* KEEP BELOW CODE AS IT IS *********************/
/**
 * This code has been taken from: https://codeforces.com/blog/entry/69610
 * I am not the owner of the readLine function below, understanding them require knowledge of basic NodeJS I/O and streams
 */
 process.stdin.resume();
 process.stdin.setEncoding('utf-8');
 
 let inputString = '';
 let currentLine = 0;
 
 process.stdin.on('data', inputStdin => {
     inputString += inputStdin;
 });
 
 process.stdin.on('end', _ => {
     inputString = inputString.trim().split('\n').map(string => {
         return string.trim();
     });
     
     main();    
 });
 
 function readLine() {
     return inputString[currentLine++];
 }
 
 
 function main() {
      var numbers = readLine().split(" ").map(x => parseInt(x));
      
      console.log(numbers)
 
function isPalindrome (poop) {
    poop = poop.toString()
	return poop.split("").reverse().join("") === poop;
 
}
 
const ans = [];
 
for(let i = 1 ; i < numbers.length ; i+= 2 ){  // perfecto 
	const val = numbers[i+1];
	let counter = 1;
	while(true){
// 	console.log(counter, isPalindrome(val + counter))
	if(isPalindrome(val + counter)){
	ans.push(counter);
	break;
}else{
	counter++;
}
}
}
 
for(let aryan of ans){
	print(aryan)
}
 
 }