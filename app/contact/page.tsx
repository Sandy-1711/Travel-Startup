"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Nav = dynamic(() => import("@/components/Home/Navbar/Nav"), { ssr: false });
const MobileNav = dynamic(() => import("@/components/Home/Navbar/MobileNav"), { ssr: false });
const Footer = dynamic(() => import("@/components/Home/Footer/Footer"), { ssr: false });

const ContactPage = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // Fix for hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration errors

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Nav openNav={() => setShowNav(true)} />
      <MobileNav showNav={showNav} closeNav={() => setShowNav(false)} />

      {/* Hero Section */}
      <div
        className="relative flex items-center justify-center h-[60vh] md:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact/t2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative text-4xl md:text-6xl font-bold text-white z-10 text-center">
          Contact Us 
        </h1>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 flex flex-col md:flex-row gap-12">
        {/* Contact Details */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Reach Out</h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-red-500 text-3xl">📞</span>
              <p className="text-gray-700 text-lg">
                Phone: <strong>+91-9277341677</strong>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-red-500 text-3xl">✉️</span>
              <p className="text-gray-700 text-lg">
                Email & Support: <br />
                <strong>tirthayatrik@gmail.com</strong>
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-red-500 text-3xl">📍</span>
              <p className="text-gray-700 text-lg">
                Address: <br />
                Ministry of Tourism, Transport Bhawan, <br />
                Sansad Marg, New Delhi - 110001
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="w-full border-gray-300 md:hidden" />

        {/* Chat & Book Now Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-3xl font-semibold text-gray-800">Still have doubts?</p>
          
          {/* Chat Now Button (WhatsApp) */}
          <Link
            href="https://wa.me/919277341677"
            target="_blank"
            className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition duration-300 text-lg w-full md:w-auto"
          >
            Chat Now
          </Link>

          {/* Book Now Button */}
          <button
            onClick={() => router.push("/tours")}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-lg w-full md:w-auto"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="my-16 px-6 md:px-12 lg:px-24 w-full">
        <iframe
          className="w-full h-[50vh] md:h-[60vh] rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391146811!2d77.0688993!3d28.5275822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1dfc9cbd5f%3A0x92f31d153b13e36!2sTransport%20Bhawan!5e0!3m2!1sen!2sin!4v1649943290123!5m2!1sen!2sin"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
