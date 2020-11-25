window.fetch("https://hp-api.herokuapp.com/api/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const app = document.getElementById("app");
        const table = document.createElement("table");
        table.className = "table table-dark tabla";
        app.appendChild(table);
        const trHead = document.createElement("tr");
        const thImage = document.createElement("th");
        const thName = document.createElement("th");
        const thHouse = document.createElement("th")
        const thSpecie = document.createElement("th");
        const thAncestry = document.createElement("th");
        const thPatronus = document.createElement("th");
        const thwand = document.createElement("th");
        thImage.innerText = "Imagen";
        thName.innerText = "Nombre";
        thHouse.innerText = "Casa";
        thSpecie.innerText = "Especie";
        thAncestry.innerText = "Ancestros";
        thPatronus.innerText = "Patronus";
        thwand.innerText = "Varita";
        trHead.appendChild(thImage);
        table.appendChild(trHead);
        trHead.appendChild(thName);
        trHead.appendChild(thHouse);
        trHead.appendChild(thSpecie);
        trHead.appendChild(thAncestry);
        trHead.appendChild(thPatronus);
        trHead.appendChild(thwand);

        imagenVaritaColumna = '<img style="width:40px;border-radius:55%;" src="varitas.jpg"/>' ;
        imagenVaritaLista= '<img style="width:25px;border-radius:55%;" src="varitas.jpg" />' ;

        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            const tdImagen = document.createElement("td");
            const tdName = document.createElement("td");
            const tdHouse = document.createElement("td");
            const tdSpecies = document.createElement("td");
            const tdAncestry = document.createElement("td");
            const tdPatronus = document.createElement("td");
            const tdVarita = document.createElement("td");

            tdImagen.innerHTML = `<img  style="width:70px;heigth:70px;" src="${data[i].image}"/>`
            tdName.innerText = data[i].name;
            tdHouse.innerHTML = data[i].house ? data [i].house : imagenVaritaColumna ;
            tdSpecies.innerText = data[i].species;
            tdAncestry.innerHTML = data[i].ancestry ? data [i].ancestry : imagenVaritaColumna;
            tdPatronus.innerHTML = data[i].patronus ? data[i].patronus : imagenVaritaColumna;
            const ul = document.createElement("ul")
            ul.innerHTML = `<li type="square">${ data[i].wand.core ? data[i].wand.core : imagenVaritaLista}</li>`
            ul.innerHTML += `<li type="square">${ data[i].wand.length? data[i].wand.length :imagenVaritaLista}</li>`
            ul.innerHTML += `<li type="square">${ data[i].wand.wood ? data[i].wand.wood :imagenVaritaLista}</li>`

            tdVarita.appendChild(ul);
            tr.appendChild(tdImagen);
            tr.appendChild(tdName);
            tr.appendChild(tdHouse);
            tr.appendChild(tdSpecies);
            tr.appendChild(tdAncestry);
            tr.appendChild(tdPatronus);
            tr.appendChild(tdVarita);
            table.appendChild(tr);
        }
    })
    .catch(function(error) {
        console.log(error);
    });