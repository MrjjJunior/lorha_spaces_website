import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gray-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Architectural Blueprint" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              The Intelligent Way to Plan.<br />
              <span className="text-teal-400">The Compassionate Way to Empower.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Lorha Spaces is a multidisciplinary architecture and engineering firm committed to superior quality, sustainable infrastructure, and social impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-sm text-gray-900 bg-teal-400 hover:bg-teal-500 transition-all duration-200"
              >
                Our Expertise
              </Link>
              <Link 
                to="/chat" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-sm text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
              >
                Talk to AI Assistant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                Bridging the gap between infrastructure and social impact.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2016, Lorha Spaces is a 100% Black-owned consulting firm. We uphold the highest standards of quality through affiliations with ECSA, SACAP, and SAICE, while driving community upliftment through our non-profit arm, Esethu Skills Development NPC.
              </p>
              <ul className="space-y-4 mb-8">
                {['Level 1 BBBEE Contributor', 'Multidisciplinary Expertise', 'Community Focused'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-teal-600 font-semibold hover:text-teal-700 inline-flex items-center">
                Learn more about our story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/800/600?random=10" alt="Meeting" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-gray-900 text-white p-8 rounded-lg shadow-xl max-w-xs hidden md:block">
                <p className="text-2xl font-bold mb-2">Since 2016</p>
                <p className="text-sm text-gray-400">Delivering intelligent, sustainable, and client-focused solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Comprehensive Services</h2>
            <p className="text-lg text-gray-600">We offer end-to-end solutions across the built environment lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to="/services" className="text-teal-600 font-medium text-sm hover:text-teal-700">View Details &rarr;</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Whether it's complex infrastructure or community development, we bring precision and passion to every engagement.
          </p>
          <Link to="/contact" className="bg-white text-teal-900 px-8 py-4 rounded-sm font-bold hover:bg-teal-50 transition-colors">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;