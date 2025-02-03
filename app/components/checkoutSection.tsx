"use client";

import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import { getCartItems } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Link from "next/link";




export default function CheckoutSection() {

    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        streetAddress: "",
        townCity: "",
        province: "",
        zip: "",
        phone: "",
        email: "",
        additionalInfo: "",
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        companyName: false,
        country: false,
        streetAddress: false,
        townCity: false,
        province: false,
        zip: false,
        phone: false,
        email: false,
        additionalInfo: false,
    })

    useEffect(() => { 
      setCartItems(getCartItems())
      const aapliedDiscount = localStorage.getItem('appliedDiscount')
      if(aapliedDiscount){
          setDiscount(Number(aapliedDiscount))
      }
    }, [])

    const subTotal = cartItems.reduce(
      (total, item) => total + item.price * item.stock, 0)
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({ 
          ...formValues,
           [e.target.id]: e.target.value 
          })
      }
 
      const validateForm = () => {
        const errors = {
          firstName : !formValues.firstName,
          lastName : !formValues.lastName,
          companyName : !formValues.companyName,
          country : !formValues.country,
          streetAddress : !formValues.streetAddress,
          townCity : !formValues.townCity,
          province : !formValues.province,
          zip : !formValues.zip,
          phone : !formValues.phone,
          email : !formValues.email,
          additionalInfo : !formValues.additionalInfo,
        }
        setFormErrors(errors);

        return Object.values(errors).every((error) => !error);
      }
      const handlePlaceOrder = () => {

        if (validateForm()) {
          console.log("Form is valid, placing order...");
          localStorage.removeItem('appliedDiscount');
          Swal.fire("Success!", "Your order has been placed.", "success");
      } else {
          console.log("Form validation failed");
      }


        }
    
  return (
    <div className="min-h-screen">
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
            className="w-12 h-10 ml-20"
          />
          <h1 className="mt-4 text-5xl font-semibold">Checkout</h1>
          <div className="flex mt-4 gap-2 ml-7">
            <h2 className="font-semibold">Cart </h2>
            <SlArrowRight className="mt-1 font-bold text-xl" />
            <p>Checkout</p>
          </div>
        </div>
      </section>

      <div className="md:grid md:grid-cols-2 mt-8">
        <div className="mt-8 md:mx-28 mx-4">
          <h1 className="text-3xl font-bold">Billing details</h1>
          <form>
            <div className="md:flex">
              <div className="flex flex-col w-full max-w-xs mt-4">
                <label htmlFor="firstName" className="text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className="px-1 mr-24 py-2 pl-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {formErrors.firstName && <p className="text-red-500 text-sm">First Name is required</p>}
              </div>
              <div className="flex flex-col w-full max-w-xs mt-4">
                <label htmlFor="lastName" className="text-gray-700 font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className="px-1 mr-24 py-2 border pl-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {formErrors.lastName && <p className="text-red-500 text-sm">Last Name is required</p>}
              </div>
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="companyName" className="text-gray-700 font-medium mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="companyName"
                value={formValues.companyName}
                onChange={handleInputChange}
                className="md:w-[480px] w-[230px] py-2 pl-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.companyName && <p className="text-red-500 text-sm">company name is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="country" className="text-gray-700 font-medium mb-2">
                Country / Region
              </label>
              <input
                type="text"
                id="country"
                value={formValues.country}
                onChange={handleInputChange}
                placeholder="Sri Lanka"
                className="md:w-[480px] w-[230px] px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.country && <p className="text-red-500 text-sm">Country Name is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="streetAddress" className="text-gray-700 font-medium mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                value={formValues.streetAddress}
                onChange={handleInputChange}
                className="md:w-[480px] w-[230px] py-2 border pl-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.streetAddress && <p className="text-red-500 text-sm">Address is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="townCity" className="text-gray-700 font-medium mb-2">
                Town / City
              </label>
              <input
                type="text"
                id="townCity"
                value={formValues.townCity}
                onChange={handleInputChange}
                className="md:w-[480px] w-[230px] py-2 pl-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.townCity && <p className="text-red-500 text-sm">city is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="province" className="text-gray-700 font-medium mb-2">
                Province
              </label>
              <input
                type="text"
                id="province"
                value={formValues.province}
                onChange={handleInputChange}
                placeholder="Western province"
                className="md:w-[480px] w-[230px] py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.province && <p className="text-red-500 text-sm">province is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="zip" className="text-gray-700 font-medium mb-2">
                ZIP code
              </label>
              <input
                type="text"
                id="zip"
                value={formValues.zip}
                onChange={handleInputChange}
                className="md:w-[480px] w-[230px] py-2 pl-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.zip && <p className="text-red-500 text-sm">zipcode is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="phone" className="text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="md:w-[480px] w-[230px] py-2 border pl-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.phone && <p className="text-red-500 text-sm">phone number is required</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-4">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="md:w-[480px] w-[230px] py-2 pl-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.email && <p className="text-red-500 text-sm">email address is required field</p>}
            </div>

            <div className="flex flex-col w-full max-w-xs mt-6">
              <input
                type="text"
                id="additionalInfo"
                value={formValues.additionalInfo}
                onChange={handleInputChange}
                placeholder="Additional Information"
                className="md:w-[480px] w-[230px] py-4 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {formErrors.additionalInfo && <p className="text-red-500 text-sm">Additional Info is required</p>}
            </div>
          </form>
        </div>
{/* order summary */}
        <div className="mx-16 mt-20">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.stock}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.stock}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subTotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${subTotal.toFixed(2)}
              </p>
            </div>
          

          {/* <h4 className="mt-12 border-t border-[#d9d9d9] pt-12 mx-1 font-semibold text-[#000000] text-xl py-10">
            ⚫ Direct Bank Transfer
          </h4>
          <p className="text-[#9f9f9f]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <p className="mt-4 text-[#9f9f9f]">⚪ Direct Bank Transfer</p>
          <p className="mt-2 text-[#9f9f9f]">⚪ Cash On Delivery</p>

          <p className="mt-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <b> privacy policy. </b>
          </p> */}
          
          <button
            onClick={handlePlaceOrder}
            className="mt-10 border border-black border-1 rounded-xl md:ml-32 ml-4 py-3 md:px-16 px-8 hover:bg-black hover:text-white font-semibold"
          >
           <Link href="/stripeCheckout"> Place order </Link>
          </button>
        
        </div>
      </div>
    </div>
  );
}
