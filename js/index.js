
// utilizando json para las noticias
const contenedor = document.getElementById("noticias-container");
fetch("data/noticias.json")
  .then((res) => res.json())
  .then((datos) => {
    contenedor.innerHTML = "";
    datos.forEach((noticia) => {
      const div = document.createElement("div");
      div.classList.add("noticia");
      div.innerHTML = `
          <h3>${noticia.titulo}</h3>
          <p><small>${noticia.fecha} | ${noticia.autor}</small></p>
          <p>${noticia.contenido}</p>
        `;
      contenedor.appendChild(div);
    });
  })
  .catch((error) => {
    contenedor.innerHTML = "<p>No se pudieron cargar las noticias.</p>";
    console.error(error);
  });

// ===========imagenes de la seccion===================
const imagenesBanner = [
  './assets/images/bannernav.jpg',
  './assets/images/imagenSeccion1.jpg',
  './assets/images/imagenSeccion2.jpg',
  './assets/images/imagenSeccion3.jpg'
];

let indiceBanner = 0;
const bannerDiv = document.getElementById('banner-slider');

function cambiarFondo() {
  bannerDiv.style.backgroundImage = `url('${imagenesBanner[indiceBanner]}')`;
  indiceBanner = (indiceBanner + 1) % imagenesBanner.length;
}

cambiarFondo(); 
setInterval(cambiarFondo, 8000); //8 segundos


