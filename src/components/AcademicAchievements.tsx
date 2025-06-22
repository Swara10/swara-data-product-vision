
import React from 'react';
import { Card } from '@/components/ui/card';

const AcademicAchievements = () => {
  const achievements = [
    {
      number: "1",
      title: "3rd Rank in BSc.IT",
      subtitle: "Vidyalankar School of Information Technology, University of Mumbai",
      description: "Achieved exceptional academic performance with 9.68/10.00 GPA"
    },
    {
      number: "2", 
      title: "First Prize Winner",
      subtitle: "AR Based: Home 360 final year project",
      description: "Won first prize for innovative AR-based interior design application"
    },
    {
      number: "3",
      title: "College Level Publication",
      subtitle: "'Fintech & Big Data in 21st Century' conference and V-Search intra college competition",
      description: "Research paper on AR Based: Home 360 published at conference and competition"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Academic Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{achievement.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicAchievements;
