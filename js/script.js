// 1 chiedere il nome
// 2 chiedere il cognome
// 3 chiedere il colore preferito
// 4 sommare le risposte date ed aggiungere 21
// 5 dare il risultato nel file html

const FirstName = prompt('Quale è il tuo nome?');

const LastName = prompt('Quale è il tuo cognome?');

const FavouriteColor = prompt('Quale è il tuo colore preferito?');

const password = FirstName + LastName + FavouriteColor + 21

const paragraph = document.getElementById('password-paragraph');

paragraph.innerText = 'Ciao ' + FirstName + ', la tua password è: ' + password;