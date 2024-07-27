import React from 'react';
import { useParams } from 'react-router-dom';

const CampDetail = () => {
  const { id } = useParams();
  const campData = {
    id: id,
    name: "Ethics and Morals",
    location: "Belgaum",
    trainers: [
      { id: 1, name: "Dushyant Bhardwaj", gender: "Male", experience: "5 years", status: "Confirmed" },
      { id: 2, name: "Ananya", gender: "Female", experience: "3 years", status: "Cancelled" },
      { id: 3, name: "Saketh Shetty", gender: "Male", experience: "7 years", status: "Confirmed" },
      { id: 4, name: "Kanika", gender: "Female", experience: "4 years", status: "Confirmed" },
      { id: 5, name: "Shreeya", gender: "Female", experience: "5 years", status: "Confirmed" },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700">{campData.name}</h1>
      <p className="text-xl mb-6 text-gray-600">Location: <span className="font-semibold">{campData.location}</span></p>
      
      <h2 className="text-2xl font-semibold mb-4 text-slate-600">Trainers</h2>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Sr. No</th>
              <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Name</th>
              <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Gender</th>
              <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Experience</th>
              <th className="py-4 px-6 text-left text-base font-semibold uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {campData.trainers.map((trainer, index) => (
              <tr key={trainer.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-4 px-6 text-base font-bold text-gray-900">{index + 1}</td>
                <td className="py-4 px-6 text-base font-bold text-gray-900">{trainer.name}</td>
                <td className="py-4 px-6 text-base font-bold text-gray-700">{trainer.gender}</td>
                <td className="py-4 px-6 text-base font-bold text-gray-700">{trainer.experience}</td>
                <td className="py-4 px-6 text-base">
                  <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                    trainer.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {trainer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampDetail;