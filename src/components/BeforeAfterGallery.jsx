import React from 'react';
import before1 from '/src/assets/before-1.jpg'
import before2 from '/src/assets/before-2.jpg'
import before3 from '/src/assets/before-3.jpg'
import after1 from '/src/assets/after-1.jpg'
import after2 from '/src/assets/after-2.jpg'
import after3 from '/src/assets/after-3.jpg'
3
const cases = [
  {
    id: 1,
    title: 'Braces Correction',
    
    beforeImg: `${before1}`,
    afterImg: `${after1}`,
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    beforeImg: `${before2}`,
    afterImg: `${after2}`,
  },
  {
    id: 3,
    title: 'Dental Implant',
    beforeImg: `${before3}`,
    afterImg: `${after3}`,
  },
];

const BeforeAfterGallery = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Before & After Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((item) => (
          <div key={item.id} className="space-y-4">
            <h3 className="text-xl font-semibold text-center text-gray-800">{item.title}</h3>
            <div className="flex gap-4 justify-center">
              <div className="text-center">
                <img
                  src={item.beforeImg}
                  alt={`${item.title} - Before`}
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm text-gray-600">Before</p>
              </div>
              <div className="text-center">
                <img
                  src={item.afterImg}
                  alt={`${item.title} - After`}
                  className="w-40 h-40 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm text-gray-600">After</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
