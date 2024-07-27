import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrainerData() {
      try {
        const response = await axios.post("http://127.0.0.1:8000/trainer/get_details", { id, "username" : "as", "email" : "asdf", "passwd" : "asdf", "location" : "sdf", "experience" : 32, "gender": "sdf"  });
        setTrainer(response.data.details);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching trainer data:", err);
        setError("Failed to load trainer details");
        setLoading(false);
      }
    }

    fetchTrainerData();
  }, [id]);

  // ... (keep handleAccept and handleDecline as they are)

  if (loading) return <div className="text-gray-700">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!trainer) return <div className="text-gray-700">No trainer data available</div>;

  return (
    <div className='my-2'>
      <div className="mx-8 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Trainer Dashboard</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600 uppercase mb-1">Name</p>
              <p className="text-lg font-semibold text-gray-800">{trainer.username}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-green-600 uppercase mb-1">Gender</p>
              <p className="text-lg font-semibold text-gray-800">{trainer.gender}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-600 uppercase mb-1">Experience</p>
              <p className="text-lg font-semibold text-gray-800">{trainer.experience} years</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-600 uppercase mb-1">Location</p>
              <p className="text-lg font-semibold text-gray-800">{trainer.location}</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg md:col-span-2">
              <p className="text-sm text-pink-600 uppercase mb-1">Email</p>
              <p className="text-lg font-semibold text-gray-800">{trainer.email}</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Camps Allocated</h2>
        <p className="text-gray-700">No camps allocated yet.</p>
      </div>
    </div>
  );
};

export default Dashboard;