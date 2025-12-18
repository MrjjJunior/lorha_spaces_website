import React from 'react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      <SEO 
        title="About Us | 100% Black-Owned Engineering Firm"
        description="Learn about Lorha Spaces' journey since 2016. Discover our vision for sustainable infrastructure and our commitment to youth skills development in South Africa."
      />
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

        {/* Community Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" alt="Youth training session for AutoCAD and Civil 3D skills" className="rounded-lg shadow-lg" />
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