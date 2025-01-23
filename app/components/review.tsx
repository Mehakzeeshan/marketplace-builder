import { TiTick } from "react-icons/ti";
import { GrTrophy } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function Review () {
    return (
        <section>
            <div className="grid md:grid-cols-4 grid-cols-2 bg-[#FAF3EA] w-full h-[250px] mt-12 px-1 md:py-24 py-6">
                <div className="flex ">
                <GrTrophy className="text-5xl w-16 h-16"/>
                <div className="pl-2">
                    <h2 className="text-2xl font-bold">High Quality</h2>
                    <p className="text-[#898989]">crafted from top materials</p>
                </div>
                </div>

                <div className="flex">
                <TiTick className="text-5xl w-16 h-16" />
                <div className="pl-2">
                    <h2 className="text-2xl font-bold">Warranty Protection</h2>
                    <p className="text-[#898989]">Over 2 years</p>
                </div>
                </div>

                <div className="flex md:ml-10">
                <FaShippingFast className="text-5xl w-16 h-16"/>
                <div className="pl-2">
                    <h2 className="text-2xl font-bold">Free Shipping</h2>
                    <p className="text-[#898989]">Order over 150 $</p>
                </div>
                </div>

                <div className="flex md:ml-6">
                <BiSupport className="text-5xl w-16 h-16"/>
                <div className="pl-2">
                    <h2 className="text-2xl font-bold">24/7 Support</h2>
                    <p className="text-[#898989]">Dedicated Support</p>
                </div>
                </div>

            </div>

            

        </section>
    )
}