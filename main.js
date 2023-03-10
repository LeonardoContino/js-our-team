// console.log("js ok");

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto
*/

const mainCard = document.getElementById("main-card");
console.log(mainCard);

//creo un'array di oggetti

const cards = [
  {
    foto: "wayne-barnett-founder-ceo.jpg",
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
  },

  {
    foto: "angela-caroll-chief-editor.jpg",
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
  },

  {
    foto: "walter-gordon-office-manager.jpg",
    nome: "Walter Gordon",
    ruolo: "Office Manager",
  },
  {
    foto: "angela-lopez-social-media-manager.jpg",
    nome: "Angela Lopez",
    ruolo: "Socila Media Manager",
  },
  {
    foto: "scott-estrada-developer.jpg",
    nome: "Scott Estrada",
    ruolo: "Developer",
  },
  {
    foto: "barbara-ramos-graphic-designer.jpg",
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
  },
];
console.table(cards);

for (let i = 0; i < cards.length; i++) {
  const Currentcards = cards[i];
  console.log(Currentcards);

  mainCard.innerHTML += `<div class=card-person>
    <div class=card-image><img src="img/${Currentcards.foto}" alt="${Currentcards.nome}"></div> 
    <div class=card-name>${Currentcards.nome}</div> 
    <div class=card-ruole>${Currentcards.ruolo}</div> 
    </div>`;
}
