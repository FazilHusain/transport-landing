import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
const Submissions = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const fetchSubmissions = async () => {
      try {
        const response = await axios.get(BASE_URL + "/form/submissions");
        setData(response.data);
      } catch (err) {
        setError("❌ Failed to fetch submissions.");
      }
    };

  useEffect(() => {
    fetchSubmissions();
  }, []);

 return (
  <div className="px-4 py-8 max-w-6xl mx-auto min-h-screen bg-white">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">Form Submissions</h2>

    {error && <p className="text-red-500 mb-4">{error}</p>}

    {data.length === 0 ? (
      <p className="text-gray-500">No submissions found.</p>
    ) : (
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-xs leading-normal">
              <th className="py-3 px-6 text-left border">Name</th>
              <th className="py-3 px-6 text-left border">Email</th>
              <th className="py-3 px-6 text-left border">Phone</th>
              <th className="py-3 px-6 text-left border">Message</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((entry, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition duration-200">
                <td className="py-3 px-6 border">{entry.name}</td>
                <td className="py-3 px-6 border">{entry.email}</td>
                <td className="py-3 px-6 border">{entry.phone}</td>
                <td className="py-3 px-6 border">{entry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
};

export default Submissions;
