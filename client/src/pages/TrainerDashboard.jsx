import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const staticData = {
  trainers: [
    {
      id: '1',
      name: 'Rahul Verma',
      gender: 'Male',
      campsAttended: 7,
      location: 'Mumbai',
      email: 'abcd@gmail.com',
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
          campId: '102',
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
      email: 'abcd@gmail.com',
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
    <div className='my-2'>
    <div className=" mx-8 p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Trainer Dashboard</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 uppercase mb-1">Name</p>
            <p className="text-lg font-semibold text-gray-800">{trainer.name}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600 uppercase mb-1">Gender</p>
            <p className="text-lg font-semibold text-gray-800">{trainer.gender}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-600 uppercase mb-1">Camps Attended</p>
            <p className="text-lg font-semibold text-gray-800">{trainer.campsAttended}</p>
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
      {trainer.campsAllocated.length === 0 ? (
        <p className="text-gray-700">No camp allocated yet.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6 overflow-hidden">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-500 text-white">
                <tr>
                  <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider rounded-tl-lg">Camp Name</th>
                  <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Camp ID</th>
                  <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Date</th>
                  <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Location</th>
                  <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Route</th>
                  <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider rounded-tr-lg">Approval</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {trainer.campsAllocated.map((camp, index) => (
                  <tr key={camp.campId} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-4 px-6 text-base text-gray-700">{camp.campName}</td>
                    <td className="py-4 px-6 text-base text-gray-700">{camp.campId}</td>
                    <td className="py-4 px-6 text-base text-gray-700">{camp.date}</td>
                    <td className="py-4 px-6 text-base text-gray-700">{camp.location}</td>
                    <td className="py-4 px-6 text-base text-gray-700">{camp.route}</td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button 
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
                          onClick={handleAccept}
                        >
                          Accept
                        </button>
                        <button 
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                          onClick={handleDecline}
                        >
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Dashboard;