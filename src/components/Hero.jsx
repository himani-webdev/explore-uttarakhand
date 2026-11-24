function Hero() {
  return (
    <section
      className="relative w-full max-w-full min-h-137.5 min-h-150flex items-center bg-cover bg-center overflow-hidden px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90')"
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full min-w-0 max-w-4xl" style={{ paddingLeft: "10px",paddingTop: "70px" }}>

        <p className="uppercase tracking-[2px] sm:tracking-[5px] sm:ml-16 text-xs sm:text-sm mb-6 text-[#E5C9A5]"
       >
          Discover The Himalayas
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 wrap-break-words">
          Explore The <br />
          Beauty Of <br />
          Uttarakhand.
        </h1>

        <p className="text-base sm:text-lg text-gray-200 mb-9 max-w-xl">
          Discover breathtaking mountains, peaceful valleys
          and unforgettable journeys in the heart of nature.
        </p>

        <button className="inline-flex items-center gap-2 whitespace-nowrap bg-[#C49A6C] px-6 sm:px-9 py-4 sm:py-6 rounded-full font-semibold hover:bg-white hover:text-[#243D35] transition duration-300"
        style={{paddingLeft:"5px",paddingRight:"5px"}}>
          <span>Discover Destinations</span>
          <span>→</span>
       </button>

      </div>
    </section>
  );
}

export default Hero;