import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

const staticData = {
  trainers: [
    {
      id: '1',
      name: 'Rahul Verma',
      gender: 'Male',
      campsAttended: 7,
      location: 'Mumbai',
      phoneNumber: '9876543210',
      campsAllocated: [
        {
          campName: 'Winter Camp',
          campId: '101',
          date: '2024-12-15',
          location: 'Lonavala',
          route: 'Route from Rahul\'s location to Lonavala'
        },
        {
          campName: 'Winter Camp2',
          campId: '101',
          date: '2024-12-15',
          location: 'Lonavala',
          route: 'Route from Rahul\'s location to Lonavala'

        }
      ]
    },
    {
      id: '2',
      name: 'Priya Sharma',
      gender: 'Female',
      campsAttended: 4,
      location: 'Delhi',
      phoneNumber: '8765432109',
      campsAllocated: []
    }
  ]
};

const Dashboard = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const trainerData = staticData.trainers.find(trainer => trainer.id === id);
    setTrainer(trainerData);
  }, [id]);

  const handleAccept = () => {
    alert('Camp accepted');
  };

  const handleDecline = () => {
    alert('Camp declined');
  };

  if (!trainer) return <div className="text-gray-700">Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Trainer Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
        <p className="text-gray-700"><span className="font-semibold">Name:</span> {trainer.name}</p>
        <p className="text-gray-700"><span className="font-semibold">Gender:</span> {trainer.gender}</p>
        <p className="text-gray-700"><span className="font-semibold">Camps Attended:</span> {trainer.campsAttended}</p>
        <p className="text-gray-700"><span className="font-semibold">Location:</span> {trainer.location}</p>
        <p className="text-gray-700"><span className="font-semibold">Phone Number:</span> {trainer.phoneNumber}</p>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Camps Allocated</h2>
      {trainer.campsAllocated.length === 0 ? (
        <p className="text-gray-700">No camp allocated yet.</p>
      ) : (
        trainer.campsAllocated.map((camp) => (
          <div key={camp.campId} className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <p className="text-gray-700"><span className="font-semibold">Camp Name:</span> {camp.campName}</p>
            <p className="text-gray-700"><span className="font-semibold">Camp ID:</span> {camp.campId}</p>
            <p className="text-gray-700"><span className="font-semibold">Date:</span> {camp.date}</p>
            <p className="text-gray-700"><span className="font-semibold">Location:</span> {camp.location}</p>
            <p className="text-gray-700"><span className="font-semibold">Route:</span> {camp.route}</p>
            <div className="flex space-x-4 mt-4">
              <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAccept}
              >
                Accept
              </button>
              <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleDecline}
              >
                Decline
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
