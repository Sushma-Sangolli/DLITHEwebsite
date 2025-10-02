import ServiceASection1 from "../service/ASection1";
import AboutSection1 from "../about/Section1";
import ServiceSection1 from "../service/Section1";
import ServiceSection2 from "../service/Section2";
import ServiceSection3 from "../service/Section3";
import ServiceSection4 from "../service/Section4";
import LandingFooter from "../landing/Footer";

function ServicePage() {
  return (
    <div>
      <ServiceASection1/>
      <AboutSection1 />
      <ServiceSection1 />
      <ServiceSection2 />
      <ServiceSection3 />
      <ServiceSection4/>
      <LandingFooter />
    </div>
  );
}

export default ServicePage;
