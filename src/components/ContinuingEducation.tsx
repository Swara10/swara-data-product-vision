
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

const ContinuingEducation = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mr-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Continuing Education
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        </div>

        <Card className="p-8 max-w-4xl mx-auto hover:shadow-xl transition-all duration-300">
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Currently pursuing a Master of Science in Management of Technology at New York University, deepening understanding of how technology can drive business innovation.
            </p>
            
            <Badge className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 text-lg font-medium rounded-full hover:from-blue-600 hover:to-teal-600 transition-all duration-300">
              MS in Management of Technology - NYU (incoming fall)
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContinuingEducation;
