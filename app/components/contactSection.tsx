import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt,  FaClock } from "react-icons/fa";


export default function ContactSection () {
    return (
        <>
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
                  className="w-12 h-10 ml-14"
                />
                <h1 className="mt-4 text-5xl font-semibold">Contact</h1>
                <div className="flex mt-4 gap-2 ml-2">
                    <h2 className="font-semibold">Home </h2>
                    <SlArrowRight  className="mt-1 font-bold text-xl"/>
                    <p>Contact</p>
                </div>
                </div>
                  </section>

                  <section className="mt-20">
                    <h3 className="text-center text-3xl font-bold">Get In Touch With Us</h3>
                    <p className="text-center mt-10 text-[#9f9f9f] md:mx-64">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                    <div className="md:grid md:grid-cols-2 mt-20">
                        <div className="md:mx-48 mx-2">
                            <div className="flex flex-row gap-6 text-[#000000]">
                            <FaLocationDot className="text-3xl"/>
                           <div>
                            <h4 className="font-semibold text-xl">Address</h4>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                           </div>
                           </div>
                            
                           <div className="flex flex-row gap-6 text-[#000000] mt-10">
                           <FaPhoneAlt className="text-xl"/>
                           <div>
                            <h4 className="font-semibold text-xl">Phone</h4>
                            <p>Mobile: +(84) 546-6789 <br/>
                            Hotline: +(84) 456-6789</p>
                           </div>
                           </div>

                           <div className="flex flex-row gap-6 text-[#000000] mt-10">
                           <FaClock className="text-2xl"/>
                           <div>
                            <h4 className="font-semibold text-xl">Working Time</h4>
                            <p>Monday-Friday: 9:00 - 22:00 <br/>
                            Saturday-Sunday: 9:00 - 21:00</p>
                           </div>
                           </div>

                        </div>

                        <div>
                            <form>
                                <div className="flex flex-col md:mt-0 mt-10 md:mx-0 mx-6">
                                <label className="font-semibold">Your Name</label>
                                <input 
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Abc"
                                className=" border border-[#9f9f9f] mt-6 rounded-xl px-6 py-4 mr-40"
                                />

                                <label className="font-semibold mt-6">Email address</label>
                                <input 
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Abc@def.com"
                                className=" border border-[#9f9f9f] mt-6 rounded-xl px-6 py-4 mr-40"
                                />

                                <label className="font-semibold mt-6">Subject</label>
                                <input 
                                type="name"
                                name="name"
                                id="name"
                                placeholder="This is an optional"
                                className=" border border-[#9f9f9f] mt-6 rounded-xl px-6 py-4 mr-40"
                                />

                                <label className="font-semibold mt-6">Message</label>
                                <input 
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Hi I would like to ask about"
                                className=" border border-[#9f9f9f] mt-6 rounded-xl md:px-6 px-2  py-12 mr-40"
                                />
                                </div>
                            </form>
                            <button className="text-white bg-[#b88e2f] px-16 py-3 rounded-xl mt-10 md:ml-0 ml-6">Submit</button>
                        </div>
                        
                    </div>
                  </section>
        </>
    )
}