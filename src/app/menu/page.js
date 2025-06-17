import Header from '../components/header'; // Adjust path if needed

export default function ProductsPage() {
  const products = [
    { name: "Acer Predator Helios 300", description: "High-performance gaming laptop with Intel Core i7 and NVIDIA RTX 3060.", price: "$1,299.99", img: "https://example.com/acer-predator-helios.jpg" },
    { name: "Acer Aspire 5", description: "Affordable laptop for everyday use, featuring Intel Core i5 and 8GB RAM.", price: "$499.99", img: "https://example.com/acer-aspire-5.jpg" },
    { name: "Acer Swift 3", description: "Lightweight ultrabook with AMD Ryzen 5 and 16GB RAM, perfect for productivity.", price: "$799.99", img: "https://example.com/acer-swift-3.jpg" },
    { name: "Acer Nitro 5", description: "Gaming laptop with Intel Core i5 and NVIDIA GTX 1650, ideal for casual gaming.", price: "$849.99", img: "https://example.com/acer-nitro-5.jpg" },
    { name: "Acer Chromebook 14", description: "Affordable Chromebook with Intel Celeron, great for web browsing and simple tasks.", price: "$249.99", img: "https://example.com/acer-chromebook-14.jpg" },
    { name: "Acer ConceptD 7", description: "Professional laptop with Intel Core i9 and NVIDIA RTX 2080, designed for creators.", price: "$2,299.99", img: "https://example.com/acer-conceptd-7.jpg" }
  ];

  return (
    <>
      {/* Include Header component outside the main div1232131 */}
      <Header />

      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Acer Computers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="border rounded-xl p-4 hover:shadow-lg transition">
                <div className="h-40 bg-gray-200 rounded mb-4">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <span className="font-bold text-blue-600">{product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
