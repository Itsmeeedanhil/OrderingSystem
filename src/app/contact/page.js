import Header from '../components/header'; // Adjust path if needed

export default function ContactPage() {
    return (
      <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>
          
          <p className="text-lg text-gray-600 mb-6 text-center">
            Have questions or feedback? We would love to hear from you. Please fill out the form below.
          </p>
  
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
  
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Or contact us directly via email:{" "}
              <a href="mailto:info@myordersys.com" className="text-blue-600 hover:underline">
                info@myordersys.com
              </a>
            </p>
          </div>
        </div>
      </div>
      </>
    );
  }
  