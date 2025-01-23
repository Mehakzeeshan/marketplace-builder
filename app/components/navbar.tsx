"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex justify-between items-center px-6 py-4 md:px-12 md:py-8">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="w-12 h-10"
        />
        <h2 className="text-2xl md:text-4xl font-bold">Furniro</h2>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <HiOutlineX className="text-3xl" /> : <HiOutlineMenu className="text-3xl" />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:relative md:flex md:gap-16 font-semibold text-xl items-center md:top-1 md:ml-56 ${
          isMenuOpen ? "block z-50" : "hidden md:flex"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Icons Section */}
      <ul className="flex gap-6 md:gap-12 font-semibold text-xl md:text-2xl items-center">
        <li>
          <Link href="/SignIn">
            <FaRegUser />
          </Link>
        </li>
        <li>
          <Link href="/">
            <IoSearchOutline />
          </Link>
        </li>
        <li>
          <Link href="/wishlist">
            <FaRegHeart />
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <MdOutlineShoppingCart />
          </Link>
        </li>
      </ul>
    </section>
  );
}
