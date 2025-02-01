import Image from "next/image";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import AddToCartButton from "../components/addToCartButton";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
} from "@/components/ui/pagination";


interface Product {
  title: string;
  productImage: string;
  price: number;
  description: string;
  discountPercentage: number;
  isNew: boolean;
  tags: string[];
  slug: { current: string };
  id: string;
  stock: number;
  }


export default async function ShopPage3 () {

  const data: Product[] = await client.fetch(
            `*[_type == "product"]{
              title,
              "productImage": productImage.asset->url,
              price,
              discountPercentage,
              isNew,
              slug
            }[16...24]`
          );
  

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
            <p>|</p>Showing 17-24 of 24 results
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
        
        
       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mx-6 mx-16">
                 {data.map((product, index) => (
                   <div key={index} className="p-4 border border-gray-300 bg-[#f4f5f7]">
                    <Link href={`/dynamic/${product.slug.current}`}>
                     <div
                       style={{
                         height: "50vh",
                         width: "100%",
                         position: "relative",
                       }}
                       className="group"
                     >
                       <div className="w-full h-full group-hover:blur-md transition-all duration-300">
                         <Image
                           src={product.productImage ? urlFor(product.productImage).url() : ''}
                           alt={product.title}
                           layout="fill"
                           objectFit="cover"
                           className="w-full h-full"
                         />
                         <div className="relative">
                 <span
                   className={`rounded-lg px-3 py-1 absolute top-5 left-5 md:left-4 font-semibold text-white ${
                     product.isNew ? 'bg-[#2ec1ac]' : 'bg-[#e97171]'
                   }`}
                 >
                   {product.isNew ? 'New' : 'Old'}
                 </span>
               
                 <span
                   className="rounded-full px-3 py-3 absolute top-5 right-5 md:right-4 font-semibold text-white bg-black"
                 >
                   {product.discountPercentage}%
                 </span>
               </div>
                       </div>
               
                       
                     </div>
                     <h2 className="mt-4 text-[#3a3a3a] font-bold text-2xl">{product.title}</h2>
                     <p className="mt-2 text-[#3a3a3a] font-semibold text-lg">Price: ${product.price}</p>
                     </Link>
                     {/* Add to Cart Button */}
                           <div className="relative group">
                       <AddToCartButton 
                         product={product} 
                         className="bg-black text-wite px-2 py-2 mt-2"
                       />
                     </div>
               
                     
                   </div>
                 ))}
               </section>
               
                      <Pagination className="mt-10">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/shop2" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="/shop" className="px-5 py-4 rounded-xl bg-[#f9f1e7]">1</PaginationLink>
      <PaginationLink href="/shop2" className="px-5 py-4 rounded-xl bg-[#f9f1e7] ml-4">2</PaginationLink>
      <PaginationLink href="/shop3" className="px-5 py-4 rounded-xl bg-[#b88e2f] ml-4">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
    
    </PaginationItem>
  </PaginationContent>
</Pagination>

  
        



     
        
         
        
      </section>
    </>
    )
}