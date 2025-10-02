import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import LaptopImg from "@/assets/contact/laptop.avif";

const Section1 = ({ disableWave, nameInputRef, hideImage }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
  });
  const [buttonClicked, setButtonClicked] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact-us/send-email", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Message sent!", { autoClose: 6000 });
      setFormData({ name: "", phone: "", email: "", purpose: "" });
      setButtonClicked(true);
      setTimeout(() => setButtonClicked(false), 3000);
    } catch (err) {
      toast.error("Failed to send email");
      console.error(err);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-12 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl">

        {/* Illustration: Show/Hide on Toggle */}
        {showImage && !hideImage && (
          <motion.div
            animate={{ y: [0, -15, 15, 0], x: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="animate-[fadeIn_1s_ease-out]"
          >
            <img
              src={LaptopImg}
              alt="Laptop illustration"
              className="w-30 md:w-40 h-auto rounded-4xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]"
            />
          </motion.div>
        )}

        {/* Contact Form */}
        <div className="bg-gray-400 p-5 rounded-2xl shadow-2xl w-200 max-w-md">
          <div className="bg-white rounded-2xl shadow-md p-10 w-full max-w-md">
            <h2 className="text-center text-2xl font-bold mb-6">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                ref={nameInputRef}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />

              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              >
                <option value="">Purpose of Contact</option>
                <option value="internship">Internship opportunities</option>
                <option value="certifications">Certifications</option>
                <option value="bootcamp">Bootcamp (Train & Deploy)</option>
                <option value="hr">Human resources</option>
                <option value="training">Employee training services</option>
                <option value="others">Others</option>
              </select>

              <div className="flex justify-center">
                <button type="submit" className={`Button ${buttonClicked ? "active" : ""}`}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" hideProgressBar autoClose={3000} />
    </section>
  );
};

export default Section1;
