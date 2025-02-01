import Image from "next/image";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
import SanityFetchedProducts from "../components/sanityProducts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";




export default function ShopSection() {
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
          <h1 className="mt-4 text-5xl font-semibold">Shop</h1>
          <div className="flex mt-4 gap-2 ml-2">
            <h2 className="font-semibold">Home </h2>
            <SlArrowRight className="mt-1 font-bold text-xl" />
            <p>Shop</p>
          </div>
        </div>
      </section>

      <div className="flex justify-between bg-[#f9f1e7] py-6 flex-wrap">
        <div className="flex md:pl-16 gap-6 mt-1 flex-wrap items-center">
          <HiAdjustmentsHorizontal className="mt-1 font-extrabold text-lg" />
          <h3>Filter</h3>
          <PiDotsNineBold className="mt-1 font-extrabold text-lg" />
          <h3 className="font-semibold flex gap-8">
            <p>|</p>Showing 1-8 of 24 results
          </h3>
        </div>

        <div className="flex gap-4 mx-8 flex-wrap items-center">
          <h2 className="mt-1 font-semibold">Show</h2>
          <p className="bg-white px-5 py-2 text-[#9f9f9f]">8</p>
          <h2 className="mt-1 font-semibold">Sort by</h2>
          <p className="bg-white px-5 py-2 text-[#9f9f9f]">Default</p>
        </div>
      </div>

      <section>
        
        
       <SanityFetchedProducts/>
        
       <Pagination className="mt-10">
  <PaginationContent>
    <PaginationItem>
      
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" className="px-5 py-4 rounded-xl bg-[#b88e2f]">1</PaginationLink>
      <PaginationLink href="/shop2" className="px-5 py-4 rounded-xl bg-[#f9f1e7] ml-4">2</PaginationLink>
      <PaginationLink href="/shop3" className="px-5 py-4 rounded-xl bg-[#f9f1e7] ml-4">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="/shop2" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

  
        
         
        
      </section>
    </>
  );
}
