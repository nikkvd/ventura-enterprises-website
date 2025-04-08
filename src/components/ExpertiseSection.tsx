
import React from 'react';
import { HeartPulse, Truck, Building2, Users, Stethoscope, Globe } from 'lucide-react';

const ExpertiseSection = () => {
  const services = [
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      title: "Doctors",
      description: "Supplying quality medicines and medical products directly to healthcare professionals."
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Retailers",
      description: "Reliable distribution network ensuring timely delivery to retail pharmacies."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Wholesalers",
      description: "Bulk supply capabilities with competitive pricing for wholesalers across regions."
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: "Hospitals",
      description: "Meeting the diverse pharmaceutical needs of healthcare facilities with precision."
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Third Party Manufacturing",
      description: "Custom manufacturing solutions for exports, meeting international standards."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Franchise Business",
      description: "Offering lucrative franchise opportunities with comprehensive support."
    }
  ];

  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 reveal">Our Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 reveal" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto reveal" style={{ animationDelay: '0.4s' }}>
            We pride ourselves on building strong partnerships with leading manufacturers and delivering high-quality medical products. With a
            robust distribution network, we cater to various sectors in the healthcare industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group reveal" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 reveal" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-800">Our Business Model</h3>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our business model emphasizes efficient distribution and ensures that healthcare products reach clients swiftly and safely. We focus on maintaining quality standards throughout our supply chain and building lasting relationships with our partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
