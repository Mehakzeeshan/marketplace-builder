import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface Product {
  title: string;
  productImage: string;
  price: number;
  discountPercentage?: number; // Optional field
  isNew: boolean;
}



export default async function SanityFetchedProducts() {
    const data: Product[] = await client.fetch(
      `*[_type == "product"]{
        title,
        "productImage": productImage.asset->url,
        price,
        discountPercentage,
        isNew
      }[0...8]`
    );
  
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mx-6 mx-16">
  {data.map((product, index) => (
    <div key={index} className="p-4 border border-gray-300 bg-[#f4f5f7]">
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

        {/* Add to Cart Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1e1c1b] text-white font-bold py-2 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          Add to Cart
        </button>
      </div>

      <h2 className="mt-4 text-[#3a3a3a] font-bold text-2xl">{product.title}</h2>
      <p className="mt-2 text-[#3a3a3a] font-semibold text-lg">Price: ${product.price}</p>
    </div>
  ))}
</section>

  
  );
}
