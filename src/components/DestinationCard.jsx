import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-sm">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-5 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-600">{destination.location}</p>
        <p className="mt-2 text-gray-700">{destination.description}</p>
        <p className="mt-2 font-semibold text-blue-600">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;