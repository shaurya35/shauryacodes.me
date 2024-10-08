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
                number={9}
                h1="// Octanet Services Pvt. Ltd."
                l1="- Developed and maintained web applications"
                l2="- Collaborated with cross-functional teams"
                l3="- Implemented responsive UI components"
                l4="- Managed project timelines"
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={9}
                h1="React"
                l1="- Next.js"
                l2="- "
                l3="- "
                l4="- "
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={9}
                h1="English Speaking"
                l1="Leadership"
                l2="- "
                l3="- "
                l4="- "
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={9}
                h1="Mail"
                l1="- example@mail.com"
                l2="- Available for contact"
                l3="- "
                l4="- "
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={9}
                h1="Phone"
                l1="- 123-456-7890"
                l2="- Reachable during business hours"
                l3="- "
                l4="- "
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
                number={9}
                h1="Personal Bio"
                l1="- Short bio description"
                l2="- More details about the individual"
                l3="- Education background"
                l4="- Hobbies and interests"
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={9}
                h1="Personal Interests"
                l1="- Reading"
                l2="- Traveling"
                l3="- Music"
                l4="- "
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={9}
                h1="Qualifications"
                l1="- Degree in Computer Science"
                l2="- Certifications in Web Development"
                l3="- Work experience in tech"
                l4="- "
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={9}
                h1="Mail"
                l1="- personal@mail.com"
                l2="- Available for personal inquiries"
                l3="- "
                l4="- "
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={9}
                h1="Phone"
                l1="- 987-654-3210"
                l2="- Reachable for personal matters"
                l3="- "
                l4="- "
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
                number={9}
                h1="Favorite Sports"
                l1="- Soccer"
                l2="- Basketball"
                l3="- Tennis"
                l4="- "
              />
            );
          case "h2":
            return (
              <MainDashboard
                number={9}
                h1="Favorite Games"
                l1="- Chess"
                l2="- Video Games"
                l3="- Puzzle Games"
                l4="- "
              />
            );
          case "h3":
            return (
              <MainDashboard
                number={9}
                h1="Favorite Movies"
                l1="- Inception"
                l2="- Interstellar"
                l3="- The Dark Knight"
                l4="- "
              />
            );
          case "mail":
            return (
              <MainDashboard
                number={9}
                h1="Mail"
                l1="- hobbies@mail.com"
                l2="- Available for hobby-related inquiries"
                l3="- "
                l4="- "
              />
            );
          case "contact":
            return (
              <MainDashboard
                number={9}
                h1="Phone"
                l1="- 555-123-4567"
                l2="- Reachable for hobby discussions"
                l3="- "
                l4="- "
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
