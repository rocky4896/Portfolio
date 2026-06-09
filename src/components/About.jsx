import { motion } from "framer-motion";
import { User, GraduationCap, Code2, Cpu, Calendar, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: <GraduationCap className="w-5 h-5 text-cyber-blue" />, label: "Degree", value: "B.Tech CSE" },
    { icon: <Cpu className="w-5 h-5 text-cyber-pink" />, label: "Institution", value: "IIITDM Kancheepuram" },
    { icon: <Award className="w-5 h-5 text-cyber-purple" />, label: "CGPA", value: "7.89" },
    { icon: <Calendar className="w-5 h-5 text-cyber-green" />, label: "Graduation", value: "2027" },
    { icon: <Code2 className="w-5 h-5 text-cyber-blue" />, label: "DSA", value: "300+ Solved" },
    { icon: <User className="w-5 h-5 text-cyber-pink" />, label: "Aspiration", value: "ML Engineer" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyber-pink/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="font-cyber text-xs tracking-[0.3em] text-cyber-pink uppercase font-bold block mb-2">
              01 // Profile
            </span>
            <h2 className="font-cyber text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              About <span className="text-glow-pink text-cyber-pink">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Bio (Terminal Style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="glass-panel border-cyber-blue/15 rounded-2xl overflow-hidden shadow-glass h-full flex flex-col">
              {/* Terminal Title Bar */}
              <div className="bg-cyber-darker/80 px-4 py-3 border-b border-cyber-blue/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-gray-500 tracking-wider">
                  goru_shanmukha.sh
                </span>
                <span className="w-10" />
              </div>

              {/* Terminal Content */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-300 leading-relaxed flex-grow">
                <p className="text-cyber-blue mb-4">
                  <span className="text-cyber-pink">~</span> cat introduce.txt
                </p>
                <p className="mb-6">
                  Hi, I'm <strong className="text-white">Goru Shanmukha</strong>, a Computer Science undergraduate at <strong className="text-cyber-blue">IIITDM Kancheepuram</strong> with a strong interest in Machine Learning, Artificial Intelligence, and Data Science.
                </p>
                <p className="mb-6">
                  I enjoy building intelligent systems that solve real-world problems using data-driven approaches. My experience includes developing supervised and unsupervised learning models, implementing deep learning solutions, and applying mathematical concepts such as probability, statistics, and linear algebra to machine learning systems.
                </p>
                <p className="mb-6">
                  I am continuously learning advanced AI technologies and striving to become an industry-ready Machine Learning Engineer capable of building impactful and scalable intelligent solutions.
                </p>
                <div className="flex items-center gap-2 text-cyber-green">
                  <span>&gt;</span>
                  <span className="inline-block w-2.5 h-5 bg-cyber-green animate-pulse-fast" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Profile Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel-pink border-cyber-pink/15 rounded-2xl p-6 md:p-8 shadow-glass relative overflow-hidden h-full flex flex-col justify-between">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-pink/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <h3 className="font-cyber text-lg tracking-wider text-white uppercase mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyber-pink animate-pulse" />
                  Core Metrics
                </h3>
                
                {/* Stats list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-cyber-darker/40 border border-cyber-pink/5 hover:border-cyber-pink/20 rounded-xl p-4 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {stat.icon}
                        <span className="text-xs text-gray-500 font-mono group-hover:text-gray-400 transition-colors">
                          {stat.label}
                        </span>
                      </div>
                      <p className="text-sm font-cyber font-bold text-white tracking-wide pl-8">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personality traits / tags */}
              <div className="mt-8 pt-6 border-t border-cyber-pink/10">
                <p className="text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">
                  Soft Skills & Adaptability
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning Enthusiast", "Fast Learner", "Team Player", "Problem Solver"].map((trait, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-cyber px-2.5 py-1 rounded bg-cyber-pink/10 border border-cyber-pink/20 text-cyber-pink tracking-wider"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
