"use client"; // This must be at the top

import { addToCart } from "@/app/actions/actions";
import { Product } from "@/app/types/types";
import Swal from "sweetalert2";

interface AddToCartButtonProps {
  product: Product;
  className?: string; // ✅ Add className as an optional prop
}

export default function AddToCartButton({ product, className="" }: AddToCartButtonProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product);
    
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-[#1e1c1b] text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ${className}`}
    >
      Add To Cart
    </button>
  );
}
