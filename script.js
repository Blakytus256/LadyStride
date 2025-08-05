const inputs = document.querySelectorAll('.input-group input, .input-group textarea');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.checkValidity()) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  });
});
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío real
  alert("Gracias por contactarnos. Te responderemos pronto.");
  form.reset();
});
