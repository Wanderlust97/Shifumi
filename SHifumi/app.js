var signeU = "";
var signeO = "";
var tour = 0;
var tourJ = 0;
var tourPC= 0;

var round = document.getElementById('round');
function IcUtilisateur(choix) {



        if (choix == "pierre") {
                document.getElementById('joueur').setAttribute("src", "img/stone.png");
                signeU = "pierre";
        }
        else if (choix == "feuille") {
                document.getElementById('joueur').setAttribute("src", "img/flower-pot.png");
                signeU = "feuille";
        } else {
                document.getElementById('joueur').setAttribute("src", "img/scissors.png");
                signeU = "ciseaux"
        }

        ChoixOrdi();
        comparaison();

}
function ChoixOrdi() {

        var min = 1;
        var max = 3;
        var random = Math.floor(Math.random() * (max - min)) + min;

        if (random == 1) {
                document.getElementById('ordinateur').setAttribute("src", "img/stone.png");
                signeO = "pierre";
        }
        else if (random == 2) {
                document.getElementById('ordinateur').setAttribute("src", "img/flower-pot.png");
                signeO = "feuille";
        } else {
                document.getElementById('ordinateur').setAttribute("src", "img/scissors.png");
                signeO = "ciseaux";
        }
}

function comparaison() {
        tour == tour ++;

        if (signeU === "pierre" && signeO === "ciseaux" || signeU === "feuille" && signeO === "pierre" || signeU === "ciseaux" && signeO === "feuille") {
        tourJ == tourJ++;
                switch (tour) {
                        case 1:
                                
                                document.getElementById('cercle-J-1').style.backgroundColor = 'green';
                                document.getElementById('cercle-J-1').style.border = 'none';

                                document.getElementById('cercle-PC-1').style.backgroundColor = 'red';
                                document.getElementById('cercle-PC-1').style.border = 'none';

                                break;
                        case 2:
                                document.getElementById('cercle-J-2').style.backgroundColor = 'green';
                                document.getElementById('cercle-J-2').style.border = 'none';

                                document.getElementById('cercle-PC-2').style.backgroundColor = 'red';
                                document.getElementById('cercle-PC-2').style.border = 'none';

                                break;
                        case 3:
                                document.getElementById('cercle-J-3').style.backgroundColor = 'green';
                                document.getElementById('cercle-J-3').style.border = 'none';

                                document.getElementById('cercle-PC-3').style.backgroundColor = 'red';
                                document.getElementById('cercle-PC-3').style.border = 'none';

                                break;
                                

                        default:
                                break;
                }




        }
        else if (signeU === "ciseaux" && signeO === "pierre" || signeU === "pierre" && signeO === "feuille" || signeU === "feuille" && signeO === "ciseaux") {

                tourPC == tourPC++;
                if (tour == 1) {
                        document.getElementById('cercle-PC-1').style.backgroundColor = 'green';
                        document.getElementById('cercle-PC-1').style.border = 'none';

                        document.getElementById('cercle-J-1').style.backgroundColor = 'red';
                        document.getElementById('cercle-J-1').style.border = 'none';



                } else if (tour == 2) {
                        document.getElementById('cercle-PC-2').style.backgroundColor = 'green';
                        document.getElementById('cercle-PC-2').style.border = 'none';

                        document.getElementById('cercle-J-2').style.backgroundColor = 'red';
                        document.getElementById('cercle-J-2').style.border = 'none';


                } else {
                        document.getElementById('cercle-PC-3').style.backgroundColor = 'green';
                        document.getElementById('cercle-PC-3').style.border = 'none';

                        document.getElementById('cercle-J-3').style.backgroundColor = 'red';
                        document.getElementById('cercle-J-3').style.border = 'none';

                }

        }
        else {

                if (tour == 1) {
                        document.getElementById('cercle-PC-1').style.backgroundColor = 'grey';
                        document.getElementById('cercle-PC-1').style.border = 'none';

                        document.getElementById('cercle-J-1').style.backgroundColor = 'grey';
                        document.getElementById('cercle-J-1').style.border = 'none';


                } else if (tour == 2) {
                        document.getElementById('cercle-PC-2').style.backgroundColor = 'grey';
                        document.getElementById('cercle-PC-2').style.border = 'none';

                        document.getElementById('cercle-J-2').style.backgroundColor = 'grey';
                        document.getElementById('cercle-J-2').style.border = 'none';


                } else {
                        document.getElementById('cercle-PC-3').style.backgroundColor = 'grey';
                        document.getElementById('cercle-PC-3').style.border = 'none';

                        document.getElementById('cercle-J-3').style.backgroundColor = 'grey';
                        document.getElementById('cercle-J-3').style.border = 'none';


                }
        }

        switch (tour) {
                case 1:
                         document.getElementById('cercle-1').style.backgroundColor = 'cyan';
                         document.getElementById('cercle-1').style.border = 'none';
                         

                        break;
                case 2:
                         document.getElementById('cercle-2').style.backgroundColor = 'cyan';
                         document.getElementById('cercle-2').style.border = 'none';


                        break;
                case 3:
                         document.getElementById('cercle-3').style.backgroundColor = 'cyan';
                         document.getElementById('cercle-3').style.border = 'none';
                        
                        if (tourJ > tourPC) {
                                CreateContent("Win");
                                createPara("paragraphe");
                                document.getElementById("gagnant").classList.add("animate__animated", "animate__zoomIn");
                        } else if (tourJ < tourPC) {
                                CreateContent("Loose");
                                createPara("paragrapheperdant");
                                document.getElementById("perdant").classList.add("animate__animated", "animate__zoomIn");


                        }
                        if (tourJ == tourPC) {
                                CreateContent("egal");
                                createPara("paragrapheEgal");
                                document.getElementById("egalite").classList.add("animate__animated", "animate__zoomIn");
                        }
                        break;

                default:
                        break;
        }

}

