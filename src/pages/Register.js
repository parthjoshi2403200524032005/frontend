
// 📁 frontend/src/pages/Register.js
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'Intern', resume: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/applicants', formData);
      setMessage('Application submitted successfully!');
      setFormData({ name: '', email: '', phone: '', role: 'Intern', resume: '' });
    } catch (err) {
      setMessage('Submission failed. Try again.');
    }
  };

  return (
  <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md mt-10">
  <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
    Register as Intern/Volunteer
  </h2>
  
  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      value={formData.name}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
      value={formData.phone}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <select
      name="role"
      value={formData.role}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option>Intern</option>
      <option>Volunteer</option>
    </select>

    <input
      type="url"
      name="resume"
      placeholder="Resume Link (Google Drive, etc.)"
      required
      value={formData.resume}
      onChange={handleChange}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </form>

  {message && (
    <p className="text-center text-green-600 font-medium mt-4">{message}</p>
  )}
</div>

  );
}