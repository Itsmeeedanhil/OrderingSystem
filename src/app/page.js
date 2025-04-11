import Header from '../app/components/header';
import '../app/styles/globals.css';
import '../app/styles/homepage.css';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="font-sans text-gray-800">
        <section className="hero-section">
          <div className="hero-section-overlay">
            <video className="hero-video" autoPlay loop muted playsInline >
            <source src="https://res.cloudinary.com/dkpxdp4hy/video/upload/v1744353210/HeroVideo_on5paq.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="hero-section-content">
            <h2 className="text-4xl font-bold mb-4 leading-tight">Unlock the Future of Computing with OrderByte</h2>
            <p className="text-lg mb-6">Your one-stop solution for powerful computers and tech products. Fast shipping, top-tier quality, and the latest tech trends—all in one place.</p>
            <a href="#products" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105">
              Shop Now
            </a>
          </div>
        </section>

        {/* Product Preview Section */}
        <section id="products" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-600">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border rounded-xl p-4 hover:shadow-xl transition duration-300 transform hover:scale-105">
                  <div className="h-40 bg-gray-200 rounded mb-4">
                    <img src={`https://example.com/product-${item}.jpg`} alt={`Product ${item}`} className="w-full h-full object-cover rounded" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Product {item}</h4>
                  <p className="text-gray-600 mb-2">Short product description goes here.</p>
                  <span className="font-bold text-blue-600">$19.99</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
