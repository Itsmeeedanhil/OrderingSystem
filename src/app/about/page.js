export default function AboutPage() {
    return (
      <div className="min-h-screen bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* About Section */}
          <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">About MyOrderSys</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              MyOrderSys is a leading platform offering seamless and efficient online ordering solutions. Our mission is to provide businesses and consumers with an easy way to shop and track orders.
            </p>
  
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  At MyOrderSys, our mission is to simplify the ordering process for businesses and customers alike. We aim to enhance the shopping experience by providing an intuitive platform that makes order management fast and hassle-free.
                </p>
              </div>
  
              <div className="w-full sm:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  We envision a future where every business, from small shops to large enterprises, can easily manage their orders with minimal effort. Our goal is to empower businesses and customers with advanced tools that ensure efficiency and convenience.
                </p>
              </div>
            </div>
          </section>
  
          {/* Company Details Section */}
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">Company Information</h3>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Established</h4>
                <p className="text-gray-600">2015</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">New York, USA</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Our Team</h4>
                <p className="text-gray-600">100+ professionals</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  