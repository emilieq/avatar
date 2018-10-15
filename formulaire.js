/*
	Vérification de l'envoi du fomulaire :
	Le formulaire ne sera pas envoyé si les zones de saisies sont vides,
	message d'erreur.
*/



var formValid = document.getElementById('bouton_envoi');
            var nom = document.getElementById('nom');
            var missNom = document.getElementById('missNom');
            var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
            var emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            formValid.addEventListener('click', validation);
            
            function validation(event){
                //Si le champ est vide
                if (nom.validity.valueMissing){
                    event.preventDefault();
                    missNom.textContent = 'Nom et Prénom manquants';
                    missNom.style.color = 'red';
                }
                //Si le format de données est incorrect
                else if (nomValid.test(nom.value) == false){
                    event.preventDefault();
                    missNom.textContent = 'Format incorrect';
                    missNom.style.color = 'orange';
                }
                else{ 
                }

                //Si le champ est vide
                if (email.validity.valueMissing){
                    event.preventDefault();
                    missEmail.textContent = 'Email manquant';
                    missEmail.style.color = 'red';
                }
                //Si le format de données est incorrect
                else if (emailValid.test(email.value) == false){
                    event.preventDefault();
                    missEmail.textContent = 'Format incorrect';
                    missEmail.style.color = 'orange';
                }
                else{ 
                }

                if (objet.validity.valueMissing){
                    event.preventDefault();
                    missObjet.textContent = 'Objet manquant';
                    missObjet.style.color = 'red';
                }
               

                if (message.validity.valueMissing){
                    event.preventDefault();
                    missMessage.textContent = 'Message manquant';
                    missMessage.style.color = 'red';
                }
                
            }




/*function valider() {
var form_err = " "
if ( document.ecrire.email.value.length < 1) {
form_err = "Email invalide ! - ";
}
if ( document.ecrire.email.value == "votrenom@mail.com") {
form_err = "Email invalide ! - ";
}
var verim = 0;
for (i=1; i<document.ecrire.email.value.length -4; i++) {
if ( document.ecrire.email.value.charAt(i) == "@") {
verim = 1;
}}
if ( verim == 0) {
form_err = "Email invalide ! - ";
}
if ( document.ecrire.nom.value.length < 1) {
form_err += "Il manque le Nom. - ";
}
if ( document.ecrire.objet.value.length < 1) {
form_err += "Il manque l\'objet. ";
}
if ( document.ecrire.message.value.length < 1) {
form_err += "Il manque le message. ";
}
if ( form_err != " ") {
alert(form_err);
return false;
}
return true
}  */




/*var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    var nom = form.elements.nom.value;
    var objet = form.elements.objet.value;
    var message = form.elements.message.value;
    if (nom.length >= 0) 
     
    alert ("Erreur : vous devez remplir les cases");

	
	var email = "";
	if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisi ne contient pas le caractère @
        email = "Adresse invalide";
    
 	alert ("Erreur : adresse invalide");
 	}

*/




/*var email = "";
    if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisi ne contient pas le caractère @
        email = "Adresse invalide";
    }

*/