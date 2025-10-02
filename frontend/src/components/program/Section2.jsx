import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Section2() {
  const [activeTab, setActiveTab] = useState("tab1");
  const navigate = useNavigate();

  const items = {
    tab1: {
      title: "What Is It In For Me",
      text: (
        <div className="space-y-2 text-gray-200">
          <p><strong>Enhanced Skills:</strong> Gain valuable technical, soft, and professional skills crucial for the modern job market.</p>
          <p><strong>Work Experience:</strong> Experience agile way of working, proof of concept development from Ideation to Implementation.</p>
          <p><strong>Increased Employability:</strong> Improve your chances of landing a good job by making yourself a more attractive candidate to potential employers.</p>
          <p><strong>Career Advancement:</strong> Boost your career prospects by developing in-demand skills that can help you climb the professional ladder.</p>
          <p><strong>Industry Exposure:</strong> Gain valuable insights into industry trends and best practices.</p>
          <p><strong>Networking Opportunities:</strong> Connect with industry professionals, potential employers, and fellow students.</p>
          <p><strong>Access to Resources:</strong> Gain access to valuable resources like career counseling, job placement assistance, and industry certifications.</p>
          <p><strong>Competitive Edge:</strong> Stand out from the competition in the job market with a unique skillset.</p>
          <p><strong>Personal Growth:</strong> Improve your communication, problem-solving, and critical thinking skills.</p>
          <p><strong>Digital Branding:</strong> Your presence in digital world will increase significantly using platforms like Git, LinkedIn, Stackoverflow etc.</p>
        </div>
      ),
      video: (
        <iframe
          className="w-full h-72 md:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/video-id"
          title="What to Expect as an Intern"
          allowFullScreen
        ></iframe>
      ),
    },

    tab2: {
      title: "Internship",
      text: (
        <div className="space-y-4 text-gray-200 text-justify">
          <p>
            Our internship program provides students with a unique opportunity to gain real-world experience, develop in-demand skills, and build a strong professional network. We offer personalized mentorship, a focus on innovation, and exclusive access to industry leaders and cutting-edge technologies. By working on real-world projects that directly impact organizations, students gain valuable hands-on experience and develop a competitive edge in the job market. We also offer flexible learning options, including remote internships and part-time programs, to accommodate diverse student needs. Whether you're interested in specializing in a specific industry, making a social impact, or exploring global opportunities, our program offers a unique and valuable experience that will prepare you for success in your future career.
          </p>
          <button
            onClick={() => navigate("internshipcards")}
            >
            Apply Now
          </button>
        </div>
      ),
      video: (
        <iframe
          className="w-full h-72 md:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/video-id"
          title="Internship Insights"
          allowFullScreen
        ></iframe>
      ),
    },

    tab3: {
      title: "Bootcamp",
      text: (
        <div className="space-y-4 text-gray-200 text-justify">
          <p>
            Our employability boot camp provides a transformative experience that goes beyond traditional job-seeking skills. We equip students with a holistic skillset, including not only resume writing and interview preparation but also essential soft skills like communication, teamwork, problem-solving, and critical thinking. Our intensive, fast-paced program is designed to quickly prepare students for the demands of the modern workplace. We offer personalized coaching, access to a vast network of industry professionals, and guaranteed job interview opportunities. By participating in our boot camp, students gain the confidence and practical skills needed to successfully navigate the job market and launch fulfilling careers. The bootcamp is specific to our client needs. You will undergo rigorous campus to corporate or lateral transformation as per the business needs
          </p>
          <button
            onClick={() => navigate("bootcampcards")}
            >
            Register Now
          </button>
        </div>
      ),
      video: (
        <iframe
          className="w-full h-72 md:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/video-id"
          title="Bootcamp Overview"
          allowFullScreen
        ></iframe>
      ),
    },

    tab4: {
      title: "Certification",
      text: (
        <div className="space-y-4 text-gray-200 text-justify">
          <p>
            Our certification programs stand out by offering a unique blend of practical and theoretical knowledge, delivered by industry-leading experts. We prioritize hands-on learning through real-world projects, simulations, and case studies, ensuring students gain practical skills immediately applicable in the workplace. Our programs are designed to be flexible and accessible, with options for online, in-person, and blended learning formats. We offer personalized support through dedicated mentors, career counseling, and job placement assistance. By choosing our programs, students gain a recognized industry credential, build a strong professional network, and significantly enhance their career prospects in a competitive job market.
          </p>
          <button
            onClick={() => navigate("certificationcards")}
             >
            Get Certified
          </button>
        </div>
      ),
      video: (
        <iframe
          className="w-full h-72 md:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/video-id"
          title="Certification Benefits"
          allowFullScreen
        ></iframe>
      ),
    },
  };

  return (
    <div id="Section2">
    <div className="w-full px-6 md:px-12 py-10 bg-black rounded-2xl shadow-xl">
      {/* Tabs Header */}
      <div className="flex justify-between w-full">
        {Object.keys(items).map((tabKey) => (
          <div key={tabKey} className="flex flex-col items-center w-full">
            <p
              onClick={() => setActiveTab(tabKey)}
              className={`relative py-3 px-6 font-semibold transition whitespace-nowrap cursor-pointer rounded-lg
                ${
                  activeTab === tabKey
                    ? "text-white border border-gray-400 "
                    : "text-gray-300 hover:text-white hover:border hover:border-gray-400 "
                }`}
            >
              {items[tabKey].title}
            </p>

            {/* Divider Glow AFTER the title */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full animate-pulse" />
          </div>
        ))}
      </div>

      {/* Active Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6"
        >
          {/* Left Side Content */}
          <div>{items[activeTab].text}</div>

          {/* Right Side Video */}
          <div className="flex justify-center">{items[activeTab].video}</div>
        </motion.div>
      </AnimatePresence>
    </div>
    </div>
  );
}

export default Section2;
