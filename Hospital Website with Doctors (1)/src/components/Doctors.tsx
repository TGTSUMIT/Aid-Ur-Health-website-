import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Calendar, MapPin, Phone, GraduationCap, Shield } from "lucide-react";

export function Doctors() {
  const experts = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialty: "Chief Epidemiologist",
      image: "https://images.unsplash.com/photo-1659353887804-fc7f9313021a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDU1NTY0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 247,
      experience: "15+ years",
      education: "AIIMS Delhi & Harvard School of Public Health",
      specializations: ["Disease Surveillance", "Outbreak Investigation", "Pandemic Preparedness"],
      location: "Epidemiology Center, Building A",
      phone: "+91 98765 43210",
      availability: "24/7 Emergency Response",
      bio: "Dr. Kumar leads India's pandemic monitoring efforts with expertise in infectious disease epidemiology and emergency response coordination.",
      languages: ["English", "Hindi", "Tamil"],
      certified: true
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Infectious Disease Specialist",
      image: "https://images.unsplash.com/photo-1741707039571-f1c3f957a2e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBkb2N0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2NDY0ODYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 189,
      experience: "12+ years",
      education: "CMC Vellore & Johns Hopkins Bloomberg School",
      specializations: ["Viral Outbreaks", "Antimicrobial Resistance", "Vaccine Development"],
      location: "Infectious Disease Lab, Building B",
      phone: "+91 98765 43211",
      availability: "Mon-Sat: 8AM-6PM",
      bio: "Dr. Sharma specializes in emerging infectious diseases with extensive experience in pandemic response across Indian states and vaccine development.",
      languages: ["English", "Hindi", "Marathi"],
      certified: true
    },
    {
      id: 3,
      name: "Dr. Arjun Patel",
      specialty: "National Health Coordinator",
      image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkb2N0b3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2NDY0ODYwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 156,
      experience: "18+ years",
      education: "PGIMER Chandigarh & London School of Hygiene",
      specializations: ["National Surveillance", "Crisis Management", "State Coordination"],
      location: "National Operations Center, Floor 4",
      phone: "+91 98765 43212",
      availability: "24/7 India Coverage",
      bio: "Dr. Patel coordinates India's pandemic response efforts with expertise in national health security and emergency management across all states.",
      languages: ["English", "Hindi", "Gujarati"],
      certified: true
    },
    {
      id: 4,
      name: "Dr. Anjali Reddy",
      specialty: "Emergency Response Director",
      image: "https://images.unsplash.com/photo-1739185069005-8cb46fef2702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBwaHlzaWNpYW4lMjBob3NwaXRhbHxlbnwxfHx8fDE3NjQ2NDg2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 203,
      experience: "10+ years",
      education: "JIPMER Puducherry & UCLA School of Public Health",
      specializations: ["Rapid Response", "Resource Allocation", "Emergency Protocols"],
      location: "Command Center, Floor 1",
      phone: "108",
      availability: "24/7 Emergency Response",
      bio: "Dr. Reddy leads rapid response teams with expertise in emergency management and large-scale health crisis coordination across India.",
      languages: ["English", "Hindi", "Telugu"],
      certified: true
    },
    {
      id: 5,
      name: "Dr. Vikram Singh",
      specialty: "Data Analytics Lead",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NDY0ODYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 134,
      experience: "14+ years",
      education: "IIT Bombay & MIT-Harvard Joint Program",
      specializations: ["Predictive Modeling", "Big Data Analysis", "Risk Assessment"],
      location: "Analytics Center, Floor 5",
      phone: "+91 98765 43214",
      availability: "Mon-Fri: 7AM-3PM",
      bio: "Dr. Singh develops predictive models for pandemic forecasting in India using advanced machine learning and epidemiological data.",
      languages: ["English", "Hindi", "Punjabi"],
      certified: true
    },
    {
      id: 6,
      name: "Dr. Meera Iyer",
      specialty: "Public Health Communications",
      image: "https://images.unsplash.com/photo-1606619788433-2ba22e49d498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFzaWFuJTIwZG9jdG9yfGVufDF8fHx8MTc2NDY0ODYwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 178,
      experience: "11+ years",
      education: "NIMHANS Bangalore & Columbia School of Public Health",
      specializations: ["Risk Communication", "Media Relations", "Public Education"],
      location: "Communications Hub, Floor 2",
      phone: "+91 98765 43215",
      availability: "Mon-Fri: 9AM-5PM",
      bio: "Dr. Iyer leads public communication strategies during health emergencies with expertise in crisis communication and community engagement.",
      languages: ["English", "Hindi", "Kannada", "Tamil"],
      certified: true
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-cyan-600" />
            <span className="text-cyan-600 font-medium">Our Expert Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Pandemic Response Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified specialists are dedicated to India's health security 
            with years of experience in pandemic preparedness and emergency response across the nation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <Card key={expert.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{expert.rating}</span>
                    <span className="text-xs text-gray-500">({expert.reviews})</span>
                  </div>

                  {/* Certification badge */}
                  {expert.certified && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">
                        <Shield className="h-3 w-3 mr-1" />
                        Certified Expert
                      </Badge>
                    </div>
                  )}

                  {/* Expert basic info overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{expert.name}</h3>
                    <p className="text-cyan-200">{expert.specialty}</p>
                    <p className="text-sm text-gray-300">{expert.experience} experience</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-4 w-4 text-cyan-600" />
                    <span className="text-sm text-gray-600">{expert.education}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">{expert.bio}</p>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {expert.specializations.slice(0, 2).map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                    {expert.specializations.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{expert.specializations.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Contact info */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{expert.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{expert.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{expert.phone}</span>
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600">Languages: </span>
                  <span className="text-sm font-medium text-gray-900">
                    {expert.languages.join(", ")}
                  </span>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  Contact Expert
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
            View All Experts
          </Button>
        </div>
      </div>
    </section>
  );
}