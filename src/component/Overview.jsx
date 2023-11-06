import React from "react";
import user from "../lib/const/user";
import PropTypes from "prop-types";

function Overview({ openModal }) {
  return (
    <div className=" flex  flex-wrap justify-between items-center m-8">
      <div>
        <h2 className="text-[24px] font-semibold">Welcome {user.firstName}</h2>
        <p className="text-[14px] text-gray-500 mt-1">
          Upload your audio and Video to covert to text
        </p>
      </div>
      <button
        className="bg-[#0048AD] w-[18%] max-sm:w-full py-4  text-[#fff] rounded-md mt-2"
        onClick={openModal}
      >
        Transcibe File
      </button>
    </div>
  );
}

Overview.propTypes = {
  openModal: PropTypes.func.isRequired, // Define openModal prop with the appropriate type
};
export default Overview;
