import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, AlertTriangle, Activity, TrendingUp, Shield, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState, useEffect } from "react";

export function Hero() {
  const [activeCases, setActiveCases] = useState(12450);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly fluctuate cases between 12000 and 13000
      const change = Math.floor(Math.random() * 200) - 100; // Random change between -100 and +100
      setActiveCases(prev => {
        const newValue = prev + change;
        // Keep within reasonable bounds
        return Math.max(12000, Math.min(13000, newValue));
      });
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1628246972740-e778a24742a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5kZW1pYyUyMHZpcnVzJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTk0NzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Laboratory pandemic research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-blue-900/80 to-indigo-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-teal-500 text-white hover:bg-teal-500">
                <Activity className="h-4 w-4 mr-1" />
                ACTIVE MONITORING
              </Badge>
              <Badge className="bg-blue-400 text-white hover:bg-blue-400">
                MODERATE RISK
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              AID UR HEALTH
              <span className="text-cyan-300"> India's First Ever Pandemic Alert System</span>
            </h1>
            
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Real-time monitoring, expert analysis, and rapid response coordination 
              for health threats across India with comprehensive pandemic preparedness.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4"
                onClick={() => {
                  const liveUpdatesSection = document.getElementById('live-updates');
                  if (liveUpdatesSection) {
                    liveUpdatesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Live Updates
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-cyan-700 px-8 py-4"
              >
                <Play className="h-4 w-4 mr-2" />
                Live Briefing
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-6 w-6 text-cyan-300" />
                </div>
                <div className="text-2xl font-bold">28+</div>
                <div className="text-sm text-cyan-200">States & UTs Monitored</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-teal-400" />
                </div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-cyan-200">Real-time Tracking</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-cyan-200">Expert Epidemiologists</div>
              </div>
            </div>
          </div>

          {/* Right content - Alert status card */}
          <div className="lg:flex justify-end hidden">
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Current Alert Status</h3>
                <p className="text-gray-600">Last updated: 2 minutes ago</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">India Risk Level</span>
                  <Badge className="bg-blue-500 text-white">MODERATE</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                  <span className="text-gray-700">Vaccine Coverage</span>
                  <span className="font-bold text-teal-600">78.5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-cyan-50 rounded-lg">
                  <span className="text-gray-700">Active Cases</span>
                  <span className="font-bold text-cyan-600">{activeCases.toLocaleString()}</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Outbreak
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}