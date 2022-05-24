function palindrome(str) {


  str = str.replaceAll(",", "").replaceAll(".", "").replaceAll("_", "").replaceAll(" ","").replaceAll("(", "").replaceAll(")", "").replaceAll("-",'')

  let rev =  str.split("").reverse().join("");
  


   // console.log(str.toLowerCase(), rev.toLowerCase())

  return str.toLowerCase() === rev.toLowerCase();
}

palindrome("0_0 (: /-\ :) 0-0");
