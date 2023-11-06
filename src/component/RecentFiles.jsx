import React, { useEffect, useState } from "react";
// import files from "../lib/const/files";

function RecentFiles() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:8000/my-router/media_files/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();

        setData(jsonData.response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="  bg-white justify-between items-center m-8 rounded-md border-[#E4E7EC] border-2 flex-1">
      <div>
        <h2 className="text-[18px] font-semibold p-5">Recent Files</h2>
        <div className="mt-3 overflow-auto">
          <table className="w-full text-[#404040]">
            <thead className="bg-[#e0edff]">
              <tr>
                <td></td>
                <td>Name</td>
                <td>Type</td>
                <td>Duration</td>
                <td>Date Created</td>
                <td>Last Updated</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((file) => (
                <tr key={file.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0048AD] rounded-sm"
                    />
                  </td>
                  <td>{file.name.split(".")[0]}</td>
                  <td>{file.file_type}</td>
                  <td>{file.duration}</td>
                  <td>{file.date_created.split("T")[0]}</td>
                  <td>{file.date_created.split("T")[0]}</td>
                  <td>
                    <a className="text-[#0048AD]" href="/">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RecentFiles;