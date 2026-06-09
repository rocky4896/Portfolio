import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Calendar } from "lucide-react";

export default function Education() {
  const courses = [
    "Data Structures & Algorithms",
    "Object Oriented Programming",
    "Probability & Statistics",
    "Linear Algebra & Optimization",
    "Database Management Systems (DBMS)",
    "Machine Learning",
    "Neural Networks & Deep Learning"
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-cyber-darker/20">
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="font-cyber text-xs tracking-[0.3em] text-cyber-blue uppercase font-bold block mb-2">
              04 // Academy
            </span>
            <h2 className="font-cyber text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              Education <span className="text-glow-blue text-cyber-blue">Timeline</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-indigo-500 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-cyber-blue/30 pl-8 md:pl-12 ml-4 md:ml-8 py-4 space-y-12">
          
          {/* Node 1: IIITDM Kancheepuram */}
          <div className="relative">
            {/* Neon Pulse Point */}
            <div className="absolute top-6 left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-cyber-blue border border-black shadow-glow-blue animate-pulse" />
            
            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel border-cyber-blue/20 hover:border-cyber-blue/40 rounded-2xl p-6 md:p-8 shadow-glass transition-all duration-300 relative group"
            >
              {/* Tech Corner Details */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyber-blue" />
                <span className="font-mono text-xs text-cyber-blue font-bold tracking-wider">
                  2023 - 2027
                </span>
              </div>

              {/* Title / Degree */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-cyber-blue/10 rounded-xl border border-cyber-blue/20">
                  <GraduationCap className="w-6 h-6 text-cyber-blue" />
                </div>
                <div>
                  <h3 className="font-cyber text-lg md:text-xl font-extrabold text-white tracking-wide uppercase">
                    Indian Institute of Information Technology
                  </h3>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                    Design and Manufacturing (IIITDM), Kancheepuram
                  </p>
                </div>
              </div>

              {/* Department */}
              <div className="mb-6 pl-1 pr-1">
                <p className="text-sm font-semibold text-gray-300">
                  Bachelor of Technology (B.Tech)
                </p>
                <p className="text-xs text-cyber-blue font-mono mt-0.5">
                  Major: Computer Science and Engineering
                </p>
              </div>

              {/* Performance Metric */}
              <div className="inline-flex items-center gap-3 bg-cyber-darker/60 border border-cyber-blue/10 hover:border-cyber-blue/30 rounded-xl px-4 py-3 mb-6 transition-all duration-300">
                <Award className="w-5 h-5 text-cyber-blue" />
                <div className="text-left font-mono">
                  <p className="text-[10px] text-gray-500 uppercase">Cumulative GPA</p>
                  <p className="text-sm font-bold text-white">7.89 / 10.0</p>
                </div>
              </div>

              {/* Course focus block */}
              <div>
                <p className="font-cyber text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyber-blue" />
                  Key Coursework & Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-3 py-1.5 rounded-lg bg-cyber-darker/50 border border-gray-800 text-gray-400 hover:border-cyber-blue/20 hover:text-white transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Node 2: Bhashyam Junior College */}
          <div className="relative">
            {/* Neon Pulse Point */}
            <div className="absolute top-6 left-[-41px] md:left-[-57px] w-4 h-4 rounded-full bg-cyber-pink border border-black shadow-glow-pink animate-pulse" />
            
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel-pink border-cyber-pink/20 hover:border-cyber-pink/40 rounded-2xl p-6 md:p-8 shadow-glass transition-all duration-300 relative group"
            >
              {/* Tech Corner Details */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyber-pink" />
                <span className="font-mono text-xs text-cyber-pink font-bold tracking-wider">
                  2021 - 2023
                </span>
              </div>

              {/* Title / College */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-cyber-pink/10 rounded-xl border border-cyber-pink/20">
                  <GraduationCap className="w-6 h-6 text-cyber-pink" />
                </div>
                <div>
                  <h3 className="font-cyber text-lg md:text-xl font-extrabold text-white tracking-wide uppercase">
                    Bhashyam Junior College
                  </h3>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-0.5">
                    Board of Intermediate Education, Andhra Pradesh
                  </p>
                </div>
              </div>

              {/* Degree / Stream */}
              <div className="mb-6 pl-1 pr-1">
                <p className="text-sm font-semibold text-gray-300">
                  Intermediate Education (12th Grade)
                </p>
                <p className="text-xs text-cyber-pink font-mono mt-0.5">
                  Focus: Mathematics, Physics, Chemistry (MPC)
                </p>
              </div>

              {/* Performance Metric */}
              <div className="inline-flex items-center gap-3 bg-cyber-darker/60 border border-cyber-pink/10 hover:border-cyber-pink/30 rounded-xl px-4 py-3 transition-all duration-300">
                <Award className="w-5 h-5 text-cyber-pink" />
                <div className="text-left font-mono">
                  <p className="text-[10px] text-gray-500 uppercase">Board Score</p>
                  <p className="text-sm font-bold text-white">Percentage: 97%</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* End Node */}
          <div className="absolute bottom-0 left-[-6px] w-3 h-3 rounded-full bg-cyber-blue/40 border border-black" />
        </div>

      </div>
    </section>
  );
}
