import Link from "next/link";

export default function Footer () {
    return (
        <section className="mt-12 border-t-2 border-[#d9d9d9] pt-6">
            
            <div className="md:flex  justify-evenly mt-8">
            <div>
            <h2 className="text-2xl font-bold text-center md:text-start">Funiro.</h2>
            <p className="text-[#9f9f9f] md:mt-14 mt-2 text-center md:text-start">400 University Drive Suite 200 Coral Gables,</p>
            <p className="text-[#9f9f9f] text-center md:text-start">FL 33134 USA</p>
            </div>

            <div>
            <ul>
            <li className="text-[#9f9f9f] font-semibold mt-4 md:mt-0 text-center">Links</li>
            <li className="md:mt-12 mt-2 text-center font-semibold">
            <Link href="/">Home</Link>
            </li>
            <li className="md:mt-12 font-semibold text-center">
            <Link href="/shop">Shop</Link>
            </li>
            <li className="md:mt-12 font-semibold text-center">
            <Link href="/blog">About</Link>
            </li>
            <li className="md:mt-12 font-semibold text-center">
            <Link href="/contact">Contact</Link>
            </li>
            </ul>
            </div>

            <div>
                <ul>
                    <li className="text-[#9f9f9f] font-semibold text-center mt-6 md:mt-0">Help</li>
                    <li className="md:mt-12 mt-2 font-semibold text-center">Payment Options</li>
                    <li className="md:mt-12 font-semibold text-center">Returns</li>
                    <li className="md:mt-12 font-semibold text-center">Privacy Policies</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className="text-[#9f9f9f] font-semibold mt-6 md:mt-0 text-center md:text-start">Newsletter</li>
                    <div className="flex items-center justify-center md:mt-10 mt-2">
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email address"
          className="underline"
          required
        />
        <button
          type="submit"
          className="underline font-semibold font-mono"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
                </ul>
            </div>
            </div>
            
            <p className="mt-12 border-t border-[#d9d9d9] pt-12 mx-24 font-semibold text-[#000000] text-lg py-10">2023 furino.All rights reserved</p>
        </section>
    )
}