import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoImage from "figma:asset/ab8da23d5c8e4616fc226c4c07c4a9391b402132.png";

export function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Emergency Care",
        "Cardiology",
        "Neurology",
        "Pediatrics",
        "Orthopedics",
        "Ophthalmology"
      ]
    },
    {
      title: "Patients",
      links: [
        "Book Appointment",
        "Patient Portal",
        "Insurance & Billing",
        "Medicare Information",
        "Medical Records",
        "Visitor Information"
      ]
    },
    {
      title: "About",
      links: [
        "Our Story",
        "Our Doctors",
        "Leadership Team",
        "Careers",
        "Awards & Recognition",
        "Community Outreach"
      ]
    },
    {
      title: "Resources",
      links: [
        "Health Library",
        "Patient Education",
        "Support Groups",
        "Clinical Trials",
        "Quality & Safety",
        "Contact Us"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }, 
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1.5">
                <img src={logoImage} alt="AID UR HEALTH Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-xl">AID UR HEALTH</h3>
                <p className="text-sm text-gray-400">India Health Security</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Coordinating India's pandemic response with real-time monitoring, expert analysis, 
              and comprehensive emergency health management services.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-gray-400 text-sm">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="font-medium">Email Us</p>
                <p className="text-gray-400 text-sm">info@aidurhealth.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <div>
                <p className="font-medium">Visit Us</p>
                <p className="text-gray-400 text-sm">JG University, Ahmedabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-700 rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-cyan-400" />
              <div>
                <p className="font-bold text-lg">24/7 Emergency Response</p>
                <p className="text-gray-300">India pandemic monitoring and rapid response</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-xl text-cyan-400">(555) 911-HELP</p>
              <p className="text-sm text-gray-300">Emergency Hotline</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA Notice</a>
              <a href="#" className="hover:text-white transition-colors">Patient Rights</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 India Pandemic Alert Center. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}