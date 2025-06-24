import React from 'react';

const cases = [
  {
    id: 1,
    title: 'Braces Correction',
    
    beforeImg: '/src/assets/before-1.jpg',
    afterImg: '/src/assets/after-1.jpg',
  },
  {
    id: 2,
    title: 'Teeth Whitening',
    beforeImg: '/src/assets/before-2.jpg',
    afterImg: '/src/assets/after-2.jpg',
  },
  {
    id: 3,
    title: 'Dental Implant',
    beforeImg: '/src/assets/before-3.jpg',
    afterImg: '/src/assets/after-3.jpg',
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
