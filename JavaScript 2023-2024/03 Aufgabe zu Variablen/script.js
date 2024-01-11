 // Erstelle eine Variable banana mit dem Wert "Banane" 
let banana = "Banane";
// Erstelle eine Variable apple mit dem Wert "Apple" 
let apple = "Apple";
// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14 
let bananaPricePerKilo = 2.14;
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43 
let applePricePerKilo = 3.43;  
// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo 
let averageAppleWeight = 0.34;
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo 
let averageBananaWeight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 
let AnzahlBanenenProKilo = 1 / averageBananaWeight;
let anzahlÄpfelProKilo = 1 / averageAppleWeight;
console.log("Die Anzahl der Bananen pro Kilo ist " + AnzahlBanenenProKilo);
console.log("Die Anzahl der Äpfel pro Kilo ist " + anzahlÄpfelProKilo);
console.log("Eine Banane Kostet " + bananaPricePerKilo / AnzahlBanenenProKilo + "€");
console.log("Ein Apfel Kostet " + applePricePerKilo / anzahlÄpfelProKilo + "€");

// Preis von 8 Äpfeln 
console.log("Der Preis von 8 Äpfeln beträgt " + applePricePerKilo / anzahlÄpfelProKilo * 8 + "€");

// Preis von 17 Bananen 
console.log("Der Preis von 17 Bananen beträgt " + bananaPricePerKilo / AnzahlBanenenProKilo * 17 + "€");

// Preis von 1 Tonne Äpfel 
console.log("Der Preis von 1 Tonne Äpfeln beträgt " + applePricePerKilo * 1000 + "€");

// Preis von 1 Tonne Bananen 
console.log("Der Preis von 1 Tonne Bananen beträgt " + bananaPricePerKilo * 1000 + "€");
