import Link from "next/link"

export default function ProductsList () {
    return(

        <section>
      {/* row 1 */}
        <div className="md:flex md:justify-center md:gap-8 mt-10 mx-20">
        <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0 relative group overflow-hidden">
          <Link href="/dynamic/stylish-cafe-chair">
          <div
            style={{
              backgroundImage: "url('/Images.png')",
              height: "50vh",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
            className="group-hover:blur-md transition-all duration-300"
          >
            <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
              -30%
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            Add to Cart
          </button>
          <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[] ml-4">
            Syltherine
          </h3>
          <p className="text-[#898989] mt-2  ml-4 font-medium">
            Stylish cafe chair
          </p>
          <div className="flex gap-2 ml-4 mt-2">
            <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 2.500.000</h3>
            <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
              Rp 3.500.000
            </p>
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
          <h3 className="text-[#3a3a3a] font-bold text-lg ml-4">
            Rp 150.000
          </h3>
          </Link>
        </div>

        <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0 relative group overflow-hidden">
          <Link href="/dynamic/luxury-big-sofa">
          <div
            style={{
              backgroundImage: "url('/Images (1).png')",
              height: "50vh",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "cover",
              position: "relative",
            }}
            className="group-hover:blur-md transition-all duration-300"
          >
            <span className="rounded-full bg-[#e97171] text-white px-2 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
              -50%
            </span>
          </div>
          {/* Add to Cart Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            Add to Cart
          </button>
          <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[] ml-4">
            Lolito
          </h3>
          <p className="text-[#898989] mt-2  ml-4 font-medium">
            Luxury big sofa
          </p>
          <div className="flex gap-1 ml-4 mt-2">
            <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 7.000.000</h3>
            <p className="line-through text-[#b0b0b0] mt-1 font-normal ">
              Rp 14.000.000
            </p>
          </div>
          </Link>
        </div>

        <div className="bg-[#f4f5f7] md:w-[380px] w-[210px] h-[430px] mt-6 md:mt-0 relative group overflow-hidden">
          <Link href="/dynamic/outdoor-bar-table-and-sofa">
          <div
            style={{
              backgroundImage: "url('/Images (2).png')",
              height: "50vh",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "cover",
              position: "relative",
            }}
            className="group-hover:blur-md transition-all duration-300"
          >
            <span className="rounded-full bg-[#2ec1ac] text-white px-3 py-4 absolute top-5 md:left-[170px] left-36 font-semibold ">
              New
            </span>
          </div>
          {/* Add to Cart Button */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            Add to Cart
          </button>
          <h3 className="text-[#3a3a3a] font-bold text-2xl md:mt-[8px] mt-[] ml-4">
            Respira
          </h3>
          <p className="text-[#898989] mt-2  ml-4 font-medium">
            Outdoor bar table and sofa
          </p>
          <div className="flex gap-2 ml-4 mt-2">
            <h3 className="text-[#3a3a3a] font-bold text-lg">Rp 500.000</h3>
          </div>
          </Link>
        </div>
      </div>
       
       {/* row 2 */}
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

      </section>

    )
}