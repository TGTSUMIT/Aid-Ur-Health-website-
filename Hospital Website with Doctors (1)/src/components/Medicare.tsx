import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, CheckCircle, Heart, Phone, FileText, Calendar, DollarSign, Users } from "lucide-react";

export function Medicare() {
  const medicareServices = [
    {
      title: "Medicare Part A",
      description: "Hospital Insurance Coverage",
      coverage: ["Inpatient hospital stays", "Skilled nursing facility care", "Hospice care", "Home health services"],
      icon: Shield
    },
    {
      title: "Medicare Part B", 
      description: "Medical Insurance Coverage",
      coverage: ["Doctor visits", "Outpatient care", "Medical equipment", "Preventive services"],
      icon: Heart
    },
    {
      title: "Medicare Part C",
      description: "Medicare Advantage Plans",
      coverage: ["All Part A & B benefits", "Often includes prescription drugs", "May include dental/vision", "Coordinated care"],
      icon: FileText
    },
    {
      title: "Medicare Part D",
      description: "Prescription Drug Coverage",
      coverage: ["Prescription medications", "Generic and brand drugs", "Pharmacy network access", "Coverage gap protection"],
      icon: DollarSign
    }
  ];

  const acceptedPlans = [
    "Original Medicare (Parts A & B)",
    "Medicare Advantage (Part C)",
    "Medicare Supplement (Medigap)",
    "Dual Special Needs Plans",
    "Chronic Condition Special Needs Plans",
    "Medicare Part D Prescription Plans"
  ];

  return (
    <section id="medicare" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-blue-600 font-medium">Medicare Coverage</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Medicare Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We accept most Medicare plans and help you navigate your healthcare coverage 
            to ensure you receive the care you need with minimal out-of-pocket costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for Medicare?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Medicare Certified Providers</h4>
                  <p className="text-gray-600">All our doctors are Medicare-certified and experienced in treating Medicare patients with comprehensive care.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Dedicated Medicare Support</h4>
                  <p className="text-gray-600">Our Medicare specialists help you understand your benefits and navigate the healthcare system.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Easy Appointment Scheduling</h4>
                  <p className="text-gray-600">Streamlined booking process with Medicare coverage verification before your visit.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Medicare Support
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Check Coverage
              </Button>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1544187702-067d81860901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGF0aWVudCUyMG1lZGljYXJlfGVufDF8fHx8MTc1OTQ3NDU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Elderly patient receiving care"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">98% Coverage Rate</div>
                  <div className="text-sm text-gray-600">Medicare Accepted</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medicare Parts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Medicare Coverage We Accept
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicareServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.coverage.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Accepted Plans */}
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900 mb-2">
              Medicare Plans We Accept
            </CardTitle>
            <CardDescription className="text-lg">
              We work with most Medicare insurance plans to ensure you get the care you need.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {acceptedPlans.map((plan, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-900">{plan}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Not sure if your plan is covered? Contact our Medicare specialists for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-CARE
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Medicare Support Center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}