import React from 'react';
import './DestinationsSection.css';

const DestinationsSection = () => {
  const destinations = [
    { id: 1, name: 'Paris', image: 'https://source.unsplash.com/random/800x600?paris', description: 'The City of Love' },
    { id: 2, name: 'Tokyo', image: 'https://source.unsplash.com/random/800x600?tokyo', description: 'The Land of the Rising Sun' },
    { id: 3, name: 'New York', image: 'https://source.unsplash.com/random/800x600?new york', description: 'The Big Apple' },
  ];

  return (
    <section className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-grid">{destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;