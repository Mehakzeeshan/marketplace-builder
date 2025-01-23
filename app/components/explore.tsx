import Image from "next/image";
import { FaCircle } from "react-icons/fa";

export default function Explore () {
    return (
        <>
        <section className="bg-[#FCF8F3] md:h-[750px] h-[400px] w-full mt-24">
            <div className="grid grid-cols-3 md:pt-20 pt-14">
                <div className="ml-5 md:my-32">
                <h1 className="md:text-4xl text-xl font-bold text-[#3a3a3a]">50+ Beautiful rooms inspiration</h1>
                <p className="text-[#616161] md:mt-4 font-medium">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <button className="mt-6 text-white font-semibold bg-[#b88e2f] px-8  md:py-3">Explore Now</button>
                </div>

                <div className="ml-9">
                <Image src="/explore1.png" alt="Living Room" width={450} height={500}/>

                </div>

                <div className="ml-5">
                <Image src="/explore2.png" alt="Living Room" width={400} height={250}/>
                <p className="flex mt-12 gap-4 text-[#d8d8d8]"><FaCircle className="text-[#b88e2f]    outline outline-1 outline-[#b88e2f] outline-offset-4  rounded-full"/> <FaCircle /> <FaCircle /> <FaCircle /> </p>

                </div>
            </div>
        </section>


        <section className="mt-20">
            <h3 className="text-center text-[#616161] text-xl font-bold">Share your setup with</h3>
            <h1 className="text-center text-[#3a3a3a] text-4xl font-bold">#FuniroFurniture</h1>
            <Image src="/furniture.png" alt="Furnitures" width={1500} height={1200}/>
             
        </section>
        </>
    )
}