function createDivWith_Id(_id, _class) {
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        div.setAttribute('id', _id);
        div.setAttribute('class', _class);
        document.body.appendChild(div);
}

function createDivWith_Id_destination(_id_destination, _id, _class) {
        var div = document.getElementById(_id_destination);

        var div_destination = document.createElement("div")
        div_destination.setAttribute('id', _id);
        div_destination.setAttribute('class', _class);
        div.appendChild(div_destination);
}

function CreateContent(page) {

        switch (page) {
                case "Win":
                        //document.getElementById("main").createElement("div");
                        //document.getElementById("menuPaniers").remove();
                        createDivWith_Id("gagnant");
                        createDivWith_Id_destination("gagnant", "victoire", "victoire")



                        break;
                case "Loose":
                        //document.getElementById("main").createElement("div");
                        //document.getElementById("menuPaniers").remove();
                        createDivWith_Id("perdant");
                        createDivWith_Id_destination("perdant", "defaite", "defaite")


                        break;
                        case "egal":
                        //document.getElementById("main").createElement("div");
                        //document.getElementById("menuPaniers").remove();
                        createDivWith_Id("egalite");
                        createDivWith_Id_destination("egalite", "egal", "egal")


                        break;


                default:
                        break;
        }


}



function createP(_id_destination, _id, _class, _text) {
        var div = document.getElementById(_id_destination);

        var p = document.createElement("p");
        p.setAttribute('id', _id);
        p.setAttribute('class', _class);
        p.innerText = _text;
        div.appendChild(p);
}

function createPara(texte) {
        switch (texte) {
                case "paragraphe":
                        createP("victoire", "vousavezgagné", "vousavezgagné", "vous avez gagné!!!");
                        break;
                case "paragrapheperdant":
                        createP("defaite", "vousavezperdu", "vousavezperdu", "vous avez perdu!!!");
                        break;
                case "paragrapheEgal":
                        createP("egalite", "nul", "nul", "égaliter!");
                break;
                default:
                        break;
        }
}
function refresh() {
        location.reload();
        
}

