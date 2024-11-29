export default function Contact() {
    return (
      <div className="contact-container bg-gray-100 py-10 px-4">
        <section id="contact" className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="font-bold text-4xl text-center mb-8">Contact</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="contact-form bg-white shadow-lg p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Get in Touch</h3>
              <form action="https://formspree.io/f/xqakyazn" method="POST">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="number"
                    name="number"
                    autoComplete="off"
                    className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    autoComplete="off"
                    rows="4"
                    className="w-full border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
  
            {/* Contact Details */}
            <div id="details" className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="font-bold text-2xl mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="images/whatsapp.png"
                    alt="WhatsApp"
                    className="w-8 h-8"
                  />
                  <p>
                    <a href="tel:7531029156" className="text-blue-500">
                      +91 7531029156
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img src="images/gmail.png" alt="Gmail" className="w-8 h-8" />
                  <p>
                    <a href="mailto:h4study@gmail.com" className="text-blue-500">
                      h4study@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <img
                    src="images/placeholder.png"
                    alt="Location"
                    className="w-8 h-8"
                  />
                  <p>Vatika Kunj, Bhondsi, Gurugram (122102)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  