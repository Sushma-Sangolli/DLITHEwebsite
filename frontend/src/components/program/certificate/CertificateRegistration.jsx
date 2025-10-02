import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../../../assets/Intern/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { formVariants } from "../../../animations/formVariants";

import {
  Pencil,
  User,
  Phone,
  Mail,
  IdCard,
  GraduationCap,
  Info,
  Monitor,
  Ticket,
  Leaf,
  Pin,
  Star,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";


const API_BASE =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE) ||
  (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_BASE) ||
  'http://localhost:5000/api';

const CertificateRegistration = () => {
  // ✅ Inserted block here (before return)
  const location = useLocation();
  const navigate = useNavigate();
  const { formType } = useParams();

  const { selectedDomain, programId } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [couponApplying, setCouponApplying] = useState(false);

  const [formData, setFormData] = useState({
    prefix: "",
    full_name: "",
    reg_no: "",
    usn: "",
    college: "",
    email: "",
    contact: "",
    branch: "",
    technology_domain: "",
    program_id: programId || "",
    program_name: selectedDomain || "",
    program_mode: "",
    mode: "",
    location: "",
    duration: "",
    price: "",
    coupon_code: "",
    transaction_id: "",
  });

  useEffect(() => {
    if (programId) setFormData((d) => ({ ...d, program_id: programId }));
    if (selectedDomain) setFormData((d) => ({ ...d, program_name: selectedDomain }));
  }, [programId, selectedDomain]);

  // Map UI names to backend names
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "usn") {
      setFormData((prev) => ({ ...prev, usn: value, reg_no: value }));
      return;
    }
    if (name === "technology_domain") {
      setFormData((prev) => ({ ...prev, technology_domain: value, branch: value }));
      return;
    }
    if (name === "mode") {
      const programModeValue = value === "Online" ? "NA" : value;
      setFormData((prev) => ({ ...prev, mode: value, program_mode: programModeValue }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => navigate(-1);

  // Submit wrapper
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister();
  };

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      const existing = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );
      if (existing) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // Coupon application
  const handleApplyCoupon = async () => {
    const coupon = formData.coupon_code?.trim();
    if (!coupon) {
      toast.warn("Please enter a coupon code.");
      return;
    }
    if (!formData.program_id) {
      toast.error("Program ID missing. Please choose a program first.");
      return;
    }

   try {
      setCouponApplying(true);
      const res = await axios.get(`${API_BASE}/coupons/validate/${encodeURIComponent(coupon)}/${encodeURIComponent(formData.program_id)}`);
      if (res.data && res.data.valid) {
        const discountedPrice = res.data.Discount_price ?? null;
        if (discountedPrice != null) {
          setFormData(prev => ({ ...prev, price: discountedPrice }));
        }
        toast.success('Coupon applied successfully');
      } else {
        toast.error(res.data?.error || 'Coupon not valid');
      }
    } catch (err) {
      console.error('Coupon validation error:', err);
      toast.error(err?.response?.data?.error || 'Failed to validate coupon.');
    } finally {
      setCouponApplying(false);
    }
  };
  // Registration + Payment
  const handleRegister = async () => {
    if (
      !formData.full_name?.trim() ||
      !formData.email?.trim() ||
      !formData.contact?.trim() ||
      !formData.program_id?.trim()
    ) {
      toast.warn("Please fill required fields: Full name, Email, Contact, Program.");
      return;
    }

    const razorpayLoaded = await loadRazorpayScript();
    if (!razorpayLoaded) {
      toast.error("Failed to load Razorpay script. Check your connection.");
      return;
    }

    try {
      setLoading(true);

      const createOrderRes = await axios.post(
        `${API_BASE}/transactions/payment/create-order`,
        {
          program_Id: formData.program_id,
          coupon_id: formData.coupon_code || null,
          user: {
            prefix: formData.prefix || "",
            name: formData.full_name,
            email: formData.email,
            contact: formData.contact,
            college: formData.college || "",
            student_id: formData.reg_no || formData.usn || "",
          },
        }
      );

      const { order, key, tempTxnId, finalPrice, couponInfo } = createOrderRes.data;

      if (!order || !order.id || !order.amount) {
        throw new Error("Invalid order response from server");
      }

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "DLithe Certificate Program",
        description: `Payment for ${formData.program_name || "Certificate"}`,
        order_id: order.id,
        prefill: {
          name: formData.full_name,
          email: formData.email,
          contact: formData.contact.replace(/^\+?/, ""),
        },
        notes: {
          tempTxnId,
          program_id: formData.program_id,
          coupon_id: formData.coupon_code || null,
          transaction_id: tempTxnId,
        },
        handler: async (razorpayResponse) => {
          try {
            const payload = {
              razorpay_order_id: razorpayResponse.razorpay_order_id,
              razorpay_payment_id: razorpayResponse.razorpay_payment_id,
              razorpay_signature: razorpayResponse.razorpay_signature,
              metadata: {
                program_id: formData.program_id,
                coupon_id: formData.coupon_code || null,
                transaction_id: tempTxnId,
                program_mode: formData.program_mode || null,
                student: {
                  prefix: formData.prefix || "",
                  name: formData.full_name,
                  email: formData.email,
                  contact: formData.contact,
                  reg_no: formData.reg_no || formData.usn || "",
                  college: formData.college || "",
                },
              },
            };

            const verifyRes = await axios.post(
              `${API_BASE}/transactions/payment/verify-payment`,
              payload
            );

            if (verifyRes.data?.success) {
              toast.success("🎉 Registration & Payment Successful!", {
                autoClose: 6000,
                style: {
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  fontWeight: "bold",
                },
              });

              setTimeout(() => {
                navigate("/program/certificationcards", { replace: true });
              }, 6000);
            } else {
              toast.error(
                verifyRes.data?.error || "Payment verification failed.",
                { autoClose: 6000 }
              );
            }
          } catch (verifyErr) {
            console.error("Payment verification error:", verifyErr);
            toast.error(
              verifyErr?.response?.data?.error ||
                "Error verifying payment. Please contact support.",
              { autoClose: 3000 }
            );
          }
        },
        theme: { color: "#1D3557" },
      };

      if (couponInfo) {
        toast.success(`🎉 Coupon "${couponInfo.coupon_id}" applied successfully!`, {
          autoClose: 2000,
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
            fontWeight: "bold",
          },
          onClose: () => {
            const rzp = new window.Razorpay(options);
            rzp.open();
          },
        });
      } else {
        const rzp = new window.Razorpay(options);
        rzp.open();
      }
    } catch (err) {
      console.error("Payment creation error:", err);
      toast.error(
        err?.response?.data?.error ||
          err.message ||
          "Something went wrong during payment.",
        { autoClose: 3000 }
      );
    } finally {
      setLoading(false);
    }
  };



