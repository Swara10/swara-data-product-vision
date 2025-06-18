
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Data Science & Analytics",
      description: "Predictive modeling, statistical analysis, and machine learning implementation",
      icon: "📊",
      features: [
        "Predictive modeling with ML algorithms",
        "Statistical analysis and data visualization",
        "Business intelligence dashboard creation",
        "Data pipeline optimization"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Product Analysis",
      description: "Requirements gathering, stakeholder management, and product roadmapping",
      icon: "🎯",
      features: [
        "Comprehensive requirements gathering",
        "Stakeholder interview and management",
        "Product roadmap development",
        "User story creation and backlog management"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Cloud Migration & Optimization",
      description: "Azure cloud solutions and system performance enhancement",
      icon: "☁️",
      features: [
        "Azure cloud migration strategies",
        "System performance optimization",
        "Infrastructure cost reduction",
        "Cloud security implementation"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Dashboard Design",
      description: "Data visualization using Power BI, Jira, and Excel",
      icon: "📈",
      features: [
        "Interactive Power BI dashboards",
        "Custom Jira reporting solutions",
        "Excel-based analytics tools",
        "Real-time data monitoring systems"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Agile Consulting",
      description: "Scrum implementation and agile methodology optimization",
      icon: "⚡",
      features: [
        "Scrum ceremony facilitation",
        "Agile process optimization",
        "Team productivity enhancement",
        "Sprint planning and retrospectives"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services Offered</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions spanning data science, product management, cloud technologies, and emerging tech innovations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
