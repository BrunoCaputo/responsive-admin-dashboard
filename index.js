// Executes when document is loaded
document.addEventListener("DOMContentLoaded", (ev) => {
  document.getElementById("recent-orders--table").appendChild(buildTableBody());
});

const buildTableBody = () => {
  const recentOrderData = RECENT_ORDER_DATA;

  const tbody = document.createElement("tbody");

  let bodyContent = "";
  for (const row of recentOrderData) {
    bodyContent += `
      <tr>
        <td>${row.productName}</td>
        <td>${row.productNumber}</td>
        <td>${row.payment}</td>
        <td class="${row.statusColor}">${row.status}</td>
        <td class="primary">Details</td>
      </tr>
    `;
  }

  tbody.innerHTML = bodyContent;

  return tbody;
};
