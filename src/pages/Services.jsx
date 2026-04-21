import { motion } from 'framer-motion';
import { Code, Layout, Zap, Search, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "web-design",
      icon: <Layout className="w-10 h-10 text-blue-400" />,
      title: "Web Design",
      description: "We create stunning, user-centric designs that not only look beautiful but also drive engagement and conversions. Our design process focuses on understanding your brand and your users.",
      features: ["UI/UX Design", "Wireframing & Prototyping", "Design Systems", "Interactive Animations"]
    },
    {
      id: "full-stack",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      title: "Full-Stack Development",
      description: "From scalable backends to dynamic frontends, our engineering team builds robust applications using the latest technologies and best practices to ensure longevity and performance.",
      features: ["Custom Web Applications", "API Development", "Database Architecture", "Cloud Integration"]
    },
    {
      id: "ecommerce",
      icon: <Zap className="w-10 h-10 text-blue-400" />,
      title: "E-Commerce Solutions",
      description: "We build secure, high-conversion online stores that provide seamless shopping experiences for your customers and powerful management tools for your team.",
      features: ["Custom Storefronts", "Payment Gateway Integration", "Inventory Management", "Conversion Optimization"]
    },
    {
      id: "seo",
      icon: <Search className="w-10 h-10 text-blue-400" />,
      title: "SEO & Performance",
      description: "A beautiful website is useless if no one can find it. We build with SEO and performance in mind from day one, ensuring your site ranks high and loads fast.",
      features: ["Technical SEO", "Performance Audits", "Core Web Vitals Optimization", "Accessibility Compliance"]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions to help your business grow, scale, and dominate your industry.
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="bg-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-900/40 to-[#0a0f1c] border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                   {/* Service specific graphic */}
                   <div className="w-full h-full border border-white/5 rounded-xl bg-white/5 backdrop-blur-sm relative z-10 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                     {service.icon}
                     <span className="mt-4 text-gray-500 font-medium tracking-widest uppercase text-sm">{service.title} Architecture</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
