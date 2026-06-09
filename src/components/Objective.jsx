import { motion } from "framer-motion";
import { Terminal, Send, Activity } from "lucide-react";

export default function Objective() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-cyber-darker/10">
      {/* Background neon dots */}
      <div className="absolute inset-0 cyber-grid-dots opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel border-cyber-blue/20 rounded-2xl p-8 md:p-12 shadow-glass relative overflow-hidden text-center"
        >
          {/* Top activity indicator */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber-blue"></span>
            </span>
            <span className="font-mono text-xs text-cyber-blue uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              SYSTEM_OBJECTIVE.LOG
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-cyber text-2xl md:text-4xl font-extrabold uppercase text-white tracking-wide mb-6">
            Seeking <span className="text-glow-blue text-cyber-blue">Opportunities</span>
          </h2>

          {/* Core Text */}
          <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-300 font-mono leading-relaxed mb-8 border-l-2 border-r-2 border-cyber-blue/20 px-6 md:px-12">
            "Seeking internships and entry-level opportunities in Machine Learning, Artificial Intelligence, and Data Science where I can contribute, learn, and grow while building impactful AI-driven solutions."
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <button
              onClick={() => handleScrollTo("contact")}
              className="cyber-btn cyber-btn-blue px-8 py-3.5 text-xs flex items-center gap-2"
            >
              Get In Touch
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