return (
  <div className="flex flex-col md:flex-row gap-12 p-6 bg-black min-h-screen mt-15">
    {/* LEFT PANEL */}
    <motion.div
      className="w-full md:w-3/5"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border border-gray-200 !text-black">
        <div className="flex items-center gap-4">
          <img src={logo} alt="DLithe Logo" className="h-12 object-contain" />
          <h2 className="text-xl text-red-700 leading-snug">
           Transforming certificate into lasting learning
          </h2>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-black rounded-xl p-4 flex flex-col items-center gap-2 text-red-700"
          
        >
          <h2 className="text-8xl ">
            CERTIFICATION
          </h2>
        </motion.div>

        <p className="!text-black text-justify leading-relaxed">
          DLithe is a product company serving IT companies and academic institutions since 2018.
          Our expertise in Full Stack Development, Mobile Applications, Embedded Systems, IoT,
          Robotics, Cybersecurity, and Artificial Intelligence enables resources to align with
          real industry needs.
        </p>

        <div>
          <div className="flex items-center gap-2 font-semibold !text-black text-lg mb-2">
            <Star size={18} className="text-yellow-500 fill-yellow-500" /> Certification Highlights
          </div>
          <ul className="list-disc pl-5  text-sm [&>li]:!text-black">
   <li>Ideal for everyone looking to work part-time on live projects.</li>
          <li>Flexible working hours with no daily workload or mandatory time commitment.</li>
          <li>Customizable duration as per your needs.</li>
          <li>Gain insight into various industry domains (BFSI, Retail, Manufacturing, Automotive, etc...).</li>
          <li>Learn and implement end-to-end application development, testing, deployment, and documentation.</li>
          <li>Receive an industry-recognized certificate.</li>
          <li>Networking, startup, and career opportunities.</li>
        </ul>

        </div>

        <div>
          <div className="flex items-center gap-2 font-semibold !text-black text-lg mb-2">
            <Pin size={18} className="text-red-700 fill-red-700" /> Terms
          </div>
          <p className="!text-black text-justify text-sm">
            One-time, non-refundable enrollment to process your application. After payment, your
            enrollment is confirmed.
          </p>
          
        </div>

       <div className="flex items-center gap-2 font-medium !text-black !text-[1.2rem]  ">
  <Info size={18} className="text-green-600" /> In case of queries:
</div>

<div className="flex justify-between !text-black !text-[1.2rem] gap-2">
  <span className="flex items-center gap-1">
    <Mail size={18} className="text-red-700" />
    <a href="mailto:info@dlithe.com" className="hover:underline text-black">
      info@dlithe.com
    </a>
  </span>
  <span className="flex items-center gap-1">
    <Phone size={18} className="text-red-600 fill-red-700" /> +91-9008815252
  </span>
</div>
 <div>
         
          <p className="!text-black text-justify text-sm">
            By registering, you agree to our terms, privacy policies, and data-sharing practices with
            payment service provider and DLithe in compliance with applicable laws.
          </p>
           <p className="!text-black text-justify text-sm">
           DLithe does not hold nor store any of your bank, card details. </p>
          
        </div>

      </Card>
    </motion.div>

    {/* RIGHT PANEL */}
    <motion.div
      className="w-full md:w-3/5"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200 !text-black">
       

        <h2 className="text-3xl font-bold text-center text-red-700 mb-1 mt-12" >
          Register Now 
        </h2>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-10">
           <motion.form
  onSubmit={handleSubmit}
  className="flex flex-col gap-8 text-black text-[1.1rem] leading-relaxed"
>
  {/* Section 1 */}
  <div className="rounded-2xl p-6 space-y-6 bg-gradient-to-br from-gray-50 to-white shadow-md border border-gray-200">
{/* Prefix */}
<motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
  <Label className="flex items-center gap-2 font-medium !text-black">
    <User size={18} className="text-red-600" /> Prefix
  </Label>

  <Select onValueChange={(val) => setFormData({ ...formData, prefix: val })}>
    <SelectTrigger
      className="w-full bg-gray-600 !text-black border border-gray-300 rounded-lg shadow-sm 
                 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 
                 data-[state=open]:!bg-gray-200 data-[placeholder]:!text-black !bg-gray-100"
    >
      <SelectValue placeholder="Select prefix" className="!text-black" />
    </SelectTrigger>

    <SelectContent className="bg-white !text-black">
      <SelectItem 
        value="Mr" 
        className="!text-black hover:bg-gray-100 focus:bg-gray-200 data-[state=checked]:!text-black"
      >
        Mr
      </SelectItem>
      <SelectItem 
        value="Ms" 
        className="!text-black hover:bg-gray-100 focus:bg-gray-200 data-[state=checked]:!text-black"
      >
        Ms
      </SelectItem>
      <SelectItem 
        value="Dr" 
        className="!text-black hover:bg-gray-100 focus:bg-gray-200 data-[state=checked]:!text-black"
      >
        Dr
      </SelectItem>
    </SelectContent>
  </Select>
</motion.div>




    {/* Full Name */}
    <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
      <Label className="flex items-center gap-2 font-medium text-gray-700">
        <Pencil size={18} className="text-red-600 fill-red-700" /> Full Name
      </Label>
      <Input
        type="text"
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-red-600 focus:ring-1"
      />
    </motion.div>

    {/* Contact */}
    <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
      <Label className="flex items-center gap-2 font-medium text-gray-700">
        <Phone size={18} className="text-red-600 fill-red-700" /> Contact Number
      </Label>
      <Input
        type="tel"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-red-600 focus:ring-1"
      />
    </motion.div>

    {/* Email */}
    <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
      <Label className="flex items-center gap-2 font-medium text-gray-700">
        <Mail size={18} className="text-red-600 " /> Email
      </Label>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-red-600 focus:ring-1"
      />
    </motion.div>

  
  </div>

  {/* Section 2 */}
  <div className="rounded-2xl p-6 space-y-6 bg-gradient-to-br from-gray-50 to-white shadow-md border border-gray-200">
      {/* USN */}
    <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
      <Label className="flex items-center gap-2 font-medium text-gray-700">
        <IdCard size={18} className="text-red-600 " /> USN / Reg No
      </Label>
      <Input
        type="text"
        name="usn"
        value={formData.usn}
        onChange={handleChange}
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-red-600 focus:ring-1"
      />
    </motion.div>

    {/* Branch */}
<motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
  <Label className="flex items-center gap-2  !text-black">
    <Leaf size={18} className="text-red-600 fill-red-700" /> Branch
  </Label>

  <Select
      onValueChange={(val) =>
        setFormData((prev) => ({
          ...prev,
          branch: val,
          branch_name: val,
        }))
      }
    >
    <SelectTrigger
      className="w-full bg-gray-600 !text-black border border-gray-300 rounded-lg shadow-sm 
                 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 
                 data-[state=open]:!bg-gray-200 data-[placeholder]:!text-black !bg-gray-100"
    >
      <SelectValue placeholder="Select branch" className="!text-black" />
    </SelectTrigger>

    <SelectContent className="bg-white !text-black max-h-60 overflow-y-auto">
      <SelectItem value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</SelectItem>
      <SelectItem value="Artificial Intelligence & Machine Learning Engineering">Artificial Intelligence & Machine Learning Engineering</SelectItem>
      <SelectItem value="Biotechnology Engineering">Biotechnology Engineering</SelectItem>
      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
      <SelectItem value="Computer & Communication Engineering">Computer & Communication Engineering</SelectItem>
      <SelectItem value="Computer Science & Engineering">Computer Science & Engineering</SelectItem>
      <SelectItem value="Computer Science & Engineering (Cyber Security)">Computer Science & Engineering (Cyber Security)</SelectItem>
      <SelectItem value="Cyber Security">Cyber Security</SelectItem>
      <SelectItem value="Electrical & Electronics Engineering">Electrical & Electronics Engineering</SelectItem>
      <SelectItem value="Electric Vehicle Technology">Electric Vehicle Technology</SelectItem>
      <SelectItem value="Electronics & Communication Engineering">Electronics & Communication Engineering</SelectItem>
      <SelectItem value="Electronics Engineering (VLSI Design & Technology)">Electronics Engineering (VLSI Design & Technology)</SelectItem>
      <SelectItem value="Electronics & Communication (Advanced Communication Technology)">Electronics & Communication (Advanced Communication Technology)</SelectItem>
      <SelectItem value="Information Science & Engineering">Information Science & Engineering</SelectItem>
      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
      <SelectItem value="Robotics & Artificial Intelligence Engineering">Robotics & Artificial Intelligence Engineering</SelectItem>
      <SelectItem value="Construction Technology">Construction Technology</SelectItem>
      <SelectItem value="Structural Engineering">Structural Engineering</SelectItem>
      <SelectItem value="Mechatronics">Mechatronics</SelectItem>
      <SelectItem value="VLSI Design and Embedded Systems">VLSI Design and Embedded Systems</SelectItem>
      <SelectItem value="MBA">Master of Business Administration</SelectItem>
      <SelectItem value="BCA">Bachelor of Computer Applications</SelectItem>
      <SelectItem value="MCA">Master of Computer Applications</SelectItem>
      <SelectItem value="Master of Technologies">Master of Technologies</SelectItem>
    </SelectContent>
  </Select>
</motion.div>


    {/* College */}
    <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
      <Label className="flex items-center gap-2 font-medium text-gray-700">
        <GraduationCap size={18} className="text-red-600 fill-red-700" /> College Name
      </Label>
      <Input
        type="text"
        name="college"
        value={formData.college}
        onChange={handleChange}
        required
        className="w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-red-600 focus:ring-1"
      />
    </motion.div>

    {/* Mode */}

   <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
  <Label className="flex items-center gap-2 font-medium !text-black">
    <Monitor size={18} className="text-red-600 fill-red-700" /> Mode
  </Label>

   <Select
      onValueChange={(val) => {
        const programModeValue = val === "Online" ? "NA" : val;
        setFormData((prev) => ({
          ...prev,
          mode: val,
          program_mode: programModeValue,
        }));
      }}
    >
    <SelectTrigger className="w-full bg-gray-600 !text-black border border-gray-300 rounded-lg shadow-sm 
                 focus:ring-2 focus:ring-gray-400 focus:border-gray-400 
                 data-[state=open]:!bg-gray-200 dat !bg-gray-100"
    > <SelectValue placeholder="Select mode" className="!text-black" />
    </SelectTrigger>

     <SelectContent className="bg-white !text-black">
          <SelectItem value="Online">Online</SelectItem>
          <SelectItem value="Offline - Bangalore">Offline - Bangalore</SelectItem>
          <SelectItem value="Offline - Ujire">Offline - Ujire</SelectItem>
          <SelectItem value="Offline - Nitte">Offline - Nitte</SelectItem>
          <SelectItem value="Offline - Belagavi">Offline - Belagavi</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>


    {/* Coupon */}
    <motion.div variants={formVariants} whileHover={{ scale: 1.01 }}>
      <Label className="flex items-center gap-2 font-medium text-gray-700">
        <Ticket size={18} className="text-red-600 fill-red-700" /> Coupon Code
      </Label>
      <Input
        type="text"
        name="coupon_code"
        value={formData.coupon_code}
        onChange={handleChange}
        placeholder="Optional"
        className="w-full bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:border-red-600 focus:ring-1"
      />
    </motion.div>
  </div>

  {/* Buttons */}
  <motion.div className="flex gap-4 justify-between mt-8" whileHover={{ scale: 1.01 }}>
    <Button
      type="submit"
      disabled={loading}
      className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg text-lg"
    >
      {loading ? "Processing..." : "🚀 Register & Pay"}
    </Button>

    <Button
      type="button"
      onClick={handleBack}
      disabled={loading}
      variant="outline"
      className="flex-1 border border-gray-400 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-xl text-lg"
    >
      ⬅ Back
    </Button>
  </motion.div>
</motion.form>

          </div>
        </motion.div>
      </Card>
    </motion.div>

    <ToastContainer position="top-center" autoClose={3000} />
  </div>
);

};

export default CertificateRegistration;