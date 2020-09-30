async function construction(){
    let url = "https://workshop.neotechweb.net/ws/ciamovie/1.0.0/acteurs.php";
    let data = await fetch(url);
    let acteurs = await data.json();
    
    
    acteurs.forEach(acteur => {
        let container = document.createElement("div");
        container.className = "acteur";

        let portrait = document.createElement("div");
        portrait.className = "photo";
        let img = document.createElement("img");
        img.src = `https://workshop.neotechweb.net/ws/ciamovie/1.0.0/acteurs/${acteur.idActeur}.jpg`;

        portrait.appendChild(img);
        container.appendChild(portrait);

        let nom = document.createElement("div");
        nom.className = "nom";
        nom.innerText = acteur.Nom;

        container.appendChild(nom);

        let date = document.createElement("div");
        date.className = "date"
        let drapeau = document.createElement("img");
        drapeau.src = "https://workshop.neotechweb.net/ws/flags/64/us.png";
        date.appendChild(drapeau);
        let spanDate = document.createElement("span");
        spanDate.innerText = " 8 octobre 1949"
        date.appendChild(spanDate);

        container.appendChild(date);

        let films = document.createElement("div");
        films.className = "films";
        let nombre = document.createElement("span");
        nombre.className = "nombre";
        nombre.innerText = "58";
        films.appendChild(nombre);
        let spanFilm = document.createElement("span");
        spanFilm.innerText = " Films"
        films.appendChild(spanFilm);

        container.appendChild(films);

        document.body.appendChild(container);
    });
}

async function getActeurs(){
    let url = "https://workshop.neotechweb.net/ws/ciamovie/1.0.0/acteurs.php";
    let data = await fetch(url);
    let acteurs = await data.json();
    
    let template = document.getElementById("templateActeur");
    acteurs.forEach(acteur => {
        let content = template.content.cloneNode(true);
        content.querySelector(".nom").innerText = acteur.Nom;
        
        content.querySelector(".photo > img").src = `https://workshop.neotechweb.net/ws/ciamovie/1.0.0/acteurs/${acteur.idActeur}.jpg`;
        content.querySelector(".photo > img").setAttribute("alt", acteur.Nom);
        document.body.appendChild(content);
    });
}

async function getAffiche(){
    let url = "https://workshop.neotechweb.net/ws/ciamovie/1.0.0/films.php";
    let data = await fetch(url);
    let films = await data.json();

    let url2 = "https://workshop.neotechweb.net/ws/ciamovie/1.0.0/acteurs.php";
    let data2 = await fetch(url2);
    let acteurs = await data2.json();
    
    let template = document.getElementById("templateAffiche");
    films.forEach(async (film) => {

        let content = template.content.cloneNode(true);
        content.querySelector(".titre").innerText = film.Titre;
        
        content.querySelector(".affiche > img").src = `https://workshop.neotechweb.net/ws/ciamovie/1.0.0/films/${film.Fichier}`;
        content.querySelector(".affiche > img").setAttribute("alt", film.Fichier);
        content.querySelector(".real").innerText = `De ${film.Realisateur}`;

        content.querySelector(".caracteristique").innerText = `${film.Annee} / 1h45min / ${film.Genre}`;
        
        let acteur = acteurs.find(e => e.idActeur == film.Acteur);
        console.log(acteur);
        content.querySelector(".acteurs").innerText = `${acteur.Nom}`;

        // let rect = content.getElementById("film5654");
        // rect.querySelector("rect").setAttribute('width', Math.random()*90);

        document.body.appendChild(content);
    });
}

// https://workshop.neotechweb.net/ws/ciamovie/1.0.0/acteurs/1.jpg
// https://workshop.neotechweb.net/ws/ciamovie/1.0.0/films.php