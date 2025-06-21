
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = 'service_hdv4x5l';
      const templateId = 'template_anuaccg';
      const publicKey = 'ntVne4AB41s688MZ7';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'imtiazahmed201313@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "imtiazahmed201313@gmail.com",
      href: "mailto:imtiazahmed201313@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801903744117",
      href: "tel:+8801903744117"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/imtiaz-ahmed-3392a6275",
      href: "https://linkedin.com/in/imtiaz-ahmed-3392a6275"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interested in working with me?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            or perhaps just talk?
          </p>
          <p className="text-muted-foreground mt-4">
            Reach me via social media or by sending an email with the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border"
                  disabled={isLoading}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels. I'm always excited to discuss new projects and opportunities.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <contact.icon className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-medium">{contact.label}</div>
                    <div className="text-sm text-muted-foreground">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
