window.fetch("https://hp-api.herokuapp.com/api/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const app = document.getElementById("app");
        const table = document.createElement("table");
        table.className = "table table-dark tabla";
        app.appendChild(table);
        const thImage = document.createElement("th");
        const trHead = document.createElement("tr");
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



        for (let i = 0; i < data.length; i++) {
            const tdImagen = document.createElement("td");
            const tr = document.createElement("tr");
            const tdName = document.createElement("td");
            const tdHouse = document.createElement("td");
            const tdSpecies = document.createElement("td");
            const tdAncestry = document.createElement("td");
            const tdPatronus = document.createElement("td");
            const tdVarita = document.createElement("td");

            tdImagen.innerHTML = `<img  style="width:70px;heigth:70px;" src="${data[i].image}"/>`
            tdName.innerText = data[i].name;
            tdHouse.innerText = data[i].house;
            tdSpecies.innerText = data[i].species;
            tdAncestry.innerText = data[i].ancestry;
            tdPatronus.innerText = data[i].patronus;
            const ul = document.createElement("ul")
            ul.innerHTML = `<li type="square">${ data[i].wand.core ? data[i].wand.core : '<img style="width:25px;border-radius:55%;" src="varitas.jpg" />'}</li>`
            ul.innerHTML += `<li type="square">${ data[i].wand.length? data[i].wand.length :'<img style="width:25px;border-radius:55%;" src="varitas.jpg" />'}</li>`
            ul.innerHTML += `<li type="square">${ data[i].wand.wood ? data[i].wand.wood :'<img style="width:25px;border-radius:55%;" src="varitas.jpg" />'}</li>`

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