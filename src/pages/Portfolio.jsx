import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Code2, Rocket } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="py-20 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-4 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.3)] group cursor-pointer">
            <img 
              src="/profile.jpg" 
              alt="Revanth Saukar M" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            A Blank <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Canvas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            I believe in complete transparency. I haven't launched my first flagship project yet—but I have the skills, the passion, and the drive to build something extraordinary.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Instead of showing you fake projects or templates, I'm showing you honesty. I am looking for that first great partnership to prove what I can do. Will it be you?
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <Code2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">What I Bring</h3>
            <p className="text-gray-400">Deep knowledge of modern web technologies like React, Tailwind CSS, and scalable backends. I don't just write code; I craft solutions.</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <Rocket className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">The First-Client Advantage</h3>
            <p className="text-gray-400">As my first major client, you will get 100% of my dedication, unmatched attention to detail, and a premium product built to perfection.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <span>Let's Build It Together</span>
            <Rocket className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
