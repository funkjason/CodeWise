
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");

const producto = document.getElementById("producto");
const plazo = document.getElementById("plazo");
const extras = document.querySelectorAll(".extra");
const total = document.getElementById("total");

const form = document.getElementById("form-presupuesto");

function calcularPresupuesto() {
  let precioBase = parseFloat(producto.value);
  let sumaExtras = 0;

  extras.forEach(extra => {
    if (extra.checked) sumaExtras += parseFloat(extra.value);
  });

  let subtotal = precioBase + sumaExtras;

  // Descuento si el plazo es corto
  const plazoValor = parseInt(plazo.value);
  if (plazoValor && plazoValor <= 7) {
    subtotal *= 0.9; 
  }

  total.textContent = `${subtotal.toFixed(2)}€`;
}

// Eventos para recalcular
producto.addEventListener("change", calcularPresupuesto);
plazo.addEventListener("input", calcularPresupuesto);
extras.forEach(extra => extra.addEventListener("change", calcularPresupuesto));

// Validación de campos
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombreValido = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{1,15}$/.test(nombre.value);
  const apellidosValido = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{1,40}$/.test(apellidos.value);
  const telefonoValido = /^[0-9]{9}$/.test(telefono.value);
  const emailValido = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email.value);

  if (!nombreValido) {
    alert("El nombre solo puede contener letras (máx. 15 caracteres)");
    return;
  }
  if (!apellidosValido) {
    alert("Los apellidos solo pueden contener letras (máx. 40 caracteres)");
    return;
  }
  if (!telefonoValido) {
    alert("El teléfono debe tener exactamente 9 números");
    return;
  }
  if (!emailValido) {
    alert("Correo electrónico no válido");
    return;
  }

  alert("¡Formulario enviado correctamente!");
  form.reset();
  total.textContent = "0€";
});

