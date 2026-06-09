import { motion } from "framer-motion";
import { BrainCircuit, ExternalLink, Database } from "lucide-react";

export default function Projects() {
  const activeProjects = [
    {
      id: 1,
      title: "Facial Emotion Recognition System",
      tech: ["Python", "PyTorch", "CNN", "Deep Learning"],
      desc: "Designed and trained a deep convolutional neural network model on the FER2013 dataset consisting of 35,887 facial images to classify seven human emotions. Built visual metrics dashboard to analyze results.",
      highlights: [
        "Achieved ~65% classification accuracy on challenging real-world dataset",
        "Applied data augmentation techniques to improve model generalization",
        "Reduced overfitting through dropout layers and batch normalization",
        "Built visualization dashboards for inference demonstrations",
        "Generated confusion matrix and ROC curves to diagnose classification bottlenecks",
      ],
      icon: <BrainCircuit className="w-8 h-8 text-cyber-blue" />,
      glowColor: "border-glow-blue",
      accent: "text-cyber-blue",
      badgeBg: "bg-cyber-blue/10 border-cyber-blue/20 text-cyber-blue",
    },
    {
      id: 2,
      title: "Country Segmentation for Development Aid Allocation",
      tech: ["Python", "Scikit-learn", "K-Means", "Data Analysis"],
      desc: "Applied unsupervised learning techniques on socio-economic and health datasets from 167 countries to group them into development tiers. The resulting clusters recommend optimal policy decisions for allocating development aid.",
      highlights: [
        "Implemented K-Means Clustering and determined optimal K using Elbow and Silhouette analysis",
        "Performed detailed Feature Engineering and standard scaling to balance disparate metrics",
        "Conducted Exploratory Data Analysis (EDA) on GDP, child mortality, and life expectancy",
        "Created scatter plots and heatmaps for comprehensive cluster visualizations",
        "Provided policy recommendation insights based on the developmental features of each cluster",
      ],
      icon: <Database className="w-8 h-8 text-cyber-pink" />,
      glowColor: "border-glow-pink",
      accent: "text-cyber-pink",
      badgeBg: "bg-cyber-pink/10 border-cyber-pink/20 text-cyber-pink",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[150px] pointer-events-none" />

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
              03 // Works
            </span>
            <h2 className="font-cyber text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              Featured <span className="text-glow-pink text-cyber-pink">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-pink to-cyber-purple mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Primary Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {activeProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`glass-panel border-gray-800/60 hover:border-transparent rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group hover:${project.glowColor}`}
            >
              {/* Futuristic Tech Corner Grid */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none transition-opacity opacity-20 group-hover:opacity-60" />

              <div>
                {/* Icon & Title Bar */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-cyber-darker/60 rounded-xl border border-gray-800/80 group-hover:border-cyber-blue/20 transition-colors">
                    {project.icon}
                  </div>
                  <span className={`font-cyber text-[10px] tracking-widest px-3 py-1 rounded-full border ${project.badgeBg}`}>
                    COMPLETED
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-cyber text-xl md:text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs px-2.5 py-0.5 rounded bg-cyber-darker/80 text-gray-400 border border-gray-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
                  {project.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-8">
                  <p className="font-cyber text-xs text-white uppercase tracking-wider mb-3">
                    Key Highlights:
                  </p>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-400 leading-normal">
                      <span className={`inline-block mt-1 w-1.5 h-1.5 rounded-full ${project.accent === 'text-cyber-blue' ? 'bg-cyber-blue' : 'bg-cyber-pink'} flex-shrink-0`} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-gray-800/40 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                  STATUS: LIVE // SECURE
                </span>
                <a
                  href="https://github.com/shanmukha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 font-cyber text-xs uppercase tracking-widest font-semibold ${project.accent} hover:underline transition-all`}
                >
                  Code Repo <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
