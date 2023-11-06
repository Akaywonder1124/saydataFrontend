import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { LuUploadCloud } from "react-icons/lu";

function Modal({ onClose }) {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);

  async function onFileUpload(file) {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setIsLoading(true);
        const response = await fetch(
          "https://saydata-backend-api.onrender.com/my-router/uploadfile/",
          {
            method: "POST",
            body: formData,
          }
        );
        setIsLoading(false);
        window.location.reload();
        onClose();
        if (response.ok) {
          const data = await response.json();
          // Handle a successful response from the server
          console.log(data.response);
        } else {
          // Handle errors
          console.error("Error uploading media file.");
        }
      } catch (error) {
        console.error("Error uploading media file:", error);
      }
    }
  }

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
      onFileUpload(file);
    }
  };

  const handleFileInputClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      onFileUpload(file);
    }
  };

  return (
    <div className="h-screen w-screen z-20 absolute bg-[#98A2B3] flex justify-center items-center bg-opacity-80 py-20">
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <div className=" w-1/2 max-md:w-[90%] bg-white p-10 rounded-2xl m">
          <div className="flex justify-between flex-1 item-center w-full">
            <h1 className="font-semibold text-[22px]">Transcribe File</h1>
            <button>
              <IoIosClose size={30} onClick={onClose} />
            </button>
          </div>
          <div className="w-full mt-4">
            <label
              htmlFor="selectField"
              className="block text-[15px] font-[500] text-[#121212] mb-2"
            >
              Transcription Language
            </label>
            <select
              id="selectField"
              name="selectField"
              className="w-full p-2 border-2 border-gray-300 rounded-md  h-12 text-[#98A2B3] focus:outline-[#98A2B3]"
            >
              <option value="option1">Default</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div
            className={`flex flex-col items-center justify-center border-dashed border-2 mt-4 rounded-md p-10 drag-drop-area pt-4  my-4 cursor-pointer  ${
              isDragging ? "bg-gray-100" : "bg-white"
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={handleFileInputClick}
          >
            {/* <div className={`modal ${showModal ? "modal-active" : ""}`}></div>
          <div className="modal-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <h2>Upload File</h2>
            <input
              type="file"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
          </div>
        </div> */}

            <i className="p-2 rounded-full bg-[#E0EDFF]">
              <LuUploadCloud size={30} color="#0048AD" />
            </i>
            <div>
              <p className="text-[#475367] max-md:text-[14px]">
                <span className="text-[#0048AD] font-semibold">
                  Click to Upload
                </span>{" "}
                or Drag & Drop
              </p>

              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileInputChange}
              />
            </div>
            <p className="text-center text-[13px] text-[#98A2B3]  max-md:text-[12px]">
              The maximum file size is 1GB for audio and 10GB for videos.
              Supported formats: mp4, wav, caf, aiff, avi, rmvb, flv, m4a, mov,
              wmv, wma
            </p>
          </div>
          <div className="w-full mt-4">
            <label
              htmlFor="selectField"
              className="block text-[15px] font-[500] text-[#121212] mb-2"
            >
              Import from Link
            </label>
            <input
              type="text"
              placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
              className="w-full p-2 border-2 border-gray-300 rounded-md  h-12 text-[#98A2B3] focus:outline-[#98A2B3]"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <input
              type="checkbox"
              id="speakerIdentification"
              name="speakerIdentification"
              className="w-5 h-5 rounded-r-md"
            />
            <label className="font-medium text-[#101928]">
              Speaker Identification
            </label>
          </div>
          <div className="flex mt-4">
            <button className="w-full text-white bg-[#D0D5DD] h-12 rounded-md font-semibold">
              Transcribe File
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function LoadingMessage() {
  return (
    <div className="text-white text-3xl max-md:text-md text-center font-bold">
      Transcribing, Please wait...
    </div>
  );
}
export default Modal;
