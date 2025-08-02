// 📁 frontend/src/pages/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../api';

export default function Admin() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/applicants`)
      .then(res => setApplicants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
   <div className="p-8">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Panel – Applicants List</h2>
  {applicants.length === 0 ? (
    <p className="text-gray-500">No applicants found.</p>
  ) : (
    <div className="space-y-6">
      {applicants.map((a, i) => (
        <div
          key={i}
          className="border rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition duration-300"
        >
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">Name:</span> {a.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">Email:</span> {a.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">Phone:</span> {a.phone}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">Role:</span> {a.role}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-gray-800">Resume:</span>{' '}
            <a
              href={a.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View
            </a>
          </p>
        </div>
      ))}
    </div>
  )}
</div>

  );
}