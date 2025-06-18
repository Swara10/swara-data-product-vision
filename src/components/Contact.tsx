
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, User, Download } from 'lucide-react';

const Contact = () => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf'; // Replace with actual resume file path
    link.download = 'Swara_Vedak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to achieve your goals.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">vedakswara@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/swara-vedak/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      swara-vedak
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">GitHub</p>
                    <a href="https://github.com/Swara10" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Swara10
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 border-none">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Let's Connect!</h3>
              <p className="text-gray-600 mb-6">
                Whether you're looking for product analysis expertise, data science solutions, 
                or innovative development, I'd love to hear about your project.
              </p>
              <Button 
                onClick={handleResumeDownload}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
