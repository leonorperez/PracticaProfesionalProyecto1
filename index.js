var title = document.getElementById("title");

title.innerHTML = "<h1>Harry !!</h1>"


// const titulo = document.createElement("h1");
// titulo.innerText = "Harry !!"
// title.appendChild(titulo);








window.fetch("https://hp-api.herokuapp.com/api/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        const app = document.getElementById("app");
        const table = document.createElement("table");
        app.appendChild(table);
        const trHead = document.createElement("tr");
        const thName = document.createElement("th");
        const thSpecie = document.createElement("th");
        const thImage = document.createElement("th");
        thName.innerText = "Nombre";
        thSpecie.innerText = "Especie";
        thImage.innerText = "Imagen";
        table.appendChild(trHead);
        trHead.appendChild(thName);
        trHead.appendChild(thSpecie);
        trHead.appendChild(thImage);



        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            td.innerText = data[i].name;
            td2.innerText = data[i].species
            td3.innerHTML = `<img  style="width:70px;heigth:70px;" src="${data[i].image}" />`
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3)
            table.appendChild(tr);

        }
















    })
    .catch(function(error) {
        console.log(error);
    });