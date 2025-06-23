import React from 'react';
import { FiMapPin } from 'react-icons/fi';

const clinics = [
  {
    id: 1,
    branch: "Banani Branch",
    time: "Sun – Thu, 10AM – 5PM",
    address: "House 12, Road 5, Banani, Dhaka"
  },
  {
    id: 2,
    branch: "Uttara Branch",
    time: "Sat – Wed, 9AM – 4PM",
    address: "Sector 11, Road 3, Uttara, Dhaka"
  },
  {
    id: 3,
    branch: "Dhanmondi Branch",
    time: "Sun – Thu, 11AM – 6PM",
    address: "Road 7A, Dhanmondi 27, Dhaka"
  }
];


const ClinicLocations = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Clinic Locations & Visiting Hours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="bg-white shadow-md p-6 rounded-xl space-y-3 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 text-blue-600 text-xl font-semibold">
              <FiMapPin className="text-2xl" />
              <span>{clinic.branch}</span>
            </div>
            <p className="text-gray-700">{clinic.time}</p>
            <p className="text-gray-500 text-sm">{clinic.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClinicLocations;
