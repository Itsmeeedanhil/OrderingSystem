"use client";
import { useState } from "react";
import Header from '../components/header';
import { printOrder } from '../components/print';

export default function OrderPage() {
  const [connected, setConnected] = useState(false);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const connectShopee = () => {
    setConnected(true);
    alert("Shopee OAuth simulated.\nAccess Token: mock_access_token_123456");
  };

  const fetchProducts = () => {
    const dummyProducts = [
      { id: 1, name: "Wireless Mouse", stock: 100 },
      { id: 2, name: "Bluetooth Headphones", stock: 45 },
      { id: 3, name: "Gaming Keyboard", stock: 30 },
    ];
    setProducts(dummyProducts);
  };

  const fetchOrders = () => {
    const dummyOrders = [
      { orderId: "20250601A1", buyer: "John Doe", total: 899.0, status: "Processed" },
      { orderId: "20250602B2", buyer: "Jane Smith", total: 1499.0, status: "Shipped" },
      { orderId: "20250603C3", buyer: "Carlos Tan", total: 320.5, status: "Pending" },
    ];
    setOrders(dummyOrders);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">
            Shopee ISV Integration Demo
          </h1>

          {/* Shopee Connect */}
          <div className="text-center mb-10">
            <button
              onClick={connectShopee}
              className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Connect Shopee Shop
            </button>
            {connected && (
              <p className="text-green-600 mt-2">Shop connected successfully!</p>
            )}
          </div>

          {/* Product Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-2">Synced Products</h2>
            <button
              onClick={fetchProducts}
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition mb-4"
            >
              Fetch Products
            </button>
            {products.length > 0 ? (
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {JSON.stringify(products, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-500">No products fetched yet.</p>
            )}
          </div>

          {/* Orders Section */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
            <button
              onClick={fetchOrders}
              className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 transition mb-4"
            >
              Fetch Orders
            </button>

            {orders.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-300">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="border p-2 text-left">Order ID</th>
                      <th className="border p-2 text-left">Buyer</th>
                      <th className="border p-2 text-right">Total (₱)</th>
                      <th className="border p-2 text-center">Status</th>
                      <th className="border p-2 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.orderId} className="hover:bg-gray-50">
                        <td className="border p-2">{order.orderId}</td>
                        <td className="border p-2">{order.buyer}</td>
                        <td className="border p-2 text-right">
                          {order.total.toFixed(2)}
                        </td>
                        <td className="border p-2 text-center">{order.status}</td>
                        <td className="border p-2 text-center">
                          <button
                            onClick={() => printOrder(order)}
                            className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
                          >
                            Print
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 mt-2">No orders fetched yet.</p>
            )}
          </div>

          <p className="text-sm text-gray-500 mt-10 text-center">
            This page is a mock demo for Shopee OpenAPI integration testing.
          </p>
        </div>
      </div>
    </>
  );
}
