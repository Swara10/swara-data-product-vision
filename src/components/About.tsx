
import React from 'react';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hi! I'm Swara Vedak, an IT graduate with a passion for turning data into meaningful insights. 
              With nearly 3 years of experience as a Product Analyst at Thomson Reuters, I've discovered my 
              sweet spot at the intersection of technology and management.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              What excites me most about product management is how it perfectly blends my technical background 
              with strategic thinking. I get to dive deep into complex data challenges while also shaping 
              products that make a real difference for users and businesses.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I'm taking the next step in my journey by pursuing a Master of Science in Management 
              of Technology at New York University, where I'm excited to deepen my understanding of how 
              technology can drive business innovation.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:scale-105">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">3</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:scale-105">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-gray-600">User Stories</div>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 border-gray-200 hover:scale-105">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">90%</div>
                <div className="text-sm text-gray-600">Issue Resolution</div>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border-gray-200">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
                Contact Information
              </h3>
              <div className="space-y-3 text-gray-700">
                <div><strong>Location:</strong> Mumbai, India</div>
                <div><strong>Email:</strong> vedakswara@gmail.com</div>
                <div><strong>Phone:</strong> +91 9324718110</div>
                <div><strong>LinkedIn:</strong> swara-vedak</div>
                <div><strong>GitHub:</strong> Swara-Vedak</div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 border-gray-200">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3">
                Philosophy
              </h3>
              <p className="text-gray-700 italic">
                "Product management is the art of leading without authority, delivering without resources, and smiling while juggling chaos, opinions, and unrealistic deadlines ... all so users can click a button and say 'meh'."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
