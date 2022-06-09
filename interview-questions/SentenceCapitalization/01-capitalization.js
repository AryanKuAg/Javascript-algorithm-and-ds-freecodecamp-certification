const capitalize = (sen) => {
     return sen.split(' ').map(w => {
         let cap = w[0].toUpperCase() + w.slice(1);
         return cap;
     }).join(" ")
}

console.log(capitalize('your company is best and i can make it superbest, select me!!'));