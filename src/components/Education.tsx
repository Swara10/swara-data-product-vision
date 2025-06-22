
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "PG Diploma in Data Science and Business Analytics",
      institution: "School of Data Science and Business Intelligence, University of Mumbai",
      location: "Mumbai, India", 
      period: "Jul 2022 - May 2023",
      status: "Completed",
      gpa: "7.5/10.00",
      gpaLabel: "GPA",
      badge: "Postgraduate",
      badgeColor: "bg-blue-100 text-blue-800",
      relevantCourses: [
        "Power BI",
        "Data Analytics",
        "R Language",
        "Advance SQL",
        "Financial Analytics"
      ],
      achievements: [
        "Specialized in advanced analytics and machine learning"
      ]
    },
    {
      degree: "BSc. Information Technology",
      institution: "Vidyalankar School of Information Technology, University of Mumbai",
      location: "Mumbai, India", 
      period: "Jul 2019 - May 2022",
      status: "Completed",
      gpa: "9.68/10.00",
      gpaLabel: "GPA",
      badge: "Undergraduate",
      badgeColor: "bg-teal-100 text-teal-800",
      relevantCourses: [
        "C",
        "C++",
        "C#",
        "Python",
        "Web Development",
        "NGL",
        "SDLC",
        "Software Engineering"
      ],
      achievements: [
        "3rd Rank in BSc.IT - Exceptional Academic Performance"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation with exceptional performance and recognition in technology and data science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${edu.badgeColor} hover:bg-current text-sm px-3 py-1`}>
                      {edu.badge}
                    </Badge>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-800">{edu.gpa}</div>
                      <div className="text-sm text-gray-600">{edu.gpaLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-blue-600 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" className="border-blue-200 text-blue-700 text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
