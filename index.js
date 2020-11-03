window.fetch("https://hp-api.herokuapp.com/api/characters")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const app = document.getElementById("app");
        const table = document.createElement("table");
        app.appendChild(table);
        const trHead = document.createElement("tr");
        const thName = document.createElement("th");
        const thImage = document.createElement("th");
        const thSpecie = document.createElement("th");
        const thAncestry = document.createElement("th");
        const thPatronus = document.createElement("th");
        const thwand = document.createElement("th");
        thName.innerText = "Nombre";
        thSpecie.innerText = "Especie";
        thImage.innerText = "Imagen";
        thAncestry.innerText = "Ancestros";
        thPatronus.innerText = "Patronus";
        thwand.innerText = "Varita";
        table.appendChild(trHead);
        trHead.appendChild(thName);
        trHead.appendChild(thImage);
        trHead.appendChild(thSpecie);
        trHead.appendChild(thAncestry);
        trHead.appendChild(thPatronus);
        trHead.appendChild(thwand);



        for (let i = 0; i < data.length; i++) {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
            const td5 = document.createElement("td");
            const td6 = document.createElement("td");
            console.log({ td3 })
            td3.style.textAlign = "center"
            td.innerText = data[i].name;
            td2.innerHTML = `<img  style="width:70px;heigth:70px;" src="${data[i].image}"/>`
            td3.innerText = data[i].species;
            td4.innerText = data[i].ancestry;
            td5.innerText = data[i].patronus;
            const ul = document.createElement("ul")
            ul.innerHTML = `<li type="square">${ data[i].wand.core ? data[i].wand.core : '<img style="width:25px;border-radius:55%;" src="varitas.jpg" />'}</li>`
            ul.innerHTML += `<li type="square">${ data[i].wand.length? data[i].wand.length : '<span style="color:red">X</span>'}</li>`
            ul.innerHTML += `<li type="square">${ data[i].wand.wood ? data[i].wand.wood :'<span style="color:red">X</span>' }</li>`

            td6.appendChild(ul);
            tr.appendChild(td);
            tr.appendChild(td2)
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            table.appendChild(tr);

        }
















    })
    .catch(function(error) {
        console.log(error);
    });