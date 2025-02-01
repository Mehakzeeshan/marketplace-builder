import { client } from "@/sanity/lib/client"; // Adjust path as needed
import { groq } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import SanityFetchedProducts from "@/app/components/sanityProducts";
import AddToCartButton from "@/app/components/addToCartButton";

const query = groq`
  *[_type == "product" && slug.current == $slug][0] {
    title,
    "productImage": productImage.asset->url,
    description,
    price,
    discountPercentage,
    tags,
    isNew,
    id,
    stock,
    slug // ✅ Fix: Keep slug as an object
  }
`;


interface Product {
  title: string;
  productImage: string;
  price: number;
  description: string;
  discountPercentage: number;
  isNew: boolean;
  tags: string[];
  id: string;
  stock: number;
  slug: { current: string }; // ✅ Fix: Match expected type
}


interface ProductPageProps {
  params: Promise <{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params; // ✅ Await the params promise
  const product = await client.fetch<Product | null>(query, { slug: resolvedParams.slug });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="flex py-6 pl-16 gap-6 bg-[#f9f1e7]">
        <h3 className="text-[#9f9f9f]">Home</h3>
        <SlArrowRight className="py-1 mt-1 font-extrabold text-lg" />
        <h3 className="text-[#9f9f9f]">Shop</h3>
        <SlArrowRight className="py-1 mt-1 font-extrabold text-lg" />
        <h3 className="font-semibold flex gap-8">
          <p>| </p>
          {product.title}
        </h3>
      </div>

      <section className="md:grid md:grid-cols-2 mt-20 gap-8">
        <div className="mx-20 mt-20">
          <Image
            src={product.productImage}
            alt={product.title}
            width={450}
            height={350}
          />
        </div>
        <div className="mx-8 md:mt-0 mt-10">
          <h1 className="text-3xl font-bold mt-4 underline text-center md:text-left">
            {product.title}
          </h1>

          <p className="mt-3 text-[#9f9f9f]">{product.description}</p>
          <p className="font-semibold text-2xl mt-3">
            Price: ${product.price}
          </p>
          <p className="mt-3 text-[#9f9f9f] font-semibold space-x-4">
            Discount: {product.discountPercentage} %
          </p>
          <p>Product Type: {product.isNew ? "New" : "Old"}</p>
          <p className="mt-2">Tags: {product.tags.join(" , ")} </p>
          <div className="mt-6">
            <AddToCartButton
              product={product}
              className="px-2 py-2 bg-black hover:bg-gray-600 text-white"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex justify-center mt-10 gap-20 text-xl font-semibold border-t border-[#9f9f9f] pt-12">
          <h2>Description</h2>
          <h2 className="text-[#9f9f9f] hover:text-black">
            Additional Information
          </h2>
          <h2 className="text-[#9f9f9f] hover:text-black">Reviews [5]</h2>
        </div>

        <p className="text-[#9f9f9f] mt-10 md:mx-36">
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable
          active stereo speaker takes the unmistakable look and sound of
          Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9f9f9f] mt-6 md:mx-36">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
        <Image
          src="/sofaset.png"
          alt="sofa set"
          width={1000}
          height={1000}
          className="mt-12 md:ml-28"
        />
      </section>

      <section className="border-t border-[#9f9f9f] mt-12">
        <h2 className="mt-14 text-center text-4xl font-semibold">
          Related Products
        </h2>

        <SanityFetchedProducts />

        <button className="text-[#b88e2f] px-20 py-3 border-[#b88e2f] border outline outline-[#b88e2f] outline-1 mt-12 md:ml-[500px] ml-14 font-bold">
          <Link href="/shop">Show More</Link>
        </button>
      </section>
    </div>
  );
}

// ✅ Fix: Explicitly define return type of `generateStaticParams`
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const products = await client.fetch<{ slug: string }[]>(`
    *[_type == "product"] {
      'slug': slug.current
    }
  `);

  return products.map((product) => ({
    slug: product.slug,
  }));
}
