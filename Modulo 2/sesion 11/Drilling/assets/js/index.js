function ghibli(){
    fetch("https://studio-ghibli-films-api.herokuapp.com/api")
        .then(response => response.json())
        .then(data => {
            console.log(
                data["spirited away"]);
            let html = '';
            let dato = data["spirited away"];
            console.log(dato);
            html += `
            <div class="col-md-6 col-sm-12 p-3">
                    <figure class="card">
                        <img src="${dato.poster}" class="card-img-top card-img" alt="...">
                        <figcaption class="card-body">
                                <h3 class="card-title">${dato.title}</h3>
                                <p class="card-text">${dato.synopsis}</p>
                                <span><b>Título romanizado: </b> ${dato.hepburn}</span><br>
                                <span><b>Año de estreno: </b> ${dato.release}</span><br>
                                <span><b>Director: </b>${dato.director}</span><br>
                        </figcaption>
                    </figure>
            </div>
        `
            document.getElementById("container_card").innerHTML = html;
        })
        .catch(error => alert("no pudimos obtener la información"))
}
ghibli();