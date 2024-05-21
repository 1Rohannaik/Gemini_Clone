import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
  IoTimerOutline,
  IoSettingsOutline,
  IoSendSharp,
} from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { Context } from "../context/Context";

const NavbarItem = ({ icon, label, expanded }) => (
  <div className="relative flex items-center">
    {icon}
    {expanded && <span className="text-white ml-3">{label}</span>}
  </div>
);

const Gemini = () => {
  const { loading, onSent, resultData, input, setInput } = useContext(Context);
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      const newMessage = { type: "user", text: input };
      setMessages([newMessage, ...messages]);
      onSent(input);
      setInput("");
    }
  };

  return (
    <div className="bg-black h-screen flex">
      <div
        className={`h-full bg-zinc-900 ${
          expanded ? "w-52" : "w-16"
        } flex flex-col justify-between items-center py-6 transition-all duration-500`}
      >
        <div className="flex flex-col items-center w-full gap-10">
          <GiHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleNavbar}
          />
          <button className="text-white text-3xl bg-slate-800 h-10 w-10 rounded-full">
            +
          </button>
          {expanded && <p className="text-white mt-2">New chat</p>}
        </div>
        <div className="flex flex-col items-center w-full gap-6 mb-6">
          <NavbarItem
            icon={<IoIosHelpCircleOutline className="text-white text-xl" />}
            label="Help"
            expanded={expanded}
          />
          <NavbarItem
            icon={<IoTimerOutline className="text-white text-xl" />}
            label="Time"
            expanded={expanded}
          />
          <NavbarItem
            icon={<IoSettingsOutline className="text-white text-xl" />}
            label="Settings"
            expanded={expanded}
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow items-center justify-between p-6">
        <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-semibold">
          Hello Rohan, How can I help you today?
        </h1>

        <div className="w-full h-[450px] mt-2 overflow-y-scroll flex flex-col gap-2">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
            alt="logo"
            className="mt-50 h-10 w-10  sticky"
          />
          {messages.map((message, index) => (
            <div key={index} className="text-white ml-7 mb-3">
              <p>{message.text} ?</p>
            </div>
          ))}
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="spinner"></div>
            </div>
          ) : (
            resultData && (
              <div className="bg-black p-6 rounded-lg text-white font-semibold space-y-4 leading-loose">
                {resultData}
              </div>
            )
          )}
        </div>
        <div className="relative w-full flex items-center mt-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter your prompt"
            className="flex-grow h-20 rounded-full bg-zinc-800 focus:outline-none text-xl pl-16 pr-20 text-slate-500"
          />
          <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-2xl flex gap-3">
            <FaImage />
            <FaMicrophone />
            <IoSendSharp onClick={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gemini;
