import Link from "next/link";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

export default function CartSection () {
    return (
        <section className="grid md:grid-cols-3 gap-3">
          <div className="col-span-2">
            <div className="flex bg-[#f9f1e7] mt-16 py-4 md:px-14 md:gap-28 gap-6 font-semibold text-xl mx-2">
                <h3>Product</h3>
                <h3>Price</h3>
                <h3>Quantity</h3>
                <h3>Subtotal</h3>

            </div>

            <div className="mt-10 flex md:gap-2 md:pl-6 gap-1">
              <Image src="/sofa.png" alt="sofa" width={100} height={500} />
              <p className="md:pt-10 pt-2 text-[#9f9f9f] md:text-lg text-sm">Asgaard sofa</p>
              <p className="md:pt-10 pt-2 md:pl-4 text-[#9f9f9f] md:text-lg text-sm">Rs. 250,000.000</p>
              <p className="md:mt-10 items-center md:ml-16 md:outline outline-[#9f9f9f] outline-2 py-3 px-4 rounded-xl">1</p>
              <p className="md:pt-10 pt-2 md:pl-20 md:text-lg text-sm">Rs. 250,000.000</p>
              <p className="md:pt-10 pt-2 md:pl-5"><FaTrash className="mt-1 text-[#b88e2f]"/></p>
            </div>

          </div>

          <div className="col-span-1">
            <div className="bg-[#f9f1e7] mt-16 h-[400px] ml-2">
                <h1 className="text-center pt-4 text-4xl font-semibold">Cart Totals</h1>
                <div className="flex pt-16">
                    <div className="px-16 font-semibold text-xl">
                    <h3>Subtotal</h3>
                    <h3 className="pt-6">Total</h3>
                    </div>

                    <div className="px-1">
                    <p className="px-6 text-[#9f9f9f] pt-1">Rs. 250,000.000</p>
                    <h2 className="pt-7 text-[#b88e2f] font-semibold text-xl ">Rs. 250,000.000</h2>
                    </div>
                </div>

                <button className="mt-16 mx-[80px] outline outline-black outine-1 rounded-2xl px-16 py-3 text-xl"><Link href="/checkout">Check Out</Link></button>

            </div>

          </div>
             
               
             
            

           

        </section>
    )
}