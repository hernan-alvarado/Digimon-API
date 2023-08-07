function mensajeUno() {
    swal ("Joe Kido" , "Soy el mejor amigo del grupo y a veces soy indeciso o torpe. Mi emblema es el de la sinceridad, porque rara vez miento.");
    
}
document.getElementById("joekido").onclick = mensajeUno;


function mensajeDos() {
    swal ("Myotismon" , "Soy un Digimon con una personalidad astuta y estratégica, lo que me convierte en un peligro. Al ser una criatura nocturna, la luz del sol me debilita.");
    
}
document.getElementById("myotismon").onclick = mensajeDos;


function mensajeTres() {
    swal ("Sora Takenouchi" , "Soy la poseedora del emblema del amor y una muy buena amiga. Me destaco por mi papel maternal dentro del grupo, apoyando y cortando las discusiones entre Taichi y Yamato.");
    
}
document.getElementById("sora").onclick = mensajeTres;



let selectDigimones = document.getElementById("digimon");

async function getDigimones(datos) {
    try {
        let urlBase = "https://digimon-api.vercel.app/api/digimon";
        let response = await fetch(urlBase);
        let digimones = await response.json();

        let acumulador = "<option value='0'>Selecciona tu digimon</option>";
        digimones.forEach((digimon) => {
            acumulador += `<option value="${
                digimon.name
            }">${digimon.name.toUpperCase()}</option>`;
        });
        selectDigimones.innerHTML = acumulador;
    } catch (error) {
        alert("Ha ocurrido un error el consultar los digimones");
    }
}

function getDigimon(nombre) {
    let url = "https://digimon-api.vercel.app/api/digimon/name/" + nombre;
    fetch(url)
        .then((response) => response.json())
        .then((digimon) => {
            mostrarModal(digimon[0]);
        })
        .catch((error) => {
            console.log(error)
            alert("Ha ocurrido un error al consultar el digimon.");
        });
}

function main() {
    getDigimones();
}

main();

selectDigimones.addEventListener("change", function () {
    getDigimon(selectDigimones.value);
});



function mostrarModal(digimon) {
    const myModal = new bootstrap.Modal("#exampleModal");
    document.getElementById("nombreDigimon").innerText = digimon.name;

    let imagenModal = document.querySelector("#exampleModal img");
    imagenModal.setAttribute("src", digimon.img);
    imagenModal.setAttribute("alt", digimon.name);

    document.getElementById("nivelDigimon").innerText = digimon.level;

    //mostrar modal una vez que tenga todos los datos
    myModal.show();
}

$.ajax({
    type: "get",
    url: "https://digimon-api.vercel.app/api/digimon",
    dataType: "json",
    success: function (response) {
        tabla(response);
    }
});
