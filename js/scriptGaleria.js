$(document).ready(function() {
  const imagenes = [
    '../assets/images/imagen1.jpg',
    '../assets/images/imagen2.jpg',
    '../assets/images/imagen3.jpg',
    '../assets/images/imagen4.jpg',

  ];

  imagenes.forEach(imagen => {
    $('#imagenes').append(`
      <div class="galeria-item">
        <img src="${imagen}" alt="Imagen de la galería">
      </div>
    `);
  });
});

