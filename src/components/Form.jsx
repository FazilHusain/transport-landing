import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, phone } = formData;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !phone) return "All fields are required.";
    if (!emailPattern.test(email)) return "Invalid email format.";
    if (!phonePattern.test(phone)) return "Phone must be 10 digits.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    try {
      await axios.post(BASE_URL + "/form/create", formData);
      setStatus("Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Submission failed. Try again later.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-10" id="contact-form">
      <h2 className="text-3xl font-bold mb-6">Request a Callback</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border px-4 py-2 rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border px-4 py-2 rounded"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full border px-4 py-2 rounded"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {status && <p className="text-sm text-gray-700 mt-2">{status}</p>}
      </form>
    </div>
  );
};

export default Form;
