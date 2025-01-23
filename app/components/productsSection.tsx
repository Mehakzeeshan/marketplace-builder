
import ProductsList from "./shopProducts";
import Link from "next/link";

export default function ProductSection() {
  return (
    <section>
      <h1 className="text-center font-bold text-4xl mt-16">Our Products</h1>
      <ProductsList/>

      <button className="text-[#b88e2f] px-20 py-3 border-[#b88e2f] border  outline outline-[#b88e2f] outline-1 mt-12 md:ml-[500px] ml-20 font-bold">
       <Link href="/shop"> Show More</Link>
      </button>
    </section>
  );
}
