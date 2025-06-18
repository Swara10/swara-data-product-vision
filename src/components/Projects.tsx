
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "AR Based: Home 360",
      description: "An innovative AR-based application developed using Unity, Vuforia, and SketchUp that revolutionizes interior design visualization",
      achievements: [
        "Enhanced customer experience by 70% through real-time 3D floor plan and interior decor visualization",
        "Improved client understanding and satisfaction by 80% with interactive 3D models",
        "Implemented AR furniture filters reducing decision-making time by 50%",
        "Published research paper at Intra-College level conference 'How AR can boost Businesses' (V-Search 2022)"
      ],
      technologies: ["Unity", "Vuforia", "SketchUp", "AR/VR", "3D Modeling"],
      type: "AR/VR Development",
      impact: "First Prize Winner"
    },
    {
      title: "Credit Risk Modelling",
      description: "Advanced predictive analytics project for financial risk assessment using machine learning algorithms",
      achievements: [
        "Led team of five in developing credit risk assessment model",
        "Utilized Logistic Regression and Decision Tree Classifiers for optimized lending decisions",
        "Achieved Decision Tree model AUC of 0.878 for superior predictive accuracy",
        "Implemented comprehensive data preprocessing and feature engineering pipeline"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
      type: "Data Science",
      impact: "AUC Score: 0.878"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of innovative projects demonstrating expertise in AR/VR development and data science
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="mb-3 bg-blue-100 text-blue-800 hover:bg-blue-100">
                      {project.type}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
