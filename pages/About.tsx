import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GROWTH_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="bg-gray-900 text-white py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Broad vision. Careful thought. Hand-crafted design.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-teal-500 inline-block pb-2">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To lead in consulting engineering and technical education by applying proven methods with a fresh, inclusive approach. We aim to compete globally while transforming local communities.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-teal-300 inline-block pb-2">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To develop infrastructure using sound engineering principles and empower young professionals with the knowledge and expertise to excel. We prioritize environmental responsibility and social equity in every project.
            </p>
          </div>
        </div>

        {/* Growth Chart */}
        <div className="mb-24 bg-gray-50 p-10 rounded-xl">
           <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Impact & Growth</h2>
             <p className="text-gray-500">Consistent revenue growth and community reach since inception.</p>
           </div>
           
           <div className="h-[400px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart
                 data={GROWTH_DATA}
                 margin={{
                   top: 20,
                   right: 30,
                   left: 20,
                   bottom: 5,
                 }}
               >
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="year" />
                 <YAxis />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                 />
                 <Bar dataKey="revenue" fill="#0d9488" name="Revenue (ZAR)" radius={[4, 4, 0, 0]} />
                 <Bar dataKey="users" fill="#111827" name="Beneficiaries" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Community Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://picsum.photos/800/800?random=20" alt="Community Training" className="rounded-lg shadow-lg" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community & Social Responsibility</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Lorha Spaces, we don’t just design and build—we mentor, train, and uplift. Through our nonprofit arm, <strong>Esethu Skills Development NPC</strong>, we extend our expertise to empower youth in township and rural schools.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide technical skills in AutoCAD, Civil 3D, and Revit. This fusion of professional consulting and social responsibility defines who we are: a company that builds with purpose.
              </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;