
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Product Analyst, Technology",
      company: "Thomson Reuters",
      location: "Mumbai",
      duration: "Nov 2023 – Present",
      achievements: [
        "Spearheaded migration of all agents from IBM Cloud to Microsoft Azure Cloud, enhancing system reliability and performance",
        "Led project resolving 90% of database plan cache issues, boosting system performance by 30%",
        "Overhauled internal tool DB Viewer, integrating APIs and enhancing UI with Retool for improved developer access",
        "Conducted comprehensive stakeholder interviews and provided regular updates, increasing project delivery satisfaction by 20%",
        "Designed multiple dashboards using Jira, Power BI, and Excel for enhanced data visualization",
        "Worked along with 6+ Development teams and 4+ Operation Teams"
      ],
      current: true,
      companyLogo: "/lovable-uploads/517c5e88-eec2-4e9b-b0b7-6bcf61165796.png"
    },
    {
      title: "Trainee Technical Product Analyst",
      company: "Thomson Reuters",
      location: "Mumbai",
      duration: "Nov 2022 – Oct 2023",
      achievements: [
        "Collaborated on Roll Forward Activity project, managing data migration across 10+ teams",
        "Led scrum ceremonies implementing agile methodologies, increasing team agility and project delivery speed by 30%",
        "Authored 300+ user stories with detailed requirements and clear acceptance criteria",
        "Conducted multiple UATs and created effective documentation for higher product quality"
      ],
      current: false,
      companyLogo: "/lovable-uploads/517c5e88-eec2-4e9b-b0b7-6bcf61165796.png"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-600"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="space-y-2 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl text-blue-600 font-semibold">{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">{exp.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{exp.duration}</span>
                    {exp.current && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Current
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-8">
                  <img 
                    src={exp.companyLogo} 
                    alt={`${exp.company} logo`}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
