"use client"


import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Product } from "../types/types";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function CartSection () {

const [cartItems, setCartItems] = useState<Product[]>([])

  useEffect(() => {
    setCartItems(getCartItems())
  },[])

  const handleRemove = (id: string) => {
    Swal.fire({
      title:"Are you sure?",
      text: "You won't be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if(result.isConfirmed) {
        removeFromCart(id)
        setCartItems(getCartItems)
        Swal.fire("Deleted!", "Your item has been deleted.", "success")
      }
    })
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());

  }

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item.id === id);
    if(product) {
      handleQuantityChange(id, product.stock + 1);
    }
  }

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item.id === id);
    if(product && product.stock > 1) {
      handleQuantityChange(id, product.stock - 1);
    }
  }

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stock, 0);
  }
  
  const router = useRouter();
  const handledProceed = () => {
    Swal.fire({
      title: "Proceed to checkout?",
      text: "You won't be able to change your order after this step.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!"
    }).then((result) => {
      if(result.isConfirmed) {
        
        router.push("/checkout");
        setCartItems([]);
        
      }
  })
}

    return (



      <section className="grid md:grid-cols-3 gap-3">
      <div className="col-span-2">
        <div className="flex bg-[#f9f1e7] mt-16 py-4 md:px-14 px-8 md:gap-28 gap-10 font-semibold text-xl mx-2">
          <h3>Product</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Subtotal</h3>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="mt-10 flex md:gap-10 md:mx-5 gap-3">
            <div className="w-[150px] flex flex-col items-center text-center">
  {item.productImage && (
    <Image 
      src={urlFor(item.productImage).url()} 
      alt={item.title} 
      width={100} 
      height={500} 
      className="w-16 h-16 object-cover rounded-lg" 
    />
  )}
  
  <p className="md:pt-2 pt-2 text-[#9f9f9f] md:text-sm text-xs truncate w-full">
    {item.title}
  </p>
</div>

            <p className="md:mt-9 mt-8 md:ml-9 text-[#9f9f9f] md:text-lg text-sm">$ {item.price}</p>
            <div className="flex items-center md:mt-1 md:ml-[70px] md:px-4 px-7 rounded-xl">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <p className="px-4">{item.stock}</p>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <p className="md:mt-8 mt-8 md:pl-20 pl-6 md:text-lg text-sm">$ {item.price * item.stock}</p>
            <button className="md:ml-10 ml-2" onClick={() => handleRemove(item.id)}>
              <FaTrash className="md:mt-1 text-[#b88e2f] text-xl" />
            </button>
          </div>
        ))}
      </div>
      <div className="col-span-1">
        <div className="bg-[#f9f1e7] mt-16 h-[400px] md:ml-1 ml-8">
          <h1 className="text-center pt-4 text-4xl font-semibold">Cart Totals</h1>
          <div className="flex pt-16">
            <div className="px-16 font-semibold text-xl">
              <h3>Subtotal</h3>
              <h3 className="pt-6">Total</h3>
            </div>
            <div className="px-1">
              <p className="px-6 text-[#9f9f9f] pt-1">$ {calculatedTotal()}</p>
              <h2 className="pt-7 text-[#b88e2f] font-semibold text-xl">$ {calculatedTotal()}</h2>
            </div>
          </div>
          <button onClick={handledProceed} className="mt-16 mx-[80px] outline outline-black outline-1 rounded-2xl px-16 py-3 text-xl hover:bg-[#b88e2f] hover:text-white">
            Check Out
          </button>
        </div>
      </div>
    </section>
        
    )
}