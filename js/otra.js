function calcularPresupuesto() {
  const formulario = document.querySelector("form");
  const campos = Array.from(formulario.querySelectorAll('input[type="number"]'));
  const valores = campos.map((campo) => Number(campo.value));
  const numeroInvitados = valores[0];

  if (
    campos.some((campo) => campo.value === "") ||
    !Number.isInteger(numeroInvitados) ||
    numeroInvitados <= 0 ||
    valores.slice(1).some((valor) => valor < 0)
  ) {
    alert("Ingresa un número entero de invitados mayor que cero y costos válidos.");
    return;
  }

  const [ , costoComida, costoBebida, decoracion, musica, porcentajePropina] = valores;
  const comidaTotal = numeroInvitados * costoComida;
  const bebidaTotal = numeroInvitados * costoBebida;
  const subtotal = comidaTotal + bebidaTotal + decoracion + musica;
  const propina = subtotal * (porcentajePropina / 100);
  const totalGeneral = subtotal + propina;
  const costoPorInvitado = totalGeneral / numeroInvitados;
  const resultados = [
    comidaTotal,
    bebidaTotal,
    decoracion,
    musica,
    subtotal,
    propina,
    totalGeneral,
    costoPorInvitado,
  ];
  const filas = document.querySelectorAll("tbody tr");

  filas.forEach((fila, indice) => {
    fila.children[1].textContent = resultados[indice].toLocaleString("es-CO");
  });
}