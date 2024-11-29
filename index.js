function calculate() {
  const price = parseFloat(document.getElementById('price').value);
  const lastReading = parseFloat(document.getElementById('lastReading').value);
  const currentReading = parseFloat(document.getElementById('currentReading').value);

  if (isNaN(price) || isNaN(lastReading) || isNaN(currentReading)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  if (currentReading < lastReading) {
    alert("La medición actual no puede ser menor que la última medición.");
    return;
  }

  const consumption = currentReading - lastReading; // en este paso se calcula el gasto, a la lectura actual se le resta la ultima lectura  y se calcula consumision
  const totalCost = consumption * price; // la consumision por el precio da el resultado final del gasto total 

  const resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <p><strong>Consumo total:</strong> ${consumption.toFixed(2)} kWh</p>
    <p><strong>Costo total:</strong> $${totalCost.toFixed(2)}</p>
  `;
}
