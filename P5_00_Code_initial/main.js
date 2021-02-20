let morceau = {
    "salutation": ["Bonjour", "Hello", "Salut", "Hey", "Coucou"],
    "sujet": [", petit chenapant", ", grand dadet", ", cher ami", ", bel individu", ", incroyable personne"],
    "verbe": [", tu remarqueras que", ", tu noteras que", ", tu devineras que", ", tu verras que", ", tu t\n'appercevras que"],
    "phrase": [", la vie est belle", ", la nuit est somptieuse", ", l'aube est clairvoyante", ", le soleil est éclatant", ", la lune brille"],
    "complement": [", vu d'ici", ", tel quel", ", comme toujours", ", comme d'habitude", "bien souvent"],
    "animal": ["Le chat", "Le chien", "L'Ours", "Le lion", "Le tigre"],
    "caracteristique": [", est un animal", ", est un mamiphère", ", à des crocs", ", possede un pelage", ", a un odorat"],
    "adjectif": [", vraiment intéréssant", ", remarquable", ", incroyable", ", somptieux", ", innoubliable"],
    }

    let alerte = { "message" : ["Vous n'avez pas cliquer sur tout les éléments nécessaires"]}
///////////////////////////////////////// PARTIE 1 

function alerte_fenetre()
{
    return alert(alerte.message[0])
};
    function randomPhrases(tab) {
        return morceau.salutation[Math.floor(Math.random()*  5)] +                         //5 == lenght
            morceau.sujet[Math.floor(Math.random()* 5)] +
            morceau.phrase[Math.floor(Math.random()* 5)] };

    function randomPhrases2(tab) {return morceau.animal[Math.floor(Math.random()*  5)] +
            morceau.caracteristique[Math.floor(Math.random()* 5)] +
            morceau.adjectif[Math.floor(Math.random()* 5)] };

    var conteneur;
    conteneur = document.getElementById("conteneur");                                   // Creer une variable à laquelle on associe l'element HTML "conteneur" (invisible)
    btn.addEventListener('click', generer);                                             // Creer un evenenment lors du clic sur le bouttant ayant l'id "btn"
    
    
    function generer(morceau) {                                                         //Creer une fonction qui return une autre fonction, celle de la génération aleatoire de citation
        var citation = randomPhrases(morceau);
                                                                                        //conteneur.innerHTML =  citation; //IMPORTANT : ON A MIS CITATION DANS LA FONCTION AFIN DE POUVOIR L'ACTUALISE SANS RECHARGER LA PAGE !!!!!!!!
        console.log(citation)
        document.getElementById("conteneur").innerHTML = "";                            // Remise à 0 
        let para = document.createElement("p");                                         //creer un paragraphe 
        document.getElementById("conteneur").appendChild(para).style.color = 'purple' ;;                         //met un paragraphe dans le conteneur
        para.innerHTML = citation;
    }
///////////////////////////////////////// PARTIE 2

    conteneur1 = document.getElementById("conteneur1");                                 //Creer une variable à laquelle on associe l'element HTML "conteneur1" à Javascript
  
document.getElementById('btn2').addEventListener('click',choix);

function choix() {
    let saisie = document.getElementById('saisie').value;
    console.log('saisie : ' + saisie)
    
    console.log('saisie : ' + saisie)
    let citation = randomPhrases(morceau);
    document.getElementById("conteneur1").innerHTML = "";                               // Remise à 0
    
    if (saisie >0 && saisie <6)
        {let i = 0;

        for (i = 0; i < saisie; i++)
        {   
            let div = document.createElement("div");                                        //creer une div
            let para = document.createElement("p");                                         //creer un paragraphe 
            document.getElementById("conteneur1").appendChild(div)                          //Met la div dans le conteneur1
            div.appendChild(para).style.color = 'green' ;;
            let citation = randomPhrases(morceau);                                          //IMPORTANT POUR GARDER L'ALEA             
            para.innerHTML = citation;                                                      //met un paragraphe dans le conteneur
        }}
    else {alert("Le chiffre n'est pas bon, tu n'as rien écris, ou tu n'as pas écrit de chiffres");
    alert("Ecris un chiffre entre 0 et 6");}
      
}

///////////////////////////////////////// PARTIE 3 

conteneur1 = document.getElementById("conteneur01");                                    //Creer une variable à laquelle on associe l'element HTML "conteneur1" à Javascript

btnA = document.getElementById("A");
btnB = document.getElementById("B");

document.getElementById("A").onclick = function yA() {y=1; console.log("y=" +y)};;
document.getElementById("B").onclick = function yB() {y=2; console.log("y=" +y)};;

document.getElementById("AA").onclick = function yA() {y=1; console.log("y=" +y)};;
document.getElementById("BB").onclick = function yB() {y=2; console.log("y=" +y)};;

let btnC;
                                                                                        //btnC = document.querySelector('#choice').click ; //BtnC doit etre egale a la valeur identifié au clic de boutton dans la div avec l'id nommé "choice"
let x;
x = document.querySelector('.chiffre').value ;

document.getElementById('chiffre1').onclick = function chiffre1() {x=1; console.log("x=" +x)};
document.getElementById('chiffre2').onclick = function chiffre2() {x=2; console.log("x=" +x)};
document.getElementById('chiffre3').onclick = function chiffre3() {x=3; console.log("x=" +x)};
document.getElementById('chiffre4').onclick = function chiffre4() {x=4; console.log("x=" +x)};
document.getElementById('chiffre5').onclick = function chiffre5() {x=5; console.log("x=" +x)};

document.getElementById('btn3').addEventListener('click',select);
let y="";

function select () {

    document.getElementById("conteneur01").innerHTML = "";  // Remise à 0 

    if (y==1){for (z=0; z<x; z++)
    {                 
    let div = document.createElement("div");                                            //creer une div
    let para = document.createElement("p");                                             //creer un paragraphe 
    document.getElementById("conteneur01").appendChild(div)                             //Met la div dans le conteneur1
    div.appendChild(para).style.color = 'blue' ;  
    let citation = randomPhrases(morceau);                                              //IMPORTANT POUR GARDER L'ALEA             
    para.innerHTML = citation;                                                          //met un paragraphe dans le conteneur
     }}

    else if (y==2){for (z=0; z<x; z++)
        {                      
        
        let div = document.createElement("div");                                        //creer une div
        let para = document.createElement("p");                                         //creer un paragraphe 
        document.getElementById("conteneur01").appendChild(div)                         //Met la div dans le conteneur1
        div.appendChild(para).style.color = 'red' ;
        let citation = randomPhrases2(morceau);                                         //IMPORTANT POUR GARDER L'ALEA             
        para.innerHTML = citation;                                                      //met un paragraphe dans le conteneur

        }        }

else 
        {
         alerte_fenetre()                                                               //"Vous n'avez pas cliquer sur tout les éléments nécessaires"
        }}