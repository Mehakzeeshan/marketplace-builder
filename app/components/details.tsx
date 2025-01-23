import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Details() {
  return (
    <>
      <div className="flex py-6 pl-16 gap-6 bg-[#f9f1e7]">
        <h3 className="text-[#9f9f9f]">Home</h3>
        <SlArrowRight className="py-1 mt-1 font-extrabold text-lg" />
        <h3 className="text-[#9f9f9f]">Shop</h3>
        <SlArrowRight className="py-1 mt-1 font-extrabold text-lg" />
        <h3 className="font-semibold flex gap-8">
          <p>| </p>Asgaard Sofa
        </h3>
      </div>

      <section className="md:grid md:grid-cols-2 mt-20 gap-8">
        {/* First Column */}
        <div className="flex flex-row items-start mx-20 gap-8">
          {/* Small Images */}
          <div className="flex flex-col gap-4">
            <Image
              src="/sofa1.png"
              alt="sofa"
              width={80}
              height={100}
              className="rounded-xl"
            />
            <Image
              src="/sofa2.png"
              alt="sofa"
              width={80}
              height={100}
              className="bg-[#f9f1e7] rounded-xl"
            />
            <Image
              src="/sofa3.png"
              alt="sofa"
              width={80}
              height={100}
              className="bg-[#f9f1e7] rounded-xl"
            />
            <Image
              src="/sofa4.png"
              alt="sofa"
              width={80}
              height={100}
              className="bg-[#f9f1e7] rounded-xl"
            />
          </div>

          {/* Large Image */}
          <div className="flex items-center">
            <Image
              src="/sofa.png"
              alt="sofa"
              width={350}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        {/* Second Column */}
        <div className="mx-8">
          <h1 className="text-3xl font-semibold">Asgaard Sofa</h1>
          <p className="text-[#9f9f9f] font-semibold text-lg mt-3">
            Rs.250,000.00
          </p>
          <div className="flex gap-4 mt-3">
            <span>⭐⭐⭐⭐⭐</span>
            <span>|</span>
            <span className="text-[#9f9f9f]">5 Customer Reviews</span>
          </div>
          <p className="mt-3">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>

          <h3 className="mt-4 text-[#9f9f9f] font-semibold">Size</h3>
          <div className="flex gap-3 mt-3">
            <button className="text-white bg-[#b88e2f] px-4 py-2 rounded-xl">
              L
            </button>
            <button className="bg-[#f9f1e7] px-3 py-2 rounded-xl">XL</button>
            <button className="bg-[#f9f1e7] px-3 py-2 rounded-xl">XS</button>
          </div>

          <h3 className="mt-4 text-[#9f9f9f] font-semibold">Color</h3>
          <div className="flex gap-3 mt-2">
            <button className="w-6 h-6 rounded-full bg-purple-500"></button>
            <button className="w-6 h-6 rounded-full bg-black"></button>
            <button className="w-6 h-6 rounded-full bg-[#b88e2f]"></button>
          </div>

          <div className="flex gap-3 mt-5">
            <div className="flex items-center gap-2 border border-black px-4 py-2 rounded-xl">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="border border-black  px-6 py-2 rounded-xl">
              Add To Cart
            </button>
            <button className="border border-black px-5 py-2 rounded-xl">
              + Compare
            </button>
          </div>

          <div className="border-t border-[#d9d9d9] px-3 mt-6 pt-4 text-[#9f9f9f]">
            <p>SKU : SS001</p>
            <p className="mt-2">Category : Sofas</p>
            <p className="mt-2">Tags : Sofa, Chair, Home, Shop</p>
            <p className="flex items-center gap-2 mt-2">
              Share :
              <FaFacebook className="text-black" />
              <FaLinkedin className="text-black" />
              <FaTwitter className="text-black" />
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex justify-center mt-10 gap-20 text-xl font-semibold border-t border-[#9f9f9f] pt-12">
          <h2>Description</h2>
          <h2 className="text-[#9f9f9f]">Additional Information</h2>
          <h2 className="text-[#9f9f9f]">Reviews [5]</h2>
        </div>

        <p className="text-[#9f9f9f] mt-10 md:mx-36">
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable
          active stereo speaker takes the unmistakable look and sound of
          Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9f9f9f] mt-6 md:mx-36">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel
        </p>
        <Image
          src="/sofaset.png"
          alt="sofa set"
          width={1000}
          height={1000}
          className="mt-12 md:ml-28"
        />
      </section>

      <section className="border-t border-[#9f9f9f] mt-12">
        <h2 className="mt-14 text-center text-4xl font-semibold">
          Related Products
        </h2>

        <div className="md:flex justify-center gap-8 mt-10 mx-20">
      <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] relative group overflow-hidden">
        <Link href="/dynamic/night-lamp">
        {/* Background Image Section */}
        <div
          style={{
            backgroundImage: "url('/Images (3).png')",
            height: "50vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
          className="group-hover:blur-md transition-all duration-300"
        ></div>

        {/* Add to Cart Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Add to Cart
        </button>

        {/* Product Details */}
        <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
          Grifo
        </h3>
        <p className="text-[#898989] mt-2 ml-4 font-medium">Night Lamp</p>
        <div className="flex gap-2 ml-4 mt-2">
          <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 1.500.000</h3>
        </div>
        </Link>
      </div>

      <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0 relative group overflow-hidden">
        <Link href="/dynamic/small-mug-sofa">
        {/* Background Image Section */}
        <div
          style={{
            backgroundImage: "url('/Images (4).png')",
            height: "50vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
          className="group-hover:blur-md transition-all duration-300"
        >
          {/* New Tag */}
          <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold">
            New
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Add to Cart
        </button>

        {/* Product Details */}
        <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
          Muggo
        </h3>
        <p className="text-[#898989] mt-2 ml-4 font-medium">Small mug</p>
        <h3 className="text-[#3a3a3a] font-bold text-lg ml-4">Rp 150.000</h3>
        </Link>
      </div>

      <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0 relative group overflow-hidden">
       <Link href="/dynamic/living-sofa">
        {/* Background Image Section */}
        <div
          style={{
            backgroundImage: "url('/Images (5).png')",
            height: "50vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
          className="group-hover:blur-md transition-all duration-300"
        >
          {/* Discount Tag */}
          <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold">
            -50%
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Add to Cart
        </button>

        {/* Product Details */}
        <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
          Pingky
        </h3>
        <p className="text-[#898989] mt-2 ml-4 font-medium">Cute bed set</p>
        <div className="flex gap-2 ml-4 mt-2">
          <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
          <p className="line-through text-[#b0b0b0] mt-1 font-normal">
            Rp 14.000.000
          </p>
        </div>
        </Link>
      </div>

      <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0 relative group overflow-hidden">
        <Link href="/dynamic/single-sofa">
        {/* Background Image Section */}
        <div
          style={{
            backgroundImage: "url('/Images (6).png')",
            height: "50vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
          className="group-hover:blur-md transition-all duration-300"
        >
          {/* New Tag */}
          <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold">
            New
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Add to Cart
        </button>

        {/* Product Details */}
        <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[-70px] ml-4">
          Potty
        </h3>
        <p className="text-[#898989] mt-2 ml-4 font-medium">
          Minimalist flower pot
        </p>
        <div className="flex gap-2 ml-4 mt-2">
          <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 500.000</h3>
        </div>
        </Link>
      </div>
      </div>
        <button className="text-[#b88e2f] px-20 py-3 border-[#b88e2f] border  outline outline-[#b88e2f] outline-1 mt-12 md:ml-[500px] ml-14 font-bold">
          <Link href="/shop">Show More</Link>
        </button>
      </section>
    </>
  );
}
