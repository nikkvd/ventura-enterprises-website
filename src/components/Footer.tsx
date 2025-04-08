
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Ventura Enterprises</h3>
            <p className="mb-6 text-neutral-300">
              A leading pharmaceutical distributor committed to providing high-quality medical products to healthcare professionals, retailers, and hospitals across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-neutral-300 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#expertise" className="text-neutral-300 hover:text-primary transition-colors">Our Expertise</a>
              </li>
              <li>
                <a href="#mission" className="text-neutral-300 hover:text-primary transition-colors">Mission & Values</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-primary transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors">Pharmaceutical Distribution</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors">C&F Superstockist</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors">Franchise Opportunities</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors">Third Party Manufacturing</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-primary transition-colors">Export Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-neutral-300">123 Pharmaceutical Ave, Bangalore, India - 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <span className="text-neutral-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span className="text-neutral-300">info@venturaenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ventura Enterprises. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-400 hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-primary text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
