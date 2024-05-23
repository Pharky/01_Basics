/* 
 * Suche alle geraden Zahlen (modulo) und berechne 
 * den Mittelwert dieser 
 * (4 + 10 + 2 + 14) / 4 
 */ 
const data1 = "4,9,-3,-9,-5,10,2,1,14"; 

let gerade = data1.split(",")

for (let i = 0; i < gerade.length; i++){
    if (gerade % 2 === 0){
        console.log(i)
    }
}

// Gib den Satz rückwärts aus und verdopple jeden Buchstaben 

// nnööhhccss.... 

const data2 = "Das Leben ist schön"; 

let data2AsSplit = data2.split("");

for(let i = data2AsSplit.length; i > -1; i-- ){
    console.log(data2AsSplit[i*2])
    
        
}

// Zöhle wie oft a oder e oder ö vorkommen 

// 3 

const data3 = "Das Leben ist schön"; 

let data3AsSplit = data3.split("");

for(let i = 0; data3AsSplit.length > i; i++){

    if(i = "ä" || "e" || "ö")
    console.log(1)
    
}