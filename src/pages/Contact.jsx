function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 bg-[#F8F8F5]">

      <div className="text-center mb-14">

        <p className="text-[#C49A6C] uppercase tracking-[4px] text-sm font-semibold mb-4"style={{ marginTop: "15px" }}>
          Get In Touch
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#243D35] mb-5">
          Let's Plan Your Journey
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto" style={{ marginLeft: "370px" }}>
          Have questions or planning your next trip?
          We'd love to hear from you.
        </p>

      </div>

      <div className="max-w-4xl h-96 mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12" style={{ marginLeft: "30px" ,marginTop: "10px" }}>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6"style={{ marginLeft: "10px" , }}>

          <div>
            <label className="block text-gray-700 font-medium mb-2" style={{ marginTop: "10px" }}>
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#243D35] transition"
              style={{ paddingLeft: "10px"}}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2" style={{ marginTop: "10px" }}>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#243D35] transition"
              style={{ paddingLeft: "10px"}}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>

            <input
              type="text"
              placeholder="What is this about?"
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#243D35] transition"
              style={{ paddingLeft: "10px"}}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Your Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-[#243D35] transition resize-none"
               style={{ paddingLeft: "10px"}}
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="button"
              className="bg-[#243D35] text-white px-10 py-7 rounded-full font-semibold hover:bg-[#C49A6C] transition duration-300"
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