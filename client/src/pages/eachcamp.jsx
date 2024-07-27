import React from 'react';
import CampCards from '../components/campcards';

const campData = [
  { id: 1, name: 'Ethics and Morals', image: 'https://i0.wp.com/cadetprogram.org/wp-content/uploads/2022/09/Mahesh-Joshi2.jpg', location: 'Belgaum', trainers: 5 },
  { id: 2, name: 'Ethics and Duties', image: 'https://media.licdn.com/dms/image/D5622AQGJrJ4VbFz1OQ/feedshare-shrink_800/0/1716209682311?e=2147483647&v=beta&t=FHsUD7wIe4W-XJU1sVv_0cpgnJO-bfehRa4jBzHmCn8', location: 'Belgaum', trainers: 3 },
  { id: 3, name: 'Ethics and Values', image: 'https://i0.wp.com/cadetprogram.org/wp-content/uploads/2022/09/Mahesh-Joshi2.jpg', location: 'Belgaum', trainers: 4 },
  { id: 4, name: 'Courage and Respect', image: 'https://media.licdn.com/dms/image/D5622AQGJrJ4VbFz1OQ/feedshare-shrink_800/0/1716209682311?e=2147483647&v=beta&t=FHsUD7wIe4W-XJU1sVv_0cpgnJO-bfehRa4jBzHmCn8', location: 'Belgaum', trainers: 2 },
];

export default function Eachcamp() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Training Camps</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {campData.map(camp => (
          <CampCards 
            key={camp.id}
            id={camp.id}
            image={camp.image}
            name={camp.name}
            location={camp.location}
            trainers={camp.trainers}
          />
        ))}
      </div>
    </div>
  );
}