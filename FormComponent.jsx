import { useState } from "react";


const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    skills: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Success message from backend
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-[400px] p-4 border border-gray-300 rounded-md text-white mx-auto">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md text-black" required />
        </label>
        <label className="block mb-2">
          Industry:
          <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md text-black" required />
        </label>
        <label className="block mb-2">
          Skills:
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md text-black" required />
        </label>
        <label className="block mb-2">
          Experience:
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md text-black" required />
        </label>
        <button type="submit" className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
