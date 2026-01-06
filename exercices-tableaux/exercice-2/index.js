let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

// pour le tableau animals_even : afficher les animaux dont la clé est un nombre pair

// pour le tableau animals_odd : afficher les animaux dont la clé est un nombre impair

for (i = 0; i < animals_even.length; i += 2) {
  console.log(animals_even[i]);
}

for (i = 1; i < animals_odd.length; i += 2) {
  console.log(animals_odd[i]);
}
