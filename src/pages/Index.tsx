import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Clock, Shield, Wrench, Check, MapPin, Star, Tool, Settings, AlertTriangle } from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We'll contact you shortly!",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Emergency Banner */}
      <div className="bg-primary px-4 py-2 text-white text-center animate-fade-in">
        <Phone className="inline-block mr-2 h-4 w-4" />
        <span>24/7 Emergency Service: </span>
        <a href="tel:+919876543210" className="font-bold hover:underline">
          +91 987-654-3210
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="container mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
            Expert Dishwasher Repair in Hyderabad
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional repair services for all brands with same-day service available
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Book Service Now
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Repair Service",
                description: "Expert repair for all dishwasher brands and models",
              },
              {
                icon: Clock,
                title: "Same Day Service",
                description: "Quick response and same-day repair service",
              },
              {
                icon: Shield,
                title: "Warranty Service",
                description: "90-day warranty on all repair services",
              },
            ].map((service, index) => (
              <Card key={index} className="service-card">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Dishwasher Issues We Fix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Not Draining Properly",
                description: "Fix clogged drains, faulty drain pumps, and drainage system issues",
              },
              {
                icon: Settings,
                title: "Not Cleaning Properly",
                description: "Repair spray arms, water inlet issues, and detergent dispensers",
              },
              {
                icon: Tool,
                title: "Strange Noises",
                description: "Fix motor problems, loose components, and mechanical issues",
              },
              {
                icon: Clock,
                title: "Long Cycle Times",
                description: "Repair timer issues and optimize cycle performance",
              },
              {
                icon: Shield,
                title: "Leaking Issues",
                description: "Fix door seals, hose connections, and prevent water leakage",
              },
              {
                icon: Settings,
                title: "Control Panel Problems",
                description: "Repair electronic controls and button malfunctions",
              },
            ].map((issue, index) => (
              <Card key={index} className="service-card">
                <issue.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
                <p className="text-gray-600">{issue.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Service */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Brands We Service</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              "LG",
              "Samsung",
              "Whirlpool",
              "Bosch",
              "IFB",
              "Siemens",
              "Panasonic",
              "Voltas",
            ].map((brand, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="font-semibold text-gray-800">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Priya R.",
                rating: 5,
                review: "Excellent service! The technician was professional and fixed my dishwasher quickly.",
              },
              {
                name: "Rahul M.",
                rating: 5,
                review: "Very reliable and affordable service. Would definitely recommend to others.",
              },
              {
                name: "Anjali S.",
                rating: 5,
                review: "Prompt response and great customer service. My dishwasher works like new now.",
              },
            ].map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.review}"</p>
                <p className="font-semibold">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Diagnostic Fee: ₹299 (adjustable against repair cost)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>No hidden charges - all costs discussed upfront</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>90-day warranty on repairs</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Genuine spare parts with warranty</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Experienced Technicians",
              "Genuine Spare Parts",
              "Transparent Pricing",
              "90-Day Service Warranty",
              "All Brands Serviced",
              "Emergency Services",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Areas in Hyderabad</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Hitech City",
              "Gachibowli",
              "Madhapur",
              "Kukatpally",
              "Banjara Hills",
              "Jubilee Hills",
              "Secunderabad",
              "Ameerpet",
            ].map((area, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-12">Book a Service</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required />
              <Input type="tel" placeholder="Phone Number" required />
            </div>
            <Input type="email" placeholder="Email Address" required />
            <Input placeholder="Location in Hyderabad" required />
            <Textarea placeholder="Describe your dishwasher issue" required />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Schedule Service
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 Hyderabad Dishwasher Repair Service</p>
          <div className="flex justify-center space-x-4">
            <Phone className="h-5 w-5" />
            <a href="tel:+919876543210" className="hover:text-primary transition-colors">
              +91 987-654-3210
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
