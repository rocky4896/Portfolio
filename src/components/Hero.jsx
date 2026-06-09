import { motion } from "framer-motion";
import { ArrowDown, Mail, Download, BrainCircuit, Terminal, Award } from "lucide-react";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  const typingTexts = [
    "Machine Learning Engineer",
    "AI Enthusiast",
    "Deep Learning Developer",
    "Problem Solver",
    "Data Science Learner",
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    // Provide a professional download simulation or link to actual PDF if provided.
    // The user has various PDFs in the parent directory: Amazon.pdf, Kreditbee.pdf, bosch.pdf, qualcomm.pdf, uidai.pdf, virtusa.pdf.
    // Let's link to one of these or open a new window.
    window.open("/qualcomm.pdf", "_blank");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Glowing Tech Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-[120px] pointer-events-none animate-pulse-fast" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        
        {/* Top Mini Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyber-blue/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-blue animate-ping" />
          <span className="font-cyber text-[10px] tracking-[0.2em] text-cyber-blue uppercase font-bold">
            System Status: Ready to Build
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cyber text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 uppercase"
        >
          Goru{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-indigo-300 to-cyber-pink text-glow-blue">
            Shanmukha
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center text-lg md:text-2xl font-mono text-gray-300 mb-6"
        >
          <span className="mr-2">&gt; I am a</span>
          <TypingEffect texts={typingTexts} speed={80} eraseSpeed={40} delay={2000} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-sans"
        >
          Transforming complex dataset patterns into intelligent, scalable, and real-world AI solutions. Currently exploring the frontiers of Deep Learning and Neural Systems.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => handleScrollTo("projects")}
            className="cyber-btn cyber-btn-blue w-full sm:w-auto px-8 py-4 text-sm flex items-center justify-center gap-2"
          >
            <BrainCircuit className="w-4 h-4" />
            View Projects
          </button>
          
          <button
            onClick={handleDownloadResume}
            className="cyber-btn cyber-btn-pink w-full sm:w-auto px-8 py-4 text-sm flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </button>
          
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 text-sm font-cyber uppercase tracking-widest text-gray-400 hover:text-white border-b border-transparent hover:border-cyber-blue transition-all"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Floating tech badges */}
        <div className="absolute hidden lg:block inset-x-0 bottom-24 max-w-7xl mx-auto px-10 pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute left-10 top-0 glass-panel border border-cyber-blue/20 rounded-xl px-4 py-3 flex items-center gap-3 shadow-glow-blue"
          >
            <Terminal className="w-5 h-5 text-cyber-blue" />
            <div className="text-left font-mono">
              <p className="text-[10px] text-gray-500 uppercase">Primary Language</p>
              <p className="text-xs font-bold text-white">Python / C++</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute right-10 top-[-60px] glass-panel border border-cyber-pink/20 rounded-xl px-4 py-3 flex items-center gap-3 shadow-glow-pink"
          >
            <BrainCircuit className="w-5 h-5 text-cyber-pink" />
            <div className="text-left font-mono">
              <p className="text-[10px] text-gray-500 uppercase">Framework</p>
              <p className="text-xs font-bold text-white">PyTorch / SciKit</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="absolute left-[20%] bottom-[-80px] glass-panel border border-cyber-purple/20 rounded-xl px-4 py-3 flex items-center gap-3 shadow-glow-purple"
          >
            <Award className="w-5 h-5 text-cyber-purple" />
            <div className="text-left font-mono">
              <p className="text-[10px] text-gray-500 uppercase">Data Structures</p>
              <p className="text-xs font-bold text-white">300+ DSA Solved</p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          onClick={() => handleScrollTo("about")}
        >
          <span className="font-cyber text-[10px] tracking-widest text-cyber-blue uppercase">
            Scroll Down
          </span>
          <ArrowDown className="w-4 h-4 text-cyber-blue animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
