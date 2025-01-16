
// Formatear la fecha
function formatDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

// Establecer la fecha en el recibo
document.getElementById('date').textContent = formatDate();

// Establecer el nombre del gerente
document.getElementById('manager-name').textContent = "Diego Cuellar";

// Agregar un producto
document.getElementById('add-item').addEventListener('click', () => {
  const tableBody = document.querySelector("#items-table tbody");
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td contenteditable="true">Nuevo Producto</td>
    <td contenteditable="true" class="price">0.00</td>
  `;
  tableBody.appendChild(newRow);
  updateTotal();
});

// Actualizar el total al editar precios
document.querySelector("#items-table").addEventListener('input', () => {
  updateTotal();
});

// Calcular y actualizar el total
function updateTotal() {
  let total = 0;
  const prices = document.querySelectorAll('.price');
  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });
  document.getElementById('total-amount').textContent = total.toFixed(2);
}

// Imprimir el recibo
document.getElementById('print-invoice').addEventListener('click', (event) => {
  event.preventDefault();
  window.print();
});
