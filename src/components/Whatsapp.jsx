import React from "react";
import "remixicon/fonts/remixicon.css";

const Whatsapp = () => {
  return (
    <div className="w-10 h-10 sticky left-[85%] top-[83%] flex items-center justify-center rounded-full border-2 border-green-600 bg-white z-10  md:w-14 md:h-14 md:left-[93%] md:top-[83%]">
      <a href="https://chat.whatsapp.com/HAl8kBlUeH3586byjRzoxK">
        <i className="text-2xl md:text-3xl text-green-600 ri-whatsapp-fill"></i>{" "}
      </a>
    </div>
  );
};

export default Whatsapp;
