 import Image from "next/image";
 import { SlArrowRight } from "react-icons/sl";

 const Hero = () => {
    return (
          <section 
          style={{
             backgroundImage: "url('/backgroundImage.png')",
             width: "100%",
             height: "50vh",
             backgroundRepeat: "no-repeat",
             backgroundPosition: "cover",
             position: "relative"
          }}>

          <div className="absolute md:top-20 top-16 md:left-[550px] left-28 text-center">

          <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="w-12 h-10 ml-9"
        />
        <h1 className="mt-4 text-5xl font-semibold">Cart</h1>
        <div className="flex mt-4 gap-2 ml-2">
            <h2 className="font-semibold">Home </h2>
            <SlArrowRight  className="mt-1 font-bold text-xl"/>
            <p>Cart</p>
        </div>
        </div>
          </section>
          
    )
}

export default Hero;