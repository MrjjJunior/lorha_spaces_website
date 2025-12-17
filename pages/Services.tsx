import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Multidisciplinary expertise delivering excellence across engineering, architecture, and project management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-24">
          {SERVICES_DATA.map((service, index) => {
             const isEven = index % 2 === 0;
             return (
               <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                 <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-teal-100 rounded-lg">
                        <service.icon className="w-8 h-8 text-teal-700" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                          <Check className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="flex-1 w-full">
                   <div className="aspect-w-16 aspect-h-10 rounded-xl overflow-hidden shadow-2xl bg-gray-200">
                     {/* Placeholder image logic based on index */}
                     <img 
                      src={`https://picsum.photos/800/600?random=${index + 30}`} 
                      alt={service.title} 
                      className="object-cover w-full h-full"
                    />
                   </div>
                 </div>
               </div>
             )
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;