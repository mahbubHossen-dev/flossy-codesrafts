import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { clinics } from '../data/testimonialData';




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
