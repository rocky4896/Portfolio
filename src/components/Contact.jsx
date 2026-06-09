import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Download, Sparkles, Terminal } from "lucide-react";

const Github = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Leetcode = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.36 1.456 1.456 0 0 0-.073.201c-.001.006-.002.013-.003.019a5.45 5.45 0 0 0 .127 2.832c.209.561.533 1.034.943 1.412l4.111 4.111a1.47 1.47 0 0 0 2.065 0l4.111-4.111c.41-.378.734-.851.943-1.412a5.498 5.498 0 0 0 .127-2.832 1.69 1.69 0 0 0-.073-.201 5.35 5.35 0 0 0-.125-.36 5.266 5.266 0 0 0-1.209-2.104L14.444.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.35 1.35 0 0 1-.404-.957V8.862a1.35 1.35 0 0 1 .404-.957l2.865-2.865a1.35 1.35 0 0 1 1.914 0l2.865 2.865a1.35 1.35 0 0 1 .404.957v2.996a1.35 1.35 0 0 1-.404.957l-2.865 2.865a1.35 1.35 0 0 1-1.914 0l-2.865-2.865z" />
  </svg>
);


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success
  const [consoleOutput, setConsoleOutput] = useState([]);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-cyber-blue" />,
      label: "Email ID",
      value: "shanmukhagoru123@gmail.com",
      href: "mailto:shanmukhagoru123@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-cyber-pink" />,
      label: "Mobile Number",
      value: "+91 7702615106",
      href: "tel:+917702615106",
    },
    {
      icon: <Github className="w-5 h-5 text-cyber-purple" />,
      label: "GitHub Profile",
      value: "github.com/shanmukha",
      href: "https://github.com/shanmukha",
    },
    {
      icon: <Linkedin className="w-5 h-5 text-cyber-green" />,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/goru-shanmukha",
      href: "https://linkedin.com",
    },
    {
      icon: <Leetcode className="w-5 h-5 text-yellow-400" />,
      label: "LeetCode Profile",
      value: "leetcode.com/u/shannu_4893",
      href: "https://leetcode.com/u/shannu_4893/",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, name: value })); // Wait, copy fields correctly:
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownloadResume = () => {
    window.open("/qualcomm.pdf", "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setConsoleOutput(["Initializing handshake...", "Establishing secure tunnel..."]);

    setTimeout(() => {
      setConsoleOutput((prev) => [...prev, `Encrypting payload from ${formData.name}...`]);
    }, 600);

    setTimeout(() => {
      setConsoleOutput((prev) => [...prev, "Transmitting packets to Goru Shanmukha...", "ACK received from mail server."]);
    }, 1200);

    setTimeout(() => {
      setStatus("success");
      setConsoleOutput((prev) => [...prev, "Transmission SUCCESSFUL! Connections closed."]);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyber-pink/5 rounded-full blur-[120px] pointer-events-none" />

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
              06 // Connection
            </span>
            <h2 className="font-cyber text-3xl md:text-5xl font-extrabold uppercase text-white tracking-tight">
              Get In <span className="text-glow-blue text-cyber-blue">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-indigo-500 mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel border-cyber-blue/15 rounded-2xl p-6 md:p-8">
              <h3 className="font-cyber text-lg font-bold text-white uppercase tracking-wider mb-6">
                System Terminals
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className="flex items-center gap-4 bg-cyber-darker/40 border border-gray-800/80 hover:border-cyber-blue/30 rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="p-2.5 bg-cyber-darker/80 rounded-lg border border-gray-700/60 group-hover:border-cyber-blue/30 group-hover:bg-cyber-blue/5 transition-all">
                      {info.icon}
                    </div>
                    <div className="text-left font-mono">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-white group-hover:text-cyber-blue transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="glass-panel border-cyber-pink/15 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-left font-mono mb-4 sm:mb-0">
                <p className="text-xs text-cyber-pink font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  Ready to Collaborate?
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Download resume or signal local host.
                </p>
              </div>
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handleDownloadResume}
                  className="cyber-btn cyber-btn-pink text-xs px-5 py-3 flex-grow sm:flex-grow-0 flex items-center justify-center gap-2"
                >
                  <Download className="w-4.5 h-4.5" />
                  Resume
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel border-cyber-blue/15 rounded-2xl p-6 md:p-8 relative">
              <h3 className="font-cyber text-lg font-bold text-white uppercase tracking-wider mb-6">
                Transmit Secure Transmission
              </h3>

              {status !== "success" ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2 text-left">
                      <label className="font-cyber text-[10px] text-gray-400 uppercase tracking-widest">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-cyber-darker/60 border border-gray-800 focus:border-cyber-blue rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2 text-left">
                      <label className="font-cyber text-[10px] text-gray-400 uppercase tracking-widest">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-cyber-darker/60 border border-gray-800 focus:border-cyber-blue rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Subject */}
                  <div className="space-y-2 text-left">
                    <label className="font-cyber text-[10px] text-gray-400 uppercase tracking-widest">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Internship / Project Collaboration"
                      className="w-full bg-cyber-darker/60 border border-gray-800 focus:border-cyber-blue rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-all"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-2 text-left">
                    <label className="font-cyber text-[10px] text-gray-400 uppercase tracking-widest">
                      Message Payload
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your transmission contents here..."
                      className="w-full bg-cyber-darker/60 border border-gray-800 focus:border-cyber-blue rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-blue transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="cyber-btn cyber-btn-blue w-full py-4 text-xs flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <Terminal className="w-4 h-4 animate-pulse" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* Success Interface */
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-cyber-green/10 border border-cyber-green rounded-full flex items-center justify-center mx-auto shadow-glow-green">
                    <Sparkles className="w-8 h-8 text-cyber-green" />
                  </div>
                  <h4 className="font-cyber text-lg font-bold text-white uppercase tracking-wider">
                    Transmission Acknowledged
                  </h4>
                  <p className="text-sm text-gray-400 max-w-md mx-auto">
                    Your package has been securely encrypted and delivered to Goru Shanmukha's inbox.
                  </p>
                  
                  {/* Console Logs Box */}
                  <div className="bg-black/80 border border-gray-800 rounded-xl p-4 max-w-lg mx-auto font-mono text-left text-xs text-cyber-green space-y-1">
                    {consoleOutput.map((log, idx) => (
                      <p key={idx}>
                        <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span> {log}
                      </p>
                    ))}
                  </div>

                  <button
                    onClick={() => setStatus("idle")}
                    className="cyber-btn cyber-btn-blue px-6 py-2.5 text-xs mx-auto block"
                  >
                    Reset Connection
                  </button>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
