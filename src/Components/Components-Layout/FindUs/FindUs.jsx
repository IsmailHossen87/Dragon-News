import React from "react";
import { FaFacebook, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-3">Find Us On</h2>
      <div className="join flex *:bg-white join-vertical ">
        <button className="btn join-item justify-start space-y-3 text-lg">
          <FaFacebook className="text-blue-400"></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start space-y-3 text-lg">
          <FaGithub ></FaGithub>GitHub
        </button>
        <button className="btn join-item justify-start space-y-3 text-lg">
          <FaTwitter></FaTwitter>Twiter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
