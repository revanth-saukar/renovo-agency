import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Zap, Search } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0f1c] to-[#0a0f1c]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Turning ambitious ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">scalable digital reality</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Renovo specializes in high-performance, beautiful, and robust web applications tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/portfolio"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-medium transition-all"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-24 bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We provide end-to-end digital solutions tailored to your business needs.</p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Layout className="w-8 h-8 text-blue-400" />, title: "Web Design", desc: "Stunning, responsive interfaces that captivate and convert." },
              { icon: <Code className="w-8 h-8 text-blue-400" />, title: "Full-Stack Dev", desc: "Robust, scalable architectures built with modern frameworks." },
              { icon: <Zap className="w-8 h-8 text-blue-400" />, title: "E-Commerce", desc: "High-conversion online stores with seamless checkout flows." },
              { icon: <Search className="w-8 h-8 text-blue-400" />, title: "SEO & Perf", desc: "Blazing fast load times and optimized for search engines." }
            ].map((service, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your digital presence?</h2>
          <p className="text-xl text-gray-300 mb-10">Let's discuss how we can help you achieve your goals.</p>
          <Link 
            to="/contact"
            className="bg-white text-[#0a0f1c] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
}
