import React from "react";
import Header from "../components/Header";
import { UserAuth } from "../AuthContext"; // Make sure you're importing UserAuth correctly
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const { googleSignIn, logOut, user } = UserAuth(); // Extract logOut function from UserAuth

  const handleSignOut = async () => {
    try {
      await logOut(); // Now logOut is defined, so you can call it here
      navigate("/"); // Optionally redirect user after sign out
    } catch (err) {
      console.log(err);
    }
  };

  const handelGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/Gemini"); // Redirect to Gemini after successful sign-in
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-black h-screen text-white relative">
        <div className="absolute">
          <img
            src="https://www.gstatic.com/lamda/images/gemini_wordmark_landing_page_238102af073d0ae2763aa5.svg"
            alt="logo"
            className="flex justify-start items-start ml-10 sm:ml-48 mt-8 sm:mt-32"
          />
        </div>
        <div>
          <div className="font-semibold text-xl sm:text-3xl ml-16 sm:ml-48 pt-48 sm:pt-72">
            <p>Supercharge your creativity</p>
            <p>and productivity</p>
          </div>
        </div>
        <div className="ml-16 sm:ml-48 mt-2 sm:mt-5 text-stone-400">
          <p>Chat to start writing, planning, learning and</p>
          <p>more with Google AI</p>
        </div>
        <div>
          {user?.displayName ? (
            <button
              onClick={handleSignOut}
              className="bg-blue-400 text-black p-4 pl-6 pr-6 font-semibold rounded-full ml-40 sm:ml-48 mt-2 sm:mt-5"
            >
              Log out
            </button>
          ) : (
            <button
              onClick={handelGoogleSignIn}
              className="bg-blue-400 text-black p-4 pl-6 pr-6 font-semibold rounded-full ml-40 sm:ml-48 mt-2 sm:mt-5"
            >
              Sign in
            </button>
          )}
        </div>
        <div className="sm:flex justify-end items-center mr-4 sm:mr-52">
          <img
            src="https://images.pexels.com/photos/3755707/pexels-photo-3755707.jpeg?cs=srgb&dl=pexels-olly-3755707.jpg&fm=jpg"
            alt="hero logo"
            className="ml-14 sm:ml-10 mt-4 sm:mt-4 sm:h-80 hover:h-96 transition-all duration-500 mb-80 absolute rounded-2xl"
          />
        </div>
      </div>
      <div className="bg-zinc-900 h-24 pt-8 flex">
        <img
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_148x48px.svg"
          alt="footer logo"
          className="ml-12 h-7"
        />
        <p className="ml-8 mt-1 text-stone-500">Privacy & Terms</p>
      </div>
    </div>
  );
};

export default Signin;

