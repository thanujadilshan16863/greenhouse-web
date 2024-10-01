export default function Contact() {
    return (
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
          <form className="mt-12 max-w-lg mx-auto grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-4 rounded-lg w-full focus:ring focus:ring-green-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-4 rounded-lg w-full focus:ring focus:ring-green-300"
            />
            <textarea
              placeholder="Your Message"
              className="border p-4 rounded-lg w-full focus:ring focus:ring-green-300"
              rows="5"
            />
            <button
              type="submit"
              className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  