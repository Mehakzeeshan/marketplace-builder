export default function HeroSection() {
    return (
      <section
        style={{
          backgroundImage: "url('/heroImage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          position: "relative", // Ensures child absolute elements are positioned relative to this
        }}
      >
        <div
          className="
          absolute 
          h-[420px] 
          w-[90%] 
          sm:w-[620px] 
          bg-[#fff3e3] 
          top-[100px] 
          left-1/2 
          transform -translate-x-1/2 
          md:top-[120px] 
          md:left-[580px] 
          md:transform-none 
          rounded-xl 
          px-6 
          sm:px-12 
          pt-8 
          sm:pt-10"
        >
          <h4 className="text-base sm:text-lg font-medium mb-2 text-[#333333] text-center sm:text-left">
            New Arrival
          </h4>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-[#b88e2f] text-center sm:text-left">
            Discover Our New Collection
          </h1>
          <p className="text-[#333333] font-medium text-sm sm:text-lg mb-6 mt-5 text-center sm:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="px-8 sm:px-16 py-3 sm:py-6 mt-4 bg-[#b88e2f] font-bold text-white hover:bg-[#b88e2f] transition">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    );
  }
  