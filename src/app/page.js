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

        {/* Hero Section - Popular Categories */}
        <section id="categories" className="relative py-16 bg-gradient-to-r from-blue-50 to-white h-screen">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://example.com/hero-bg.jpg')" }}></div>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h3 className="text-4xl font-bold text-center text-black mb-6 animate__animated animate__fadeInUp">Popular Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-2 border-blue-200 rounded-xl p-6 hover:shadow-2xl hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                  <div className="h-40 bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <img src={`https://example.com/category-${item}.jpg`} alt={`Category ${item}`} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2 text-gray-800">Category {item}</h4>
                  <p className="text-gray-600 mb-4">Explore a variety of products and services under this category.</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">Explore Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>



      </div>
    </>
  );
}
