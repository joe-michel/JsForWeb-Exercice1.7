
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

let insultes = [
	"Raté",
	"Gros naze",
	"Essaye encore",
	"Orchidoclaste",
	"Pisse-froid",
	"Croquefedouille",
	"Gargouilleux",
	"Nodocéphale",
	"Fot-en-cul",
	"Gourgandin",
	"Coprolithe",
	"Coureuse de remparts",
	"Puterelle",
	"Truandaille",
	"Sottard",
	"Houlier",
	"Bordelière",
	"Grippeminaud"
];

let i = 0;

document.querySelector(".troll").addEventListener("mouseover", () => {
	let x = (Math.random() * 1200);
	let y = (Math.random() * 600);
  	document.querySelector(".troll").style.left = x + "px";
  	document.querySelector(".troll").style.top = y + "px";
  	document.querySelector(".troll").innerText = insultes[i];
  	i++;
  	if(i == (insultes.length)){
  		i = 0;
  	}
});