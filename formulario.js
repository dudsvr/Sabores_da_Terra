document.getElementById("reservaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const telefone = document.getElementById("telefone");
  const telRegex = /^\d{10,11}$/;

  if (!telRegex.test(telefone.value)) {
    alert("Telefone inválido! Use apenas números com DDD. Ex: 11999999999");
    telefone.focus();
    return;
  }

  alert("Reserva enviada com sucesso!");
  this.reset();
});
