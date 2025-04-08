
import React from 'react';
import { Target, Clock, Shield, Users } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Integrity",
      description: "We operate with honesty and ethical standards in all our business dealings."
    },
    {
      icon: <Target className="h-10 w-10 text-white" />,
      title: "Excellence",
      description: "We strive for the highest quality in our products and services."
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Relationships",
      description: "We build and maintain strong, long-lasting partnerships with clients and manufacturers."
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Reliability",
      description: "We ensure timely delivery and consistent service that our partners can count on."
    }
  ];

  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Mission</h2>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <p className="text-lg text-white/90 mb-6">
                We are committed to improving healthcare accessibility by delivering safe, effective, and affordable medical solutions.
              </p>
              <p className="text-lg text-white/90">
                At Ventura Enterprises, we believe in the right to quality healthcare for all and strive to make a lasting impact on
                global health.
              </p>
            </div>

            <div className="mb-12 reveal" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Values</h2>
              <div className="w-24 h-1 bg-white mb-6"></div>
              <p className="text-lg text-white/90">
                We operate with integrity, excellence, and a deep commitment to fostering strong, long-lasting relationships with our partners and clients.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 reveal" 
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
