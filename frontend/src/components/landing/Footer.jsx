import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactContent2 from "../contact/Section1.jsx";
import { FaBuilding, FaClock, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const nameInputRef = useRef(null);

  const handleQueryClick = (e) => {
    e.preventDefault();
    nameInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      nameInputRef.current?.focus();
      nameInputRef.current?.select();
    }, 300);
  };

  return (
    <footer className="text-white py-12 px-6 pb-0 md:px-12">
      
      {/* Top Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-2">
        <Button
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2"
        >
          <a href="/program">OUR SERVICES</a>
        </Button>
        <Button
          onClick={handleQueryClick}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2"
        >
          DO YOU HAVE A QUERY
        </Button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-1 mt-9">
        We're Here To Help!
      </h1>

      {/* Main Grid - Equal Height, No Borders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        
        {/* Contact Form */}
        <div className="flex justify-center p-2">
  <div className="text-black w-full">
    <ContactContent2 disableWave hideImage nameInputRef={nameInputRef} />
  </div>
</div>


        {/* Info Section */}
<div className="h-full flex flex-col justify-center text-center space-y-6">
  <div>
    <div className="flex justify-center items-center gap-2 text-orange-500">
      <FaBuilding className="text-base" />
      <span className="font-semibold text-[1.2rem] leading-relaxed">Office</span>
    </div>
    <p className="mt-1 text-xs text-gray-300">
      No. 280. 3rd Floor SLV ARCADE.
      <br /> 100 Feet Ring Road, BSK 3rd Stage,
      <br /> Bangalore - 560070
    </p>
  </div>

  <div>
    <div className="flex justify-center items-center gap-2 text-orange-500">
      <FaClock className="text-base" />
      <span className="font-semibold text-[1.2rem] leading-relaxed">Hours</span>
    </div>
    <p className="mt-1 text-xs text-gray-300">
      M-F: 8am - 10pm
      <br /> S-S: Closed
    </p>
  </div>

  <div>
    <div className="flex justify-center items-center gap-2 text-orange-500">
      <FaPhoneAlt className="text-base" />
      <span className="font-semibold text-[1.2rem] leading-relaxed">Call Us</span>
    </div>
    <p className="mt-1 text-xs text-gray-300">+91-9008815252</p>
  </div>

<div>
  <div className="flex justify-center items-center gap-2 text-orange-500">
    <FaEnvelope className="text-base" />
    <span className="font-semibold text-[1.2rem] leading-relaxed">
      Email ID
    </span>
  </div>
  <p className="mt-1 text-[1.2rem] text-gray-300 leading-relaxed">
    info@dlithe.com
  </p>
</div>


</div>


        {/* Map Section */}
        <div className="h-50% flex flex-col justify-center">
          <iframe
            title="Dlithe Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7295754748898!2d77.5473731748405!3d12.925094487385987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fdfd6391453%3A0x4662827b839e02e8!2sDLithe%20Consultancy%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1752043269667!5m2!1sen!2sin"
            className="w-90% h-80% min-h-[500px]"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" hideProgressBar autoClose={3000} />
    </footer>
  );
};

export default Footer;
