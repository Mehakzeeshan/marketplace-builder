import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";

export default function CheckoutSection() {
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
            className="w-12 h-10 ml-20"
          />
          <h1 className="mt-4 text-5xl font-semibold">Checkout</h1>
          <div className="flex mt-4 gap-2 ml-7">
            <h2 className="font-semibold">Home </h2>
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
              <div className="flex flex-col w-full max-w-xs  mt-4">
                {/* Label for the input */}
                <label
                  htmlFor="firstName"
                  className="text-gray-700 font-medium mb-2"
                >
                  First Name
                </label>
                {/* Input box */}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="px-1 mr-24 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col w-full max-w-xs  mt-4">
                {/* Label for the input */}
                <label
                  htmlFor="firstName"
                  className="text-gray-700 font-medium mb-2"
                >
                  Last Name
                </label>
                {/* Input box */}
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="px-1 mr-24 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="companyName"
                className="text-gray-700 font-medium mb-2"
              >
                Company Name (Optional)
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="md:w-[480px] w-[230px] py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                Country / Region
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Sri Lanka "
                className="md:w-[480px] w-[230px] px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                Street Address
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="md:w-[480px] w-[230px]  py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                Town / City
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="md:w-[480px] w-[230px] py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                Province
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Western province"
                className="md:w-[480px] w-[230px] py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                ZIP code
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="md:w-[480px] w-[230px] py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                Phone
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="md:w-[480px] w-[230px] py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-4">
              {/* Label for the input */}
              <label
                htmlFor="firstName"
                className="text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="md:w-[480px] w-[230px] py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-col w-full max-w-xs  mt-6">
              {/* Label for the input */}

              {/* Input box */}
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Additional Information"
                className="md:w-[480px] w-[230px] py-4 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </form>
        </div>

        <div className="mx-16 mt-20">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Product</h2>
              <p className="text-[#9f9f9f] mt-4">Asgaad sofa * 1</p>
              <h3 className="mt-4">Subtotal</h3>
              <h3 className="mt-4">Total</h3>
            </div>

            <div className=''>
              <h2 className="text-2xl font-semibold ml-12">Subtotal</h2>
              <p className="mt-4 ml-8">Rs. 250,000.000</p>
              <p className="mt-4 ml-8">Rs. 250,000.000</p>
              <h2 className="mt-4 text-[#b88e2f] font-bold text-xl ">
                Rs. 250,000.000
              </h2>
            </div>
          </div>

          <h4 className="mt-12 border-t border-[#d9d9d9] pt-12 mx-1 font-semibold text-[#000000] text-xl py-10">
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
          </p>
          <button className="mt-10 border border-black border-1 rounded-xl md:ml-32 ml-4 py-3 md:px-16 px-8">Place order</button>
        </div>
      </div>
    </>
  );
}
