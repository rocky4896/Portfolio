import { motion } from "framer-motion";
import { Award, Code2, LineChart, Cpu, Flame } from "lucide-react";

export default function Achievements() {
  const credentials = [
    {
      icon: <Code2 className="w-8 h-8 text-cyber-pink" />,
      title: "300+ DSA Solved",
      desc: "Solved over 300 data structures and algorithms problems on platforms like LeetCode and HackerRank, exhibiting strong algorithmic problem-solving skills.",
      metric: "LeetCode / HackerRank",
      glow: "border-glow-pink"
    },
    {
      icon: <LineChart className="w-8 h-8 text-cyber-blue" />,
      title: "Mathematical Foundation",
      desc: "Deep knowledge in Probability, Statistics, Linear Algebra, and Optimization algorithms, serving as the foundational pillars for Machine Learning and AI.",
      metric: "Math Foundations",
      glow: "border-glow-blue"
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyber-purple" />,
      title: "Scratch ML Implementations",
      desc: "Build supervised, unsupervised, and deep convolutional networks from scratch, allowing for a deeper understanding of underlying architectures and optimizers.",
      metric: "Practical ML / DL",
      glow: "border-glow-purple"
    },
    {
      icon: <Flame className="w-8 h-8 text-cyber-green" />,
      title: "Internship Prepared",
      desc: "Active self-directed learner continually working on industry readiness, actively preparing for machine learning internships and corporate research roles.",
      metric: "Career Ready",
      glow: "border-glow-green"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyber-purple/5 rounded-full blur-[100px] pointer-events-none" />

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
              05 // Credentials
            </span>
            <h2 className="font-cyber text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              Key <span className="text-glow-pink text-cyber-pink">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cred, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-panel border-gray-800/60 hover:border-transparent rounded-2xl p-6 md:p-8 flex items-start gap-5 relative overflow-hidden transition-all duration-300 group hover:${cred.glow}`}
            >
              {/* Icon */}
              <div className="p-3 bg-cyber-darker/60 rounded-xl border border-gray-800 group-hover:border-white/10 transition-colors flex-shrink-0">
                {cred.icon}
              </div>

              {/* Text */}
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">
                  {cred.metric}
                </span>
                <h3 className="font-cyber text-lg font-bold text-white uppercase tracking-wide">
                  {cred.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {cred.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
