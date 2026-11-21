function Hero() {
  return (
    <section
      className="relative min-h-150 flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90')"
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div
            className="relative z-10 text-white max-w-4xl"
            style={{ marginLeft: "20px" }}
        >
      <p className="uppercase tracking-[5px] ml-16 text-sm mb-6 text-[#E5C9A5]">
            Discover The Himalayas
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Explore The <br />
          Beauty Of <br />
          Uttarakhand.
        </h1>

        <p className="text-lg text-gray-200 mb-9 max-w-xl">
          Discover breathtaking mountains, peaceful valleys
          and unforgettable journeys in the heart of nature.
        </p>

        <button className="bg-[#C49A6C] px-9 py-8 rounded-full font-semibold hover:bg-white hover:text-[#243D35] transition duration-300">
          Discover Destinations →
        </button>

      </div>
    </section>
  );
}

export default Hero;