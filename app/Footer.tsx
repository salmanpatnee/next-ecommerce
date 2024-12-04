import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-6">
      <div className="wrapper flex flex-wrap justify-between space-y-5 text-white pb-14">
        <div className="w-full md:w-1/2 lg:w-auto">
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width="116"
              height="20"
              className="mb-6"
            />
          </Link>
          <h4 className="text-xl mb-6">Subscribe</h4>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="relative md:me-5">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-black border-white border rounded-sm lg:w-[220px] w-full py-5 h-12 text-xs ps-3"
            />
            <span>
              <SendHorizontal className="absolute top-3 right-4 hidden lg:block " />
            </span>
          </div>
        </div>
        <div className="lg:max-w-48 w-full md:w-1/2 lg:w-auto">
          <h4 className="text-xl mb-6">Support</h4>
          <p className="mb-4">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mb-4">
            <Link
              href="mailto:exclusive@gmail.com"
              className="hover:text-primary"
            >
              exclusive@gmail.com
            </Link>
          </p>
          <p className="mb-4">
            <Link href="tel:+88015-88888-9999" className="hover:text-primary">
              +88015-88888-9999
            </Link>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto">
          <h4 className="text-xl mb-6">Account</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-primary">
                My Account
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Login / Register
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto">
          <h4 className="text-xl mb-6">Quick Link</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto">
          <h4 className="text-xl mb-6">Download App</h4>
          <p className="text-xs text-[#FAFAFA] mb-2">
            Save $3 with App New User Only
          </p>
          <Image
            src="/images/qrcode.png"
            alt="Download app"
            width={198}
            height={84}
          />
          <ul className="inline-flex space-x-7 mt-6">
            <li>
              <Link href="#" target="_blank">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href="#" target="_blank">
                <Linkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[#F9F9F9] opacity-30 text-base">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
