function About() {
  return (
    <section id="about" className="mb-20 py-26 px-8 md:px-16 bg-white">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ paddingLeft: "3px",paddingTop: "20px" }}>

        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSSK7q1ep--NvcPuozc3LQ0c96ILrythGaGxhfrEGdA&s=10"
            alt="Beautiful Nature"
            className="w-full h-125 object-cover rounded-2xl shadow-xl"
          />

          <div className="absolute bottom-6 right-6 bg-white p-6 rounded-2xl shadow-lg" style={{height:"60px",width:"99px",paddingLeft:"3px"}}>
            <h3 className="text-3xl font-bold text-[#243D35]" >100%</h3>
            <p className="text-gray-500 text-sm">Natural Beauty</p>
          </div>
        </div>

        <div>
          <p className="text-[#C49A6C] uppercase tracking-[4px] text-sm font-semibold mb-5">
            About Uttarakhand
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#243D35] leading-tight mb-7">
            Where Nature Meets <br />
            Peace & Adventure.
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            Uttarakhand, also known as Devbhoomi, is one of the
            most beautiful states of India. Surrounded by the
            majestic Himalayas, it offers breathtaking mountains,
            peaceful rivers and beautiful valleys.
          </p>

          <p className="text-gray-500 leading-8 mb-8">
            From the spiritual beauty of Rishikesh to the snowy
            mountains of Auli, every destination offers a unique
            experience and unforgettable memories.
          </p>

          <div className="grid grid-cols-3 gap-5 mb-9" >
            <div>
              <h3 className="text-3xl font-bold text-[#243D35]">13</h3>
              <p className="text-gray-500 text-sm mt-2">Districts🏘️</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#243D35]">4++</h3>
              <p className="text-gray-500 text-sm mt-2">Famous Dhams🕉️</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#243D35]">∞</h3>
              <p className="text-gray-500 text-sm mt-2">Memories❤️</p>
            </div>
          </div>

          <button className="bg-[#243D35] text-white px-8 py-4 rounded-full hover:bg-[#C49A6C] transition duration-300"
          style={{height:"30px",width:"36%", marginBottom:"10px",marginTop:"18px",marginLeft:"6px"}}>
            Discover More →
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;