import { motion } from 'framer-motion';

export default function About() {
  const team = [
    {
      name: "Revanth Saukar M",
      role: "Founder & Full-Stack Developer",
      image: "bg-gradient-to-br from-blue-700 to-blue-900",
      bio: "A passionate developer dedicated to building high-quality, scalable web applications from the ground up."
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Story</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Renovo started with a simple vision: to bridge the gap between beautiful design and robust engineering. As a passionate solo developer, I focus on delivering custom, high-performance web solutions that are built to last. No bloated templates or slow loading times—just clean, efficient code and stunning user experiences.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full h-96 md:h-[500px] rounded-3xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 relative overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white/10 tracking-widest uppercase">Renovo Studio</h2>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              To empower businesses by building digital products that are not just tools, but strategic assets. We believe in writing clean code, designing with empathy, and communicating transparently.
            </p>
            <div className="space-y-4 border-l-2 border-blue-500 pl-6 py-2">
              <p className="text-white font-medium">Quality over quantity.</p>
              <p className="text-white font-medium">Partnerships over transactions.</p>
              <p className="text-white font-medium">Innovation rooted in purpose.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">Modern</h3>
              <p className="text-gray-400">Tech Stack</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center mt-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">100%</h3>
              <p className="text-gray-400">Commitment</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">Scalable</h3>
              <p className="text-gray-400">Architectures</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center mt-8">
              <h3 className="text-3xl font-bold text-blue-400 mb-2">Custom</h3>
              <p className="text-gray-400">Solutions</p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-400">The passionate people behind the pixels and code.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-sm mx-auto">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
              >
                <div className={`h-80 ${member.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src="/profile.jpg" 
                    alt="Revanth Saukar M" 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
