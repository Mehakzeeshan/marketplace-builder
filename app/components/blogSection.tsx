import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { FaUserAlt, FaCalendar, FaTag, FaSearch } from "react-icons/fa";

export default function BlogSection() {
  return (
    <>
      <section
        style={{
          backgroundImage: "url('/backgroundImage.png')",
          width: "100%",
          height: "50vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
          position: "relative",
        }}
      >
        <div className="absolute md:top-20 top-16 md:left-[550px] left-28 text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-12 h-10 ml-9"
          />
          <h1 className="mt-4 text-5xl font-semibold">Blog</h1>
          <div className="flex mt-4 gap-2 ml-2">
            <h2 className="font-semibold">Home </h2>
            <SlArrowRight className="mt-1 font-bold text-xl" />
            <p>Blog</p>
          </div>
        </div>
      </section>

      <div className="md:grid md:grid-cols-3">
        <div className="col-span-2 md:ml-20 ml-6 mt-20">
          <div>
            <Image src="/blog1.png" alt="blog" width={700} height={700} />
            <div className="flex text-[#9f9f9f] gap-8 mt-4">
              <span className="flex gap-4">
                <FaUserAlt className="mt-1" />
                <p>Admin</p>
              </span>

              <span className="flex gap-4">
                <FaCalendar className="mt-1" />
                <p>14 October 2022</p>
              </span>

              <span className="flex gap-4">
                <FaTag className="mt-1" />
                <p>Wood</p>
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold">
              Going all-in with millennial design
            </h2>
            <p className="text-[#9f9f9f] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <p className="mt-6 font-semibold underline hover:text-[#b88e2f]">Read more</p>
          </div>


          <div className="mt-12">
            <Image src="/blog2.png" alt="blog" width={700} height={700} />
            <div className="flex text-[#9f9f9f] gap-8 mt-4">
              <span className="flex gap-4">
                <FaUserAlt className="mt-1" />
                <p>Admin</p>
              </span>

              <span className="flex gap-4">
                <FaCalendar className="mt-1" />
                <p>14 October 2022</p>
              </span>

              <span className="flex gap-4">
                <FaTag className="mt-1" />
                <p>Handmade</p>
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold">
            Exploring new ways of decorating
            </h2>
            <p className="text-[#9f9f9f] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <p className="mt-6 font-semibold underline hover:text-[#b88e2f]">Read more</p>
          </div>


          <div className="mt-12">
            <Image src="/blog3.png" alt="blog" width={700} height={700} />
            <div className="flex text-[#9f9f9f] gap-8 mt-4">
              <span className="flex gap-4">
                <FaUserAlt className="mt-1" />
                <p>Admin</p>
              </span>

              <span className="flex gap-4">
                <FaCalendar className="mt-1" />
                <p>14 October 2022</p>
              </span>

              <span className="flex gap-4">
                <FaTag className="mt-1" />
                <p>Wood</p>
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold">
            Handmade pieces that took time to make
            </h2>
            <p className="text-[#9f9f9f] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <p className="mt-6 font-semibold underline hover:text-[#b88e2f]">Read more</p>
          </div>
        </div>


        
        <div className="col-span-1 mt-20">
        <div className="relative w-60 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-3 pr-10 border border-[#9f9f9f] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <FaSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
    </div>
    <h2 className="text-center mt-8 text-2xl font-semibold">Categories</h2>

    <div className="flex justify-between text-[#9f9f9f] mt-8 px-16 font-semibold">
    <div className="flex flex-col gap-8">
        <p>Crafts</p>
        <p>Design</p>
        <p>Handmade</p>
        <p>Interior</p>
        <p>Wood</p>
    </div>

    <div className="flex flex-col gap-8">
        <p>2</p>
        <p>8</p>
        <p>7</p>
        <p>1</p>
        <p>6</p>
    </div>
    </div>

    <h2 className="text-center mt-12 text-2xl font-semibold">Recent Posts</h2>
    <div className="flex flex-col gap-8 mx-16 mt-8 ml-20">
        <div className="flex gap-6">
            <Image src="/small.png" alt="box" width={100} height={100} />
            <h6 className="font-semibold">Going all-in with millennial design
            <p className="text-[#9f9f9f]">03 Aug 2022</p>
            </h6>
        </div>
       
        <div className="flex gap-6">
            <Image src="/small1.png" alt="box" width={100} height={100} />
            <h6 className="font-semibold">Exploring new ways of decorating
            <p className="text-[#9f9f9f]">03 Aug 2022</p>
            </h6>
        </div>


        <div className="flex gap-6">
            <Image src="/small2.png" alt="box" width={120} height={100} />
            <h6 className="font-semibold">Handmade pieces that took time to make
            <p className="text-[#9f9f9f]">03 Aug 2022</p>
            </h6>
        </div>


        <div className="flex gap-6">
            <Image src="/small3.png" alt="box" width={80} height={100} />
            <h6 className="font-semibold">Modern home in Milan
            <p className="text-[#9f9f9f]">03 Aug 2022</p>
            </h6>
        </div>


        <div className="flex gap-6">
            <Image src="/small4.png" alt="box" width={80} height={100} />
            <h6 className="font-semibold">Colorful office redesign
            <p className="text-[#9f9f9f]">03 Aug 2022</p>
            </h6>
        </div>

    </div>



        </div>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <button className="px-5 py-4 rounded-xl bg-[#b88e2f]">1</button>
        <button className="px-5 py-4 rounded-xl bg-[#f9f1e7]">2</button>
        <button className="px-5 py-4 rounded-xl bg-[#f9f1e7]">3</button>
        <button className="px-5 py-4 rounded-xl bg-[#f9f1e7]">Next</button>
      </div>
    </>
  );
}
