window
  .fetch("https://hp-api.herokuapp.com/api/characters")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const app = document.getElementById("app");
    const table = document.createElement("table");
    app.appendChild(table);
    const trHead = document.createElement("tr");
    const thNombre = document.createElement("th");
    thNombre.innerText = "Nombre"; 
    table.appendChild(trHead);
    trHead.appendChild(thNombre);


    for (let i = 0; i < data.length; i++) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerText = data[i].name;
      tr.appendChild(td);
      table.appendChild(tr);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
