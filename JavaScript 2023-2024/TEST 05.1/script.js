// Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen 
// (5 * 4 * 3) / 3
const data1 = "5,2,3,4,1,2,3,5";

let data1asSplit = data1.split(",")

let result = 1;
for (let i = 0; i < data1asSplit.length; i += 3) {
    let zahlen = parseInt(data1asSplit[i]);
    endergebnis = (result *= zahlen) / 3
    
}
console.log(endergebnis);








// KEINE ZEIT MEHR DA HALLINGER ETWAS MIT UNS ÜBER SPORTTAGE BESPRECHEN MUSSTE!!!!!!!!