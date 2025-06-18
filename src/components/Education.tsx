
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Management of Technology",
      institution: "New York University - Tandon School of Engineering",
      location: "New York, USA",
      period: "2024 - 2026",
      status: "In Progress",
      gpa: "N/A",
      relevantCourses: [
        "Technology Strategy",
        "Innovation Management", 
        "Data Analytics for Managers",
        "Project Management",
        "Digital Transformation"
      ],
      achievements: [
        "Graduate Research Assistant",
        "Dean's List Candidate"
      ]
    },
    {
      degree: "Bachelor of Engineering in Information Technology",
      institution: "University of Mumbai - Vidyalankar Institute of Technology",
      location: "Mumbai, India", 
      period: "2018 - 2022",
      status: "Completed",
      gpa: "8.69/10 CGPA",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Machine Learning",
        "Web Development",
        "Computer Networks"
      ],
      achievements: [
        "Intra College Research competition",
        "Technical Society Member",
        "Academic Excellence Award"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic foundation in technology and management
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={`${edu.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} hover:bg-current`}>
                        {edu.status}
                      </Badge>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>

                    <div className="text-lg font-semibold text-blue-600 mb-6">
                      CGPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <h4 className="font-semibold text-gray-800 mb-3">Relevant Coursework</h4>
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
