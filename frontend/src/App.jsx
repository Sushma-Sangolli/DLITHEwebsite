import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/landing/Navbar"

import AboutPage from "./components/pages/AboutPage";
import Landing from "./components/pages/Landing";
import ServicePage from "./components/pages/Service";
import ProgramPage from "./components/pages/Program";
import ContactPage from "./components/pages/Contact";
import GallaryPage from "./components/pages/Gallary";
import InternshipPage from "./components/pages/InternshipPage";
import BootcampPage from "./components/pages/BootcampPage";
import CertificationPage from "./components/pages/CertificationPage";
import InternshipRegistration from "./components/program/internship/InternshipRegistration";
import BootcampRegistration from "./components/program/bootcamp/BootcampRegistration";
import CertificateRegistration from "./components/program/certificate/CertificateRegistration";

import ScrollToTop from "./ScrollToTop"; // <-- Import the component

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />  {/* <-- Add this here */}
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallary" element={<GallaryPage />} />
        <Route path="/program/internshipcards" element={<InternshipPage />} />
        <Route path="/program/bootcampcards" element={<BootcampPage />} />
        <Route path="/program/certificationcards" element={<CertificationPage />} />
        <Route path="/program/internshipregister" element={<InternshipRegistration />} />
        <Route path="/program/bootcampregister" element={<BootcampRegistration />} />
        <Route path="/program/certificateregister" element={<CertificateRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
