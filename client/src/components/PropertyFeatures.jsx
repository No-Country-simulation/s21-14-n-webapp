import React from 'react'

const PropertyFeatures = ({ features }) => {
  return features.map((feature, index) => (
        <div key={index} className="p-4">
          <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
          <ul className="space-y-2">
            {feature.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center gap-2">
                <div className="ml-5 w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
    ));  
};

export default PropertyFeatures