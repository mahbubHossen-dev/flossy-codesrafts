import React from 'react';

const HeaderSection = ({header, description}) => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
                {header}
            </h2>
            <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
                {description}
                
            </p>
        </div>
    );
};

export default HeaderSection;