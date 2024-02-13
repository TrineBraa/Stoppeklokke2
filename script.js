let Sekunder = 0;  // en Variabel for å lagre sekunder i
let Teller; //en variabel som lagrer telling i.



//Denne funksjonen er den som gir klokke HTML koden en teller som går opp
function sekundTeller() {
    klokken.innerHTML = Sekunder; //trenger ikke skrive hele document.getelementbyid. Det går også å skrive ID direkte.
    Sekunder++;
}

//Denne funksjonen er den som starter timeren ved å trykke på knappen. Den viser at telleren vil telle hvert sekund.
function startTimer() {
    Teller = setInterval(sekundTeller, 1000)
    console.log()
}

// /*HTML*/ <-- Denne viser at det vi skriver mellom backfnuttene er HTML. Ved += Legger vi til tider uten å slette tidligere tider
//ved å bruke ${} i HTML koden kopierer vi den variabelen vi setter inn i den og verdien variabelen har lagret.
function setRundeTid() {
    Tider.innerHTML += /*html*/ `<div> ${Sekunder - 1} Sek </div>`;
    console.log(setRundeTid)
}

//denne laster lokalasjonen på nytt ved knappetrykket.
function timerRestart() {
    location.reload();
}