"use client"
import React, { useState } from "react";
import CrossIcon from "@/components/ui/CrossIcon";
import DownIcon from "@/components/ui/DownIcon";
import MailIcon from "@/components/ui/MailIcon";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Right from "@/components/ui/Right";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
  
      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };
  

  return (
    <div className="h-[calc(100%-100px)] text-gray-custom font-fira-code flex">
      <div className="hidden lg:block border-r border-white lg:w-[391px]"> 
        <div className="flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer">
          <div className="pl-2 flex justify-center items-center">
            <DownIcon />
          </div>
          <div className="pl-2">contacts</div>
        </div>
        <div className="flex flex-col px-[25px] py-[10px] h-[100px] justify-evenly items-start border-b border-white">
          <div className="flex flex-row cursor-pointer hover:text-white-custom ">
            <div className="flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <MailIcon />
            </div>
            <div className="pl-2">Mail</div>
          </div>
          <div className="flex flex-row cursor-pointer hover:text-white-custom ">
            <div className="flex justify-center items-center">
              <Right />
            </div>
            <div className="pl-2 flex justify-center items-center">
              <PhoneIcon />
            </div>
            <div className="pl-2">Contact</div>
          </div>
        </div>
      </div>

      <div className="h-full w-full overflow-y-auto">
        <div className="lg:flex flex-row text-white-custom border-b border-white w-full h-[35px] justify-start items-center text-[14px] cursor-pointer hidden ">
          <div className="pl-4">page.tsx</div>
          <div className="pl-4 pr-2 border-r border-white h-full flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>

        <div className="lg:pl-48 lg:pt-20 pt-10 flex justify-center lg:block">
          <form onSubmit={handleSubmit} >
            <div className="pb-5">
              <div className="pb-2">_name:</div>
              <div>
                <input
                  className="bg-black-600 border rounded-md border-gray-custom3 w-80 h-9 px-2 focus:outline-none focus:border-gray-custom focus:ring-2 focus:ring-gray-custom focus:ring-opacity-50"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="pb-5">
              <div className="pb-2">_email:</div>
              <div>
                <input
                  className="bg-black-600 border rounded-md border-gray-custom3 w-80 h-9 px-2 focus:outline-none focus:border-gray-custom focus:ring-2 focus:ring-gray-custom focus:ring-opacity-50"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="pb-5">
              <div className="pb-2">_message:</div>
              <div>
                <textarea
                  className="input-field bg-black-600 border rounded-md border-gray-custom3 w-80 h-64 px-2 pt-1 resize-none focus:outline-none focus:border-gray-custom focus:ring-2 focus:ring-gray-custom focus:ring-opacity-50"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-white-custom2 text-white-custom text-[14px] p-2 rounded-lg"
            >
              submit-message
            </button>
          </form>

          {status && <p className="text-white-custom mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Page;
