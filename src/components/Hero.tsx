
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import WaterRipple from './WaterRipple';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 15s ease infinite'
      }}
    >
      {/* Animated water-like background overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-teal-300/40 to-cyan-300/40 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-teal-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        </div>
      </div>

      {/* Water ripple effect overlay */}
      <WaterRipple />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white drop-shadow-lg">Hello, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
                Swara Vedak
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                Product Analyst
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-lg drop-shadow-md">
              Passionate about turning data into meaningful insights and shaping products at the intersection of technology and management.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-r from-white/80 to-blue-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <span className="text-white/90 font-medium drop-shadow-md">Years Experience</span>
            </div>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 bg-gradient-to-r from-white/60 to-blue-100/60 backdrop-blur-sm rounded-full border-2 border-white/50 shadow-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative lg:block hidden">
          <Card className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  Profile
                </h3>
                <div className="mb-4">
                  <img 
                    src="/lovable-uploads/47e0b466-cfec-4adc-8aa5-903099be1ce0.png" 
                    alt="Swara Vedak"
                    className="w-full h-80 object-contain rounded-lg shadow-lg border-4 border-white/50"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="w-6 h-6 text-white drop-shadow-lg" />
        <div className="text-xs text-white/90 mt-1 drop-shadow-md">Scroll down</div>
      </div>
    </section>
  );
};

export default Hero;
