
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-0 min-h-screen flex items-center bg-gradient-to-r from-neutral-100 to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-800">
              A Trusted Partner in <span className="text-primary">Pharmaceutical</span> Distribution
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-xl">
              Founded in 2017, Ventura Enterprises is a leading pharmaceutical distributor with over a decade of industry experience, specializing in allopathic and ayurvedic medicines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-lg py-6 px-8">
                Explore Our Services
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary-light hover:text-white text-lg py-6 px-8">
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Pharmaceutical Distribution" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
