function rot13(str) {
    let temp = "";

    for (let i of str){
       
        if(i === "A" || i === "B" || i === "C" || i === "D" || i === "E" || i === "F" || i === "G" || i === "H" || i === "I" || i === "J" || i === "K" || i === "L" || i === "M"){
            temp = temp + i.replaceAll("A","N").replaceAll("B","O").replaceAll("C","P").replaceAll("D","Q").replaceAll("E","R").replaceAll("F","S").replaceAll("G","T").replaceAll("H","U").replaceAll("I","V").replaceAll("J","W").replaceAll("K","X").replaceAll("L","Y").replaceAll("M","Z");
        }else{
            temp = temp + i.replaceAll("N","A").replaceAll("O","B").replaceAll("P","C").replaceAll("Q","D").replaceAll("R","E").replaceAll("S","F").replaceAll("T","G").replaceAll("U","H").replaceAll("V","I").replaceAll("W","J").replaceAll("X","K").replaceAll("Y","L").replaceAll("Z","M") ;
        }

    }

    // str = str.replaceAll("A","N").replaceAll("B","O").replaceAll("C","P").replaceAll("D","Q").replaceAll("E","R").replaceAll("F","S").replaceAll("G","T").replaceAll("H","U").replaceAll("I","V").replaceAll("J","W").replaceAll("K","X").replaceAll("L","Y").replaceAll("M","Z").replaceAll("N","A").replaceAll("O","B").replaceAll("P","C").replaceAll("Q","D").replaceAll("R","E").replaceAll("S","F").replaceAll("T","G").replaceAll("U","H").replaceAll("V","I").replaceAll("W","J").replaceAll("X","K").replaceAll("Y","L").replaceAll("Z","M")

  
    return temp;
  }

 
  
  rot13("SERR PBQR PNZC");