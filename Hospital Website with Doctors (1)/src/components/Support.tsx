import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, CheckCircle, Phone, Clock, Users, MapPin, Zap, AlertTriangle } from "lucide-react";

export function Support() {
  const supportTypes = [
    {
      title: "Emergency Response",
      description: "Immediate 24/7 Support",
      coverage: ["Crisis hotline", "Emergency dispatch", "Medical evacuation", "On-site response"],
      icon: AlertTriangle
    },
    {
      title: "State Aid Programs",
      description: "National Coordination Support",
      coverage: ["Inter-state assistance", "Resource sharing protocols", "Expert deployment", "Technology transfer"],
      icon: MapPin
    },
    {
      title: "Testing Support",
      description: "Diagnostic Assistance",
      coverage: ["Mobile testing units", "Lab coordination", "Result tracking", "Contact tracing support"],
      icon: Zap
    },
    {
      title: "Vaccination Assistance",
      description: "Immunization Programs",
      coverage: ["Vaccine distribution", "Administration training", "Cold chain logistics", "Coverage monitoring"],
      icon: Shield
    }
  ];

  const supportPrograms = [
    "Emergency Medical Response",
    "Pandemic Preparedness Training",
    "State Coordination Services",
    "Resource Allocation Support",
    "Contact Tracing Assistance",
    "Quarantine Management",
    "Testing Facility Setup",
    "Vaccination Campaign Support",
    "Data Analytics & Reporting",
    "Crisis Communication",
    "Medical Equipment Supply",
    "Healthcare Worker Training"
  ];

  return (
    <section id="support" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-cyan-600" />
            <span className="text-cyan-600 font-medium">India Support</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Pandemic Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support services for pandemic preparedness, emergency response, 
            and healthcare system reinforcement during health crises across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Support Services?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Certified Response Teams</h4>
                  <p className="text-gray-600">Our experts are nationally certified and experienced in pandemic response with proven track records across India.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">24/7 Support Network</h4>
                  <p className="text-gray-600">Round-the-clock support services with immediate response capabilities for emergency situations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">National Coordination</h4>
                  <p className="text-gray-600">Coordinated national response with seamless communication and resource sharing protocols across all states.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Emergency Support
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                Request Assistance
              </Button>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631941618536-2979d565b726?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3ZpZCUyMHZhY2NpbmUlMjB0ZXN0aW5nfGVufDF8fHx8MTc1OTQ3NDg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="India pandemic support coordination"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-8 w-8 text-cyan-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">28+ States & UTs</div>
                  <div className="text-sm text-gray-600">India Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Support Services We Provide
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.coverage.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Programs */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 mb-2">
              Available Support Programs
            </CardTitle>
            <CardDescription className="text-lg">
              We coordinate multiple support programs to ensure comprehensive pandemic preparedness and response across India.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportPrograms.map((program, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-cyan-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                  <span className="font-medium text-gray-900">{program}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Need specific support or have questions about our programs? Contact our coordination team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-HELP
                </Button>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
                  Support Coordination Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}