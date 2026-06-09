import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Brain, Library, BarChart3, Database, Wrench } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("ml-ai");

  const categories = [
    { id: "languages", label: "Languages", icon: <Code className="w-4 h-4" /> },
    { id: "ml-ai", label: "ML & AI", icon: <Brain className="w-4 h-4" /> },
    { id: "libraries", label: "Libraries", icon: <Library className="w-4 h-4" /> },
    { id: "math", label: "Math", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "core-cs", label: "Core CS", icon: <Database className="w-4 h-4" /> },
    { id: "tools", label: "Tools", icon: <Wrench className="w-4 h-4" /> },
  ];

  const skillData = {
    languages: [
      { name: "Python", level: 90, desc: "Primary language for ML, AI, & scripting" },
      { name: "C++", level: 85, desc: "Competitive programming & OOP core" },
      { name: "SQL", level: 80, desc: "Database querying, joining & structured tables" },
    ],
    "ml-ai": [
      { name: "Supervised Learning", level: 85, desc: "Regressions, classification models, SVMs" },
      { name: "Unsupervised Learning", level: 80, desc: "Clustering (K-Means, Hierarchical), PCA" },
      { name: "Deep Learning", level: 80, desc: "Neural networks, backpropagation" },
      { name: "CNNs", level: 80, desc: "Convolutional layers, pooling, image classification" },
      { name: "Model Training", level: 85, desc: "Hyperparameter tuning, optimization methods" },
      { name: "Model Evaluation", level: 85, desc: "Cross-validation, confusion matrices, ROC curves" },
    ],
    libraries: [
      { name: "PyTorch", level: 80, desc: "Tensor operations, custom CNN architectures" },
      { name: "Scikit-learn", level: 85, desc: "Traditional ML pipeline, clustering & metrics" },
      { name: "NumPy", level: 90, desc: "Vectorized computations, matrix operations" },
      { name: "Pandas", level: 85, desc: "DataFrames, data wrangling & preprocessing" },
      { name: "Matplotlib & Seaborn", level: 85, desc: "Data visualization & distribution plots" },
      { name: "Streamlit", level: 75, desc: "Building interactive ML application dashboards" },
    ],
    math: [
      { name: "Probability", level: 85, desc: "Bayes' theorem, probability distributions" },
      { name: "Statistics", level: 80, desc: "Hypothesis testing, descriptive analytics" },
      { name: "Linear Algebra", level: 85, desc: "Eigenvalues, eigenvectors, SVD, matrix calculus" },
      { name: "Feature Engineering", level: 80, desc: "Scaling, encoding, selection & dimensionality reduction" },
    ],
    "core-cs": [
      { name: "Data Structures & Algorithms", level: 85, desc: "Arrays, lists, trees, graphs, sorting/searching" },
      { name: "Object Oriented Programming (OOP)", level: 85, desc: "Inheritance, encapsulation, polymorphism" },
      { name: "DBMS", level: 80, desc: "Database normalization, indexing, transactions" },
      { name: "Operating Systems", level: 80, desc: "Process management, memory management, file systems" },
      { name: "Computer Networks", level: 80, desc: "OSI model, TCP/IP, routing, network protocols" },
    ],
    tools: [
      { name: "Git", level: 85, desc: "Version control, branching, rebasing" },
      { name: "GitHub", level: 85, desc: "Collaborative repos, PRs, actions workflow" },
      { name: "VS Code", level: 90, desc: "Primary development workspace environment" },
      { name: "Google Colab", level: 90, desc: "GPU/TPU-accelerated cloud notebook environment" },
    ],
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-darker/20">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none" />

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
            <span className="font-cyber text-xs tracking-[0.3em] text-cyber-blue uppercase font-bold block mb-2">
              02 // Tech Stack
            </span>
            <h2 className="font-cyber text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              My <span className="text-glow-blue text-cyber-blue">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-indigo-500 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`font-cyber text-xs uppercase tracking-widest px-4 py-3 rounded-lg flex items-center gap-2 border transition-all duration-300 ${
                  isActive
                    ? "bg-cyber-blue/10 border-cyber-blue text-cyber-blue text-glow-blue shadow-glow-blue"
                    : "bg-cyber-card border-transparent text-gray-400 hover:border-cyber-blue/40 hover:text-white"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillData[activeTab].map((skill, index) => (
                <div
                  key={index}
                  className="glass-panel border-cyber-blue/10 hover:border-cyber-blue/40 rounded-xl p-5 shadow-glass flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-cyber font-bold text-white text-base tracking-wide group-hover:text-cyber-blue transition-colors">
                        {skill.name}
                      </h3>
                      <span className="font-mono text-xs text-cyber-blue font-semibold bg-cyber-blue/10 px-2 py-0.5 rounded">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-sans mb-5 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-cyber-darker/60 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="bg-gradient-to-r from-cyber-blue to-indigo-500 h-full rounded-full shadow-glow-blue"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
