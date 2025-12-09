const Connect = () => {
  return (
    <div className="max-w-2xl mx-auto pb-12 md:pb-20 pt-4 md:pt-8 text-center">
      {/* Profile Section */}
      <div className="mb-12">
        <div className="w-64 h-64 md:w-96 md:h-96 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg relative">
          <img
            src="/src/assets/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <h1 className="text-4xl md:text-5xl font-black mb-6">Let's Connect!</h1> */}
        <div className="text-xl text-gray-600 font-serif leading-relaxed space-y-4">
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <p>
            Whether you have a question or just want to say hi, I'm happy to get
            back to you!
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-8 mb-16">
        <a
          href="https://github.com/soo-yean"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors font-bold uppercase tracking-widest text-sm"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sooyeanjang/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition-colors font-bold uppercase tracking-widest text-sm"
        >
          LinkedIn
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
        <h2 className="text-2xl font-bold mb-8">Send me a message</h2>
        <form
          target="_blank"
          action="https://formsubmit.co/sooyeanjang@gmail.com"
          method="POST"
          className="space-y-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-white font-serif"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-white font-serif"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-0 outline-none transition-colors bg-white font-serif resize-none"
              placeholder="Hello..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Let's Connect!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
