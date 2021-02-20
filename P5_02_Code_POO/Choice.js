//PORTEE DES VARIABLES : CLASS + this

class Choice{
    constructor(gen1, gen2){
        this.gen1 = gen1;
        this.gen2 = gen2;

        this.y="";
        this.x;
        // Par defaut on generer une citation (Method : citationB)
        this.nbr = 1;

        this.span = document.createElement('span');
        this.span.id = ('mySpan');

        //Cette class me sert pour mon Padding
        this.span.className = ('mySpanClass')

        //MON BOUTON POUR EFFACER MA FONCTION 1
        this.stop1 = document.getElementById('stop1');

        //MON BOUTON POUR EFFACER MA FONCTION 2 ET SES MESSAGES
        this.stop2 = document.getElementById('stop2');

        //MES BOUTONS VALIDER
        this.btn1 = document.getElementById("btn");
        this.btn2 = document.getElementById("btn2");

        //MES BOUTONS A ET B
        this.choixA=document.getElementById("A");
        this.choixB=document.getElementById("B");
        

        //S'IL N'Y A PAS DE CLIQUE DE A OU B
        this.choiceGenerate=null

        //MES MESSAGES
        this.ecrire = {
            vide : "Cliquer sur une des valeurs ci-dessus",
            valeur: "Vous avez choisi de générer "  + this.x + " citation(s) dans le générateur " + this.y + " :",
            A: "Cliquer ici ou sur B",
            B:"Cliquer ici ou sur A"
        }

        this.messageA = document.getElementById('messageA');
        messageA.style.color = '#28ff02';
        this.messageA.style.fontWeight = 'bold';

        this.messageB = document.getElementById('messageB');
        messageB.style.color = '#28ff02';
        this.messageB.style.fontWeight = 'bold';


        this.message = document.getElementById('message');
        this.message.style.color = '#28ff02';
        this.message.style.fontWeight = 'bold';

        //LE NOMBRE DE CITATION SOUHAITE PAR L'UTISLISATEUR
        this.nbrCitations = document.getElementsByClassName("chiffre");

        //ECRITURE DES MESSAGES
        this.writeMessageB();

        //MES EVENEMENTS AUX CLIQUES
        this.events();   
        
         
    }      
    

    citationA(){
        console.log(this.gen1.createCitation());
        this.phrase = this.gen1.createCitation();

        maDiv1.appendChild(this.span);
        document.getElementById('mySpan').innerHTML = this.phrase;
        console.log(this.span)
        //document.getElementById("maDiv1").style.color = 'blue';
        document.getElementById("maDiv1").style.fontWeight = 'bold';
        //this.span.style.padding = 'max(2px)';

        this.span.style.backgroundColor = 'white';
    }

    

    citationB(){
        if(this.choiceGenerate===null){
            return alert("Choisissez un generateur");
        }

        //Réinitialisation des citations à chaque nouveaux cliques
        //Avant tout nouvel evenement de génération de citation
        document.getElementById("maDiv2").innerHTML = "";

        for (let z=0; z<this.nbr; z++){
                this.div = document.createElement("div");
                this.para = document.createElement("span");
                this.para.className = ('mySpanClass')
                document.getElementById("maDiv2").appendChild(this.div);
                this.para.style.backgroundColor = 'white';
            
            //SI "A"
            if(this.choiceGenerate==="A"){
                this.div.appendChild(this.para).style.color = 'blue' ;  
                this.phrase = this.gen1.createCitation();   
            }
            //SI "B"
            else{
                this.div.appendChild(this.para).style.color = 'red' ;  
                this.phrase = this.gen2.createCitation();   
            }           
            this.para.innerHTML = this.phrase;
        } 
    }

    events = ()=>{
        //Action Stop déclenchée au clique
        this.stop1.addEventListener(
            "click", function(){
                document.getElementById("maDiv1").innerHTML = "";
                message.innerHTML = "";
                }
            )
        //Action Stop déclenchée au clique
        this.stop2.addEventListener(
            "click", function(){
                document.getElementById("maDiv2").innerHTML = "";
                message.innerHTML = "";
                messageA.innerHTML = "";
                messageB.innerHTML = "";
                }
            )
            
        //Boucle pour rajouter des citations en fonction de la valeur choisi par l'utilisateur
        //MEMO this.nbrCitations : est la class chiffre
        for(let i = 0; i < this.nbrCitations.length; i++){
            this.nbrCitations[i].addEventListener("click", ()=>{
                this.nbr=i+1;
                this.message.innerHTML = "";
            })
        }

        //Action "Générer" déclenchée au clique
        this.btn1.addEventListener("click",()=>{
            this.citationA();
        })

        //Action "Générer" déclenchée au clique
        this.btn2.addEventListener("click",()=>{
            this.citationB();
        })

        //Choix du Générateur A
        this.choixA.addEventListener("click",()=>{
            this.choiceGenerate="A";
            this.messageA.innerHTML = "";
            this.messageB.innerHTML = "";
        })

        //Choix du Générateur B
        this.choixB.addEventListener("click",()=>{
            this.choiceGenerate="B"; 
            this.messageA.innerHTML = "";
            this.messageB.innerHTML = "";
        })
    }

    //Affichage des messages d'erreur
    writeMessageB(){

        if (this.choiceGenerate=="A"){
            this.message.innerHTML = this.ecrire.valeur;
            this.messageA.innerHTML = "";
            this.messageB.innerHTML = "";
        }
    
        else if (this.choiceGenerate=="B"){                 
            this.message.innerHTML = this.ecrire.valeur; 
            this.messageA.innerHTML = "";
            this.messageB.innerHTML = "";
        }
    
        else if (this.choiceGenerate==null){
            this.message.innerHTML = this.ecrire.vide;
            this.messageA.innerHTML = this.ecrire.A;
            this.messageB.innerHTML = this.ecrire.B;
        } 
    }
}




