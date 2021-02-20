//MES 2 TABLEAUX
let tabOne = {
    debut:["Bonjour","Hello","Salut","Hey","Coucou"],
    milieu:[", petit chenapant",", grand dadet",", cher ami",", bel individu",", incroyable personne"],
    fin:[", la vie est belle",", la nuit est somptieuse",", l'aube est clairvoyante",", le soleil est éclatant",", la lune brille"]

}

let tabTwo = {
    animal:["Le chat","Le chien","L'Ours","Le lion","Le tigre"],
    info:[", est un animal",", est un mamiphère",", à des crocs",", possede un pelage",", a un odorat"],
    interet:[", vraiment intéréssant",", remarquable",", incroyable",", somptieux",", innoubliable"]
}

//MES 2 INSTANCIATIONS DE CLASSES
let generatorOne = new Generateur(tabOne.debut, tabOne.milieu, tabOne.fin);
let generatorTwo = new Generateur(tabTwo.animal, tabTwo.info, tabTwo.interet);
let choice = new Choice(generatorOne, generatorTwo);