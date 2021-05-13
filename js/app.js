const url = "https://blockchain.info/ticker";

function recupererPrix() {
	// Créer une requête
	let requete = new XMLHttpRequest(); // Créer un objet
	requete.open("GET", url); // Premier paramètre GET / POST, deuxième paramètre : url
	requete.responseType = "json"; // Nous attendons du JSON
	requete.send(); // Nous envoyons notre requête

	// Dès qu'on reçoit une réponse, cette fonction est executée
	requete.onload = function () {
		if (requete.readyState === XMLHttpRequest.DONE) {
			if (requete.status === 200) {
				let reponse = requete.response; // on stock la réponse
				let prixEnEuros = reponse.EUR.last;
				document.querySelector(
					"#price_label"
				).innerHTML = `1 bitcoin = ${prixEnEuros}`;
			} else {
				alert("Un problème est survenu, merci de revenir plus tard.");
			}
		}
	};
}

setInterval(recupererPrix, 1000);
