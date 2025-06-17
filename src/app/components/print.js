// components/print.js
export function printOrder(order) {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Order Receipt - ${order.orderId}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #EF4444; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { text-align: left; padding: 10px; border: 1px solid #ccc; }
          th { background-color: #f3f4f6; }
        </style>
      </head>
      <body>
        <h1>Shopee Order Receipt</h1>
        <table>
          <tr><th>Order ID</th><td>${order.orderId}</td></tr>
          <tr><th>Buyer</th><td>${order.buyer}</td></tr>
          <tr><th>Total</th><td>₱ ${order.total.toFixed(2)}</td></tr>
          <tr><th>Status</th><td>${order.status}</td></tr>
          <tr><th>Printed On</th><td>${new Date().toLocaleString()}</td></tr>
        </table>
        <p style="margin-top: 40px; font-style: italic;">Thank you for your order!</p>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}
