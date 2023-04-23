const listaDigimon = document.getElementById("nombreDigimon")


function obtenerPersonaje(digiNombre) {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digiNombre}`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById("container_card").innerHTML = '' 
            let html = ''
            for (let dato of data) {
                html += `
            <div class="col-md-4 col-sm-12 position-absolute top-50 start-50 translate-middle ">
                <div class="card">
                    <img src="${dato.img}" class="card-img-top" alt="img de ${dato.name}">
                    <div class="card-body">
                        <h2 class="card-title">${dato.name}</h2>
                        <p class="card-text">${dato.level}</p>
                        </div>
                        <button onclick="obtenerTodos()" class="btn btn-primary">Volver a todos los personajes</button>
                </div>
            </div>
            
            `
                html += `
            `
            }
            document.getElementById("container_card").innerHTML = html
        })
        .catch(error => alert("no pudimos obtener la información"))
}

function obtenerTodos() {
    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then(data => {
            let personajes = data;
            let html = ''
            for (const personaje of personajes) {
                let digiNombre = personaje.name
                html += `
                <div class="col-md-3 col-sm-12 p-3">
                    <a onclick="obtenerPersonaje('${digiNombre}')">
                        <div class="card">
                            <img src="${personaje.img}" class="card-img-top card-img" alt="...">
                            <div class="card-body">
                                <h3 class="card-title">${personaje.name}</h3>
                                <p class="card-text">${personaje.level}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `
            }
            document.getElementById("container_card").innerHTML = html
        })
        .catch(error => alert("no pudimos obtener la información"))
}
obtenerTodos();

/* const listaDigimon = document.getElementById("nombreDigimon");  

listaDigimon.addEventListener('input', () => {
  fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json())
    .then(data => {
      let digimones = data;
      let values = document.getElementById("allDigimon");
      let listado = '';
      for (let digimon in digimones) {
        console.log(digimones[digimon].name);
        listado += `
          <option value="${digimones[digimon].name}"></option>
        `;
        values.innerHTML = listado;
      }
    });
});
 */

/*  */