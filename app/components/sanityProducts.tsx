import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./addToCartButton";

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



export default async function SanityFetchedProducts() {
    const data: Product[] = await client.fetch(
      `*[_type == "product"]{
        title,
        "productImage": productImage.asset->url,
        price,
        discountPercentage,
        isNew,
        id,
        stock,
        description,
        tags,
        slug 
      }[0...8]`
    );
  
    return (
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

  
  );
}


