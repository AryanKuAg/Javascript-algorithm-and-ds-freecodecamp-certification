const vowel = (mystr) =>{
    mystr = mystr.toLowerCase();
    let vCount = 0;

    for(let i of mystr){
        switch(i){
            case 'a':
                vCount += 1;
                break;
                case 'e':
                vCount += 1;
                break;
                case 'i':
                vCount += 1;
                break;
                case 'o':
                vCount += 1;
                break;
                case 'u':
                vCount += 1;
                break;
                

        }
    }
    return vCount;
}

console.log(vowel('aeiouuuuuuuujasldkfjiurweqjlknzxlkvnlkjeworiuqworjlkajsflkasjfoiiouerojkrjlasjflkjsfoiuowjrlkqjlasjfopiqjworeklasjfioijerlkqjwriousaflkjlkfjaoisufokqlkrjoiufojflksjflkkvnklvnx,mvn,xmnvkawfojwrjoiqwjlkjaslfkjoijqj;lajf;ajfpq;ajsfk;jalskfjlksajfiojwlkjfas'))