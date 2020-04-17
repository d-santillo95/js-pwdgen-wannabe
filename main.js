// Valori inseriti dall'utente
var nome = prompt('Qual è il tuo nome?');
var cognome = prompt('Qual è il tuo cognome?');
var colore = prompt('Qual è il tuo colore preferito?');
//Creazione password
var pswd = nome + cognome + colore + '20';
//stamòa a video della password
document.getElementById('password').innerHTML = pswd;
document.getElementById('security').setAttribute('class', 'visible');
document.getElementById('container-password').setAttribute('class', 'danger');
