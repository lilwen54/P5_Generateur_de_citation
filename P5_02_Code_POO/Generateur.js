class Generateur {
    constructor(debut, milieu, fin) {
        this._debut = debut;
        this._milieu = milieu;
        this._fin = fin;
    }

    //createCitation appelle les parametres du constructeur en haut, et ceux de ma fonction en bas, il sert d'intermédiaire pour créer une liaison
    createCitation = () => {
        return  this.random(this._debut)  +
                this.random(this._milieu) +
                this.random(this._fin)
        
    }
    //Random Phrase
    // x ici ne vaut rien, c'est un parametre, que j'initie plus haut dans createCitation avec les parentheses
    //Je l'appelle avec this.random
    random = (x) => { 
        return x[Math.floor(Math.random() * x.length)];     
    }


}