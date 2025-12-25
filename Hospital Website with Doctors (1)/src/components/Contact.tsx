import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, Heart } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useState } from "react";

// ============================================
// GOOGLE FORMS CONFIGURATION
// ============================================
// Follow the guide in /GOOGLE_FORMS_INTEGRATION_GUIDE.md to set these up
// Set GOOGLE_FORM_ENABLED to true after configuring your form

const GOOGLE_FORM_ENABLED = false; // Change to true after setup
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

// Replace these entry IDs with your actual Google Form field IDs
const FIELD_IDS = {
  firstName: "entry.YOUR_FIRSTNAME_ID",
  lastName: "entry.YOUR_LASTNAME_ID",
  email: "entry.YOUR_EMAIL_ID",
  phone: "entry.YOUR_PHONE_ID",
  department: "entry.YOUR_DEPARTMENT_ID",
  date: "entry.YOUR_DATE_ID",
  time: "entry.YOUR_TIME_ID",
  insurance: "entry.YOUR_INSURANCE_ID",
  message: "entry.YOUR_MESSAGE_ID",
};
// ============================================

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: "",
    date: "",
    time: "",
    insurance: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to Google Forms if enabled
    if (GOOGLE_FORM_ENABLED) {
      try {
        // Create form data for Google Forms submission
        const formBody = new URLSearchParams({
          [FIELD_IDS.firstName]: formData.firstName,
          [FIELD_IDS.lastName]: formData.lastName,
          [FIELD_IDS.email]: formData.email,
          [FIELD_IDS.phone]: formData.phone,
          [FIELD_IDS.department]: formData.department,
          [FIELD_IDS.date]: formData.date,
          [FIELD_IDS.time]: formData.time,
          [FIELD_IDS.insurance]: formData.insurance,
          [FIELD_IDS.message]: formData.message,
        });

        // Submit to Google Forms
        // Note: mode: "no-cors" means we can't read the response, but the form will still submit
        await fetch(GOOGLE_FORM_ACTION_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        });

        // Show success message
        toast.success("Request Generated!", {
          description: "Your appointment request has been received and will be processed in 3 to 4 hours.",
          duration: 5000,
          className: "bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200",
        });
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error("Submission Error", {
          description: "There was a problem submitting your request. Please try again or call us directly.",
          duration: 5000,
        });
      }
    } else {
      // Google Forms not configured - show demo success message
      toast.success("Request Generated!", {
        description: "Your appointment request has been received and will be processed in 3 to 4 hours.",
        duration: 5000,
        className: "bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200",
      });
    }

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: "",
      date: "",
      time: "",
      insurance: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "(555) 123-4567",
      secondary: "24/7 Emergency: (555) 911-HELP",
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@aidurhealth.com",
      secondary: "support@aidurhealth.com",
      color: "green"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "JG University",
      secondary: "Ahmedabad",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon-Fri: 6AM-10PM",
      secondary: "Weekends: 8AM-8PM",
      color: "orange"
    }
  ];

  const departments = [
    "General Medicine",
    "Cardiology",
    "Neurology", 
    "Pediatrics",
    "Emergency Medicine",
    "Orthopedics",
    "Ophthalmology",
    "Medicare Support"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="h-6 w-6 text-cyan-600" />
            <span className="text-cyan-600 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact AID UR HEALTH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about pandemic response or need emergency support? 
            We're here to help coordinate India's health security efforts.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className={`w-16 h-16 bg-${info.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className={`h-8 w-8 text-${info.color}-600`} />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-gray-900 mb-1">{info.primary}</p>
                <p className="text-sm text-gray-600">{info.secondary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-cyan-600" />
                Schedule an Appointment
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll contact you to confirm your appointment.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(555) 123-4567" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select 
                    value={formData.department}
                    onValueChange={(value) => handleInputChange("department", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept, index) => (
                        <SelectItem key={index} value={dept.toLowerCase().replace(/\s+/g, '-')}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select 
                      value={formData.time}
                      onValueChange={(value) => handleInputChange("time", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="insurance">Insurance Provider</Label>
                  <Input 
                    id="insurance" 
                    placeholder="e.g., Medicare, Blue Cross, Aetna" 
                    value={formData.insurance}
                    onChange={(e) => handleInputChange("insurance", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your symptoms or reason for visit..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 py-3"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-cyan-900">Emergency Services</h3>
                    <p className="text-cyan-700">Available 24/7</p>
                  </div>
                </div>
                <p className="text-cyan-800 mb-4">
                  For critical health emergencies, contact our emergency response team or report urgent outbreaks immediately.
                </p>
                <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency: 108
                </Button>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-cyan-600" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">JG University, Ahmedabad</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Parking:</strong> Free patient parking available</p>
                  <p><strong>Public Transit:</strong> Bus lines 42, 56, and Metro Blue Line</p>
                  <p><strong>Accessibility:</strong> Wheelchair accessible with elevators</p>
                </div>
              </CardContent>
            </Card>

            {/* Information */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-blue-900 mb-2">India Support Network</h3>
                <p className="text-blue-800 mb-4">
                  Our national coordination team provides comprehensive support for pandemic response 
                  and health emergency management across all Indian states.
                </p>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-100">
                  Support Center: (555) 123-HELP
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}