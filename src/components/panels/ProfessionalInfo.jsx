import React, { useState } from "react";
import DownIcon from "@/components/ui/DownIcon";
import Right from "@/components/ui/Right";
import FolderIcon from "@/components/ui/FolderIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Tab from "@/components/Tabs/Tab";
import MainDashboard from "@/components/dashboards/MainDashboard";

const ProfessionalInfo = ({ category, h1, h2, h3 }) => {
  const [activePanel, setActivePanel] = useState("h1");

  const renderContent = () => {
    switch (category) {
      case "professional-info":
        switch (activePanel) {
          case "h1":
            return (
              <MainDashboard
                number={15}
                h1="Octanet Services Pvt. Ltd."
                l1="- Built 2 responsive React.js apps with 100% browser compatibility"
                l2="- Improved UI integration and user experience"
                l3="- Ensured clean, maintainable code"
                l4="- Created documentation, boosting team efficiency"
                h2="Prodigy Infotech"
                l5="- Built 5 responsive web apps using HTML, CSS, and JavaScript"
                l6="- Ensured compatibility across all devices"
                l7="- Delivered 5 projects ahead of schedule"
                l8="- Earned a letter of recommendation for outstanding performance."
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={23}
                h1="Primary Stack"
                l1="- Next.js, TypeScript"
                l2="- PostgreSQL, Prisma"
                h2="Frontend"
                l5="- Tailwind CSS, React.js"
                l6="- HTML, CSS, JavaScript"
                h3="Backend"
                l9="- Node.js, Express.js"
                l10="- Django"
                h4="Languages"
                l13="- Java, C++"
                l14="- JavaScript, Bash"
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={15}
                h1="Core Soft Skills"
                l1="- Active Listening"
                l2="- Critical Thinking"
                l3="- Problem Solving"
                l4="- Decision Making"
                h2="Interpersonal Skills"
                l5="- Teamwork"
                l6="- Leadership Qualities"
                l7="- Flexibility"
                l8="- Adaptability"
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={7}
                h1="Mail"
                l1="- shauryajha35@gmail.com"
                l2="- Active for contact"
                l3="- Response time: 24-48 hours"
                l4="- Preferred for professional inquiries"
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={7}
                h1="// Phone"
                l1="- +91-9115331677"
                l2="- Reachable during business hours"
                l3="- Available via WhatsApp"
                l4="- Best time to call: 10 AM - 6 PM (IST)"
              />
            );
          default:
            return null;
        }

      case "personal-info":
        switch (activePanel) {
          case "h1":
            return (
              <MainDashboard
                number={7}
                h1="Personal Bio"
                l1="- Hello, I am Shaurya Jha"
                l2="- 3rd Year Undergraduate Student"
                l3="- Pursuing B.Tech in Computer Science"
                l4="- Iter, Bhubaneshwar"
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={7}
                h1="Personal Interests"
                l1="- Music"
                l2="- Badminton"
                l3="- Reading"
                l4="- Travelling"
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={7}
                h1="Qualifications"
                l1="- Top Voice Linkedin"
                l2="- Certifications in Web Development"
                l3="- 5-Star HackerRank Java"
                l4="- Mentor at GSSoC'24"
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={7}
                h1="Mail"
                l1="- shauryajha35@gmail.com"
                l2="- Active for contact"
                l3="- Response time: 24-48 hours"
                l4="- Preferred for professional inquiries"
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={7}
                h1="Phone"
                l1="- +91-9115331677"
                l2="- Reachable during business hours"
                l3="- Available via WhatsApp"
                l4="- Best time to call: 10 AM - 6 PM (IST)"
              />
            );
          default:
            return null;
        }

      case "hobbies-info":
        switch (activePanel) {
          case "h1":
            return (
              <MainDashboard
                number={7}
                h1="Favorite Sports"
                l1="- Badminton"
                l2="- Table-Tennis"
                l3="- Pool"
                l4="- Cricket"
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={7}
                h1="Favorite Games"
                l1="- Chess"
                l2="- Video Games"
                l3="- Puzzle Games"
                l4="- Dune"
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={15}
                h1="Favorite Movies"
                l1="- Interstellar"
                l2="- Martin"
                l3="- Passengers"
                l4="- Inception"
                h2="Favourite Series"
                l5="- Dark"
                l6="- The Last of us"
                l7="- The Mandalorian"
                l8="- Manifest"
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={7}
                h1="Mail"
                l1="- shauryajha35@gmail.com"
                l2="- Active for contact"
                l3="- Response time: 24-48 hours"
                l4="- Preferred for professional inquiries"
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={7}
                h1="Phone"
                l1="- +91-9115331677"
                l2="- Reachable during business hours"
                l3="- Available via WhatsApp"
                l4="- Best time to call: 10 AM - 6 PM (IST)"
              />
            );
          default:
            return null;
        }

      default:
        return null;
    }
  };

  const getTabText = () => {
    switch (activePanel) {
      case "h1":
        return h1;
      case "h2":
        return h2;
      case "h3":
        return h3;
      case "mail":
        return "Mail";
      case "contact":
        return "Contact";
      default:
        return "Experience";
    }
  };

  return (
    <main className="flex flex-row h-full">
      <aside className="w-[259px] border-r border-white h-full">
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">{category}</div>
        </div>
        <div className="h-[110px] flex flex-col justify-evenly items-start ">
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "h1" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("h1")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "h1" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h1}</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "h2" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("h2")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "h2" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h2}</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "h3" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("h3")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "h3" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <FolderIcon />
            </div>
            <div className="pl-2">{h3}</div>
          </div>
        </div>
        <div className="flex flex-row text-white-custom border-y border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">Contacts</div>
        </div>
        <div className="h-[70px] flex flex-col justify-evenly items-start border-b border-white">
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "mail" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("mail")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "mail" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <MailIcon />
            </div>
            <div className="pl-2">Mail</div>
          </div>
          <div
            className={`flex flex-row cursor-pointer hover:text-white-custom ${
              activePanel === "contact" ? "text-white-custom" : ""
            }`}
            onClick={() => setActivePanel("contact")}
          >
            <div className="pl-2 flex justify-center items-center">
              {activePanel === "contact" ? <DownIcon /> : <Right />}
            </div>
            <div className="pl-2 flex justify-center items-center">
              <PhoneIcon />
            </div>
            <div className="pl-2">Contact</div>
          </div>
        </div>
      </aside>
      <div>
        <div>
          <Tab text={getTabText()} />
        </div>
        <div>{renderContent()}</div>
      </div>
    </main>
  );
};

export default ProfessionalInfo;
