
import React, { useEffect, useRef } from 'react';
import { CheckCircle, TrendingUp, Award, Shield } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const highlights = [
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Industry Experience",
      description: "Over a decade of expertise in pharmaceutical distribution."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Quality Assurance",
      description: "Committed to providing high-quality medical products to healthcare professionals."
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Trusted Partnerships",
      description: "Strong network with leading pharmaceutical manufacturers."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Reliable Distribution",
      description: "Ensuring safe and effective medicines reach those who need them."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-neutral-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800 reveal">About Ventura Enterprises</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 reveal" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto reveal" style={{ animationDelay: '0.4s' }}>
            Founded in 2017, Ventura Enterprises is a prominent name in the pharmaceutical distribution and franchise business,
            with over a decade of industry experience. We specialize in distributing allopathic and ayurvedic medicines, serving as
            a trusted C&F superstockist and franchise dealer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 reveal" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-800">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-neutral-800">Who We Are</h3>
            <p className="text-neutral-700 mb-4">
              Our commitment is to provide high-quality medical products to healthcare professionals, retailers, and hospitals, ensuring that safe and effective medicines reach those who need them.
            </p>
            <p className="text-neutral-700 mb-4">
              With a robust network of partnerships with leading manufacturers, we supply a comprehensive range of pharmaceutical
              products to doctors, wholesalers, and healthcare facilities across India.
            </p>
            <p className="text-neutral-700">
              We are also open to third party manufacturing for exports and franchise business.
            </p>
          </div>

          <div className="relative reveal" style={{ animationDelay: '0.8s' }}>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg bg-primary/20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-secondary/20"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Pharmaceutical Warehouse" 
              className="w-full h-auto rounded-lg relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
