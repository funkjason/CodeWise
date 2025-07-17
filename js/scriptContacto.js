let map = L.map('mapa').setView([41.415473, 2.186601], 15);

// el mapa 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ubicación de la empresa
const empresaCoords = [41.415473, 2.186601];
let markerEmpresa = L.marker(empresaCoords)
  .bindPopup('Ubicación Empresa CodeWise')
  .addTo(map)
  .openPopup();

//  cliente
let markerCliente = L.marker([41.4135, 2.185], { draggable: true })
  .bindPopup('Tu ubicación (muéveme)')
  .addTo(map)
  .openPopup();


let controlRuta = L.Routing.control({
  waypoints: [
    markerCliente.getLatLng(),
    L.latLng(empresaCoords)
  ],
  routeWhileDragging: true,
  draggableWaypoints: false,
  addWaypoints: false,
  showAlternatives: false,
  createMarker: function () { return null; },
  show: false, 
}).addTo(map);

// Actualizar la ruta 
markerCliente.on('dragend', function () {
  controlRuta.setWaypoints([
    markerCliente.getLatLng(),
    L.latLng(empresaCoords)
  ]);
});

// Añadir buscador al mapa
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    const coords = e.geocode.center;

    // Mover el marcador del cliente a la nueva dirección
    markerCliente.setLatLng(coords)
      .setPopupContent("Ubicación seleccionada")
      .openPopup();

    // Centrar el mapa en esa ubicación
    map.setView(coords, 15);

    // Actualizar ruta
    controlRuta.setWaypoints([
      markerCliente.getLatLng(),
      L.latLng(empresaCoords)
    ]);
  })
  .addTo(map);

