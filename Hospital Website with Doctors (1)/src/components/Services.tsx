import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TestTube, Shield, Activity, AlertTriangle, MapPin, TrendingUp, Stethoscope, Zap, ChevronDown, Bot } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export function Services() {
  const services = [
    {
      icon: TestTube,
      title: "Rapid Testing",
      description: "Advanced diagnostic testing with real-time results and contact tracing.",
      image: "https://images.unsplash.com/photo-1672985020068-75281fd2a8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZCUyMHRlc3RpbmclMjBjZW50ZXJ8ZW58MXx8fHwxNzU5NDc0OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["PCR Testing", "Antigen Tests", "Contact Tracing"]
    },
    {
      icon: Shield,
      title: "Vaccination Programs",
      description: "Mass vaccination coordination and immunization tracking systems.",
      image: "https://images.unsplash.com/photo-1631941618536-2979d565b726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZCUyMHZhY2NpbmUlMjB0ZXN0aW5nfGVufDF8fHx8MTc1OTQ3NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Mass Vaccination", "Booster Campaigns", "Immunization Records"]
    },
    {
      icon: AlertTriangle,
      title: "Outbreak Response",
      description: "Rapid deployment and containment protocols for infectious disease outbreaks.",
      image: "https://images.unsplash.com/photo-1628246972740-e778a24742a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5kZW1pYyUyMHZpcnVzJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTk0NzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Contact Tracing", "Quarantine Management", "Emergency Response"]
    },
    {
      icon: MapPin,
      title: "India-wide Monitoring",
      description: "National surveillance network tracking pandemic threats across all Indian cities.",
      image: "https://images.unsplash.com/photo-1672985020068-75281fd2a8d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZCUyMHRlc3RpbmclMjBjZW50ZXJ8ZW58MXx8fHwxNzU5NDc0OTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Disease Surveillance", "Risk Assessment", "Data Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Advanced epidemiological modeling and predictive health analytics.",
      image: "https://images.unsplash.com/photo-1631941618536-2979d565b726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZCUyMHZhY2NpbmUlMjB0ZXN0aW5nfGVufDF8fHx8MTc1OTQ3NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Predictive Modeling", "Trend Analysis", "Risk Forecasting"]
    },
    {
      icon: Zap,
      title: "Emergency Alerts",
      description: "Real-time notification system for critical health emergencies and updates.",
      image: "https://images.unsplash.com/photo-1628246972740-e778a24742a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5kZW1pYyUyMHZpcnVzJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3NTk0NzQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["SMS Alerts", "Push Notifications", "Public Announcements"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Stethoscope className="h-6 w-6 text-cyan-600" />
            <span className="text-cyan-600 font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Pandemic Response
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            From real-time monitoring to rapid response deployment, we provide complete pandemic 
            preparedness and emergency health management services across India.
          </p>
          
          {/* Services Action Dropdown */}
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  <Activity className="h-4 w-4 mr-2" />
                  Quick Actions
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <a 
                    href="http://10.228.181.165:5000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Bot className="h-4 w-4 text-cyan-600" />
                    <span>AI Prescriptor</span>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 group-hover:from-cyan-900/30 group-hover:to-blue-900/30 transition-colors"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="h-6 w-6 text-cyan-600" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <Activity className="h-4 w-4 text-teal-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}