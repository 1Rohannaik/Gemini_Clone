import React from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../AuthContext";

const Header = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-black text-stone-300 flex flex-col h-16  font-semibold overflow-hidden">
      <img
        src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png"
        alt="logo"
        className="mt-50 h-10 w-10 absolute mt-3 ml-10 hover:h-12 transation-all duration-700"
      />
      <ul className="flex gap-10 justify-end mt-3 mr-8 ">
        <li className="mt-2 flex mr-2 hover:underline">
          <NavLink to="/gemini">Gemini</NavLink>
        </li>
        <li className="mr-36 hover:underline">
          <p className="absolute mt-2 hover:underline">try gemini Advance</p>
        </li>
        <li className="mr-8 hover:underline">
          <p className="absolute mt-2 hover:underline">FAQs</p>
        </li>
        {user?.displayName ? (
          <li>
            <button
              onClick={handleSignOut}
              className="bg-blue-400 h-10 rounded-md pl-4 pr-4 font-medium text-black hover:h-12 transation-all duration-500 "
            >
              log out
            </button>
          </li>
        ) : (
          <li>
            <button className="bg-blue-400 h-10 rounded-md pl-4 pr-4 font-medium text-black hover:h-12 transation-all duration-500 ">
              <NavLink to="/">Sign in</NavLink>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
