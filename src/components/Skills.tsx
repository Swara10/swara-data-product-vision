
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Technologies",
      icon: "💻",
      skills: ["SQL", "Python", "R", "Kubernetes", "Power BI", "Microsoft Azure Cloud", "Git", "Github"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Retool", "Figma", "Postman", "Swagger", "draw.io", "Lucid Charts", "Jira", "ADO (Azure DevOps)"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Product Management",
      icon: "📊",
      skills: ["Azure DevOps", "Agile Methodologies", "Data Analysis", "Product Roadmapping", "User Experience Design", "Backlog Prioritization"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Documentation & Analysis",
      icon: "📝",
      skills: ["Business Analysis", "PRD (Product Requirements Document)", "BRD (Business Requirements Document)", "TRD (Technical Requirements Document)"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const certifications = [
    "PSPO Certified - Professional Scrum Product Owner",
    "Microsoft Certified Business Analyst",
    "Pendo AI Product Management Certification",
    "LinkedIn Kubernetes Certification",
    "LinkedIn Project Management Certification"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical skills and certifications spanning product management, data science, and cloud technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-xl mr-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="outline" 
                    className="hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 border-none">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Programming Languages</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
            <div className="text-gray-600">Tools & Platforms</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Professional Certifications</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
