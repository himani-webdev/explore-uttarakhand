function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#F8F8F5] overflow-hidden"
    >

      {/* Heading */}
      <div className="text-center mb-10 md:mb-14">

        <p className="text-[#C49A6C] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm font-semibold mb-4 mt-4"
        style={{ marginTop: "15px" }}>
          Get In Touch
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#243D35] mb-5">
          Let's Plan Your Journey
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base px-2" style={{ marginTop: "5px" }}>
          Have questions or planning your next trip?
          We'd love to hear from you.
        </p>

      </div>

      {/* Contact Form Box */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-5 sm:p-8 md:p-12 mt-6" style={{ marginTop: "20px",marginLeft:"10px" }}>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"style={{ paddingTop: "10px",marginLeft:"5px",paddingLeft: "5px"  }}>

          {/* Name */}
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2" >
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full min-w-0 border border-gray-200 rounded-xl px-4 py-3 sm:py-4 outline-none focus:border-[#243D35] transition"
              style={{ paddingLeft: "8px" }}
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full min-w-0 border border-gray-200 rounded-xl px-4 py-3 sm:py-4 outline-none focus:border-[#243D35] transition"
              style={{ paddingLeft: "8px" }}
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2 w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>

            <input
              type="text"
              placeholder="What is this about?"
              className="w-full min-w-0 border border-gray-200 rounded-xl px-4 py-3 sm:py-4 outline-none focus:border-[#243D35] transition"
              style={{ paddingLeft: "8px" }}
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 w-full">
            <label className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full min-w-0 border border-gray-200 rounded-xl px-4 py-3 sm:py-4 outline-none focus:border-[#243D35] transition resize-none"
              style={{ paddingLeft: "8px" }}
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="button"
              className="w-full sm:w-auto bg-[#243D35] text-white px-8 sm:px-10 py-4 rounded-full font-semibold text-base hover:bg-[#C49A6C] transition duration-300"
            >
              Send Message →
            </button>
          </div>

        </form>

      </div>

    </section>
  );
}

export default Contact;