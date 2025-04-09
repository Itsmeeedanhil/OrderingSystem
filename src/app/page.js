export default function HomePage() {
    return (
      <div className="font-sans text-gray-800">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">MyOrderSys</h1>
            <nav className="hidden md:flex space-x-6 font-medium">
              <a href="#" className="hover:text-blue-600">Home</a>
              <a href="#products" className="hover:text-blue-600">Products</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#cart" className="relative">
                🛒
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">2</span>
              </a>
              <a href="#login" className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">Login</a>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="bg-gray-100 py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Welcome to MyOrderSys</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your simple and fast ordering platform. Browse products, place orders, and track them with ease.
            </p>
            <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Shop Now
            </a>
          </div>
        </section>
  
        {/* Product Preview Section */}
        <section id="products" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-xl p-4 hover:shadow-lg transition">
                  <div className="h-40 bg-gray-200 rounded mb-4"></div>
                  <h4 className="text-lg font-semibold mb-2">Product {item}</h4>
                  <p className="text-gray-600 mb-2">Short product description goes here.</p>
                  <span className="font-bold text-blue-600">$19.99</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  