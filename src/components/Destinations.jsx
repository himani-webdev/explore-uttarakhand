const destinations = [
  {
    name: "Mussoorie",
    location: "Dehradun, Uttarakhand",
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
    description: "The Queen of Hills"
  },
  {
    name: "Nainital",
    location: "Nainital, Uttarakhand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1li9exLOG0IQAbvZ76nzntZEaMnmWVpbMj8NMwpmnw&s=10",
    description: "City of Lakes"
  },
  {
    name: "Rishikesh",
    location: "Uttarakhand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXtLLhZQ3lVOouxbABR4yv9gtBzLenR_el24EY3uMOQ&s=10",
    description: "The Yoga Capital"
  },
  {
    name: "Kedarnath",
    location: "Rudraprayag, Uttarakhand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_6LdiTMTll_f9wVOnqO7qM7BqtE6j6rNqlWiaXlxUQ&s=10",
    description: "Land of Lord Shiva"
  },
  {
    name: "Auli",
    location: "Chamoli, Uttarakhand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXALLtTF0ygPuLjItPu9mAKUw8zTcl5yx9R5mG_0MKg&s=10",
    description: "Paradise of Snow"
  },
  {
    name: "Chopta",
    location: "Rudraprayag, Uttarakhand",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXGntJOi564pGNs5sGqd1fkGSFi-mY57jcV8bu-cp4A&s=10",
    description: "Mini Switzerland"
  }
];

function Destinations() {
  return (
    <section id="destinations" className="py-24 px-8 md:px-16 bg-[#F8F8F5] "style={{ marginTop: "20px" }}>

      <div className="text-center mb-16">

        <p className="text-[#C49A6C] uppercase tracking-[4px] text-sm font-semibold mb-4">
          Explore Uttarakhand
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#243D35] mb-5" style={{ marginTop: "2px" }}>
          Popular Destinations
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto" style={{marginTop: "2px" }}>
          Discover the most beautiful places of Uttarakhand
          and experience the magic of nature.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 "style={{ marginTop: "2px" }}>

        {destinations.map((place, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all
             duration-500 hover:-translate-y-2 group border border-gray-100 "
            style={{ marginLeft: "5px",marginTop: "15px" }}
          >

            <div className="h-64 overflow-hidden" >

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-6" style={{ marginLeft: "9px" ,marginTop: "9px" }}>

              <p className="text-xs text-[#C49A6C] font-semibold uppercase tracking-wider mb-3">
                {place.location}
              </p>

              <h3 className="text-2xl font-bold text-[#243D35] mb-3">
                {place.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {place.description}
              </p>

              <button className="mt-6 text-[#243D35] font-semibold text-sm hover:text-[#C49A6C] transition" style={{ marginBottom: "10px" }}>
                Explore More →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Destinations;