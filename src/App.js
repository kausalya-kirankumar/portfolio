import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Linkedin, Mail, Award, Target, Zap, TrendingUp, Code2, Briefcase, CheckCircle2 } from 'lucide-react';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen overflow-hidden">
      {/* Professional Animated Background */}
      <motion.div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary Gradient Orb */}
        <motion.div
          className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-br from-indigo-600/40 to-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-60"
          animate={{
            x: [0, 60, -30, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Secondary Gradient Orb */}
        <motion.div
          className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-slate-700/50 to-indigo-900/40 rounded-full mix-blend-screen filter blur-3xl opacity-50"
          animate={{
            x: [0, -70, 40, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Tertiary Center Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-700/30 to-slate-800/20 rounded-full mix-blend-screen filter blur-3xl opacity-40"
          animate={{
            scale: [1, 1.3, 0.85, 1],
            rotate: [0, 180, 360],
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Fourth Corner Accent */}
        <motion.div
          className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full mix-blend-screen filter blur-3xl opacity-30"
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [-360, 0],
            x: [0, -50, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Bottom Left Accent */}
        <motion.div
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-slate-700/25 to-indigo-800/20 rounded-full mix-blend-screen filter blur-3xl opacity-35"
          animate={{
            scale: [1, 1.25, 0.9, 1],
            y: [0, -60, 60, 0]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating Particles Effect */}
        <motion.div
          className="absolute top-20 right-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-60"
          animate={{
            y: [0, -300, 0],
            x: [0, 50, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-50"
          animate={{
            y: [0, 200, 0],
            x: [0, -60, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-2.5 h-2.5 bg-indigo-500 rounded-full opacity-40"
          animate={{
            y: [0, -250, 0],
            x: [0, 70, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.div>

      <motion.div
        className="fixed inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(79, 70, 229, .05) 25%, rgba(79, 70, 229, .05) 26%, transparent 27%, transparent 74%, rgba(79, 70, 229, .05) 75%, rgba(79, 70, 229, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(79, 70, 229, .05) 25%, rgba(79, 70, 229, .05) 26%, transparent 27%, transparent 74%, rgba(79, 70, 229, .05) 75%, rgba(79, 70, 229, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}
        animate={{
          y: [0, 50, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Global Fixed QA Text Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
        {/* Base Layer - Static Dark Text */}
        <motion.h1
          className="text-[40rem] sm:text-[50rem] font-black leading-none tracking-tighter text-slate-800 absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }} // Slightly increased opacity for visibility
          transition={{ duration: 2 }}
        >
          QA
        </motion.h1>

        {/* Overlay Layer - Running Light Effect */}
        <motion.h1
          className="text-[40rem] sm:text-[50rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-transparent via-indigo-900/10 to-transparent absolute z-10"
          style={{
            backgroundSize: "200% auto",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            className="block w-full h-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(99, 102, 241, 0.4) 50%, transparent 60%, transparent 100%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
            animate={{
              backgroundPosition: ["200% 0%", "-200% 0%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            QA
          </motion.span>
        </motion.h1>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <motion.div
          className="backdrop-blur-xl bg-slate-900/70 border-b border-indigo-500/20 shadow-xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                className="text-2xl font-black tracking-tighter"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-indigo-400">Kausalya</span>
                <span className="text-slate-400">.</span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8">
                {['home', 'about', 'skills', 'experience', 'contact'].map((item, idx) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className={`capitalize text-sm font-semibold relative group transition-colors ${activeSection === item ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                      }`}
                    onClick={() => setActiveSection(item)}
                    whileHover={{ scale: 1.08 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1.5 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                {menuOpen ? <X size={24} className="text-indigo-400" /> : <Menu size={24} className="text-indigo-400" />}
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  className="md:hidden pb-4 space-y-3 border-t border-indigo-500/20 pt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {['home', 'skills', 'experience', 'about', 'contact'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item}`}
                      className="block capitalize text-sm py-2 text-slate-400 hover:text-indigo-400 transition-colors"
                      onClick={() => {
                        setActiveSection(item);
                        setMenuOpen(false);
                      }}
                      whileHover={{ x: 8 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-4 relative overflow-hidden">
        {/* Animated Orbs */}
        <motion.div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-80 h-80 border-2 border-indigo-400/20 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-slate-600/30 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Removed Animated QA Text from here - moved to global background */}

        <motion.div
          className="text-center max-w-5xl mx-auto relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >


          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-500"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Kausalya
              </motion.span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-500">
                Kiran Kumar
              </span>
            </h1>
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="inline-block px-6 py-2 rounded-full bg-slate-800/80 border border-indigo-500/50 backdrop-blur-md"
              animate={{
                boxShadow: ['0 0 0 rgba(79, 70, 229, 0)', '0 0 20px rgba(79, 70, 229, 0.5)', '0 0 0 rgba(79, 70, 229, 0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-indigo-300 font-semibold text-sm tracking-wide">SENIOR QA ENGINEER</span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Delivering excellence in quality assurance with <span className="text-indigo-400 font-semibold">6+ years</span> of expertise in automation testing, strategic planning, and building world-class products
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 justify-center mb-12"
          >
            {[
              { label: 'Projects Delivered', value: '15+' },
              { label: 'Test Automation', value: '1000+' },
              { label: 'Team Mentored', value: '10+' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-3xl font-black text-indigo-400"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-12">
            <MotionButton text="Explore My Work" isPrimary href="#about" />
            <MotionButton text="Get in Touch" isPrimary={false} href="#contact" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 text-slate-400"
          >
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/kausalya-kiran-kumar-4671a2140', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:kausalyakirankumar@gmail.com', label: 'Email' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.85 }}
              >
                <motion.div
                  className="absolute inset-0 bg-indigo-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                />
                <social.icon className="w-7 h-7 relative hover:text-indigo-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.a href="#about">
            <motion.div
              className="p-3 rounded-full border-2 border-indigo-400/50 hover:border-indigo-400 hover:bg-indigo-500/10 cursor-pointer transition-all"
              whileHover={{ scale: 1.15 }}
            >
              <ChevronDown size={28} className="text-indigo-400" />
            </motion.div>
          </motion.a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Expertise">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { category: 'Automation Tools', items: ['Selenium', 'WebDriver', 'Cucumber', 'Postman'] },
            { category: 'Languages & Frameworks', items: ['Java Core', 'BDD', 'Maven', 'TestNG'] },
            { category: 'Testing Types', items: ['UI Testing', 'Functional', 'Integration', 'Regression'] },
            { category: 'DevOps & Tools', items: ['JIRA', 'Eclipse', 'GitHub', 'Jenkins'] },
            { category: 'Methodologies', items: ['Agile/Scrum', 'SDLC', 'STLC', 'CI/CD'] },
            { category: 'Soft Skills', items: ['Leadership', 'Mentoring', 'Communication', 'Problem Solving'] },
          ].map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg p-6 border border-slate-700/50 bg-slate-800/40 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300"
              onHoverStart={() => setHoveredSkill(idx)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-indigo-500 to-transparent"
                animate={{ scaleX: hoveredSkill === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />

              <div className="relative">
                <motion.h3
                  className="font-bold mb-4 text-indigo-300 group-hover:text-indigo-200 transition-colors flex items-center gap-2"
                  whileHover={{ x: 4 }}
                >
                  <Code2 className="w-4 h-4" />
                  {skillGroup.category}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-slate-700/60 text-xs text-slate-200 border border-slate-600/50 hover:border-indigo-400/50 hover:bg-slate-700 transition-all"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{
                        scale: 1.12,
                        backgroundColor: 'rgba(79, 70, 229, 0.15)',
                        borderColor: 'rgba(129, 115, 248, 0.5)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Professional Journey">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Briefcase,
              title: 'Senior QA Engineer',
              company: 'Compumatrice',
              period: 'Dec 2022 - Present',
              highlights: [
                'Lead end-to-end testing activities across multiple projects',
                'Create comprehensive test strategies and ensure complete coverage',
                'Mentor junior QA engineers and conduct technical code reviews',
                'Collaborate with developers, BAs, and clients for quality releases',
              ],
            },
            {
              icon: Code2,
              title: 'Junior to Mid-Level QA Engineer',
              company: 'Compumatrice',
              period: 'Nov 2019 - Dec 2022',
              highlights: [
                'Progressed from functional testing to complex module handling',
                'Managed regression cycles and end-to-end testing',
                'Developed test cases with complete requirement coverage',
                'Worked on healthcare and sports/wellness projects',
              ],
            },
          ].map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} delay={idx * 0.2} />
          ))}
        </motion.div>

        {/* Projects */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-500">
            Featured Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { name: 'Prego Power', type: 'Healthcare Platform', icon: '🏥' },
              { name: 'Patient Connect 360 (UNTHSC)', type: 'Healthcare Network', icon: '🔗' },
              { name: 'Healthy Culture 360 (HC360)', type: 'Wellness Application', icon: '💚' },
              { name: 'Tennis Wizard', type: 'Sports & Wellness', icon: '🎾' },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-lg p-6 border border-slate-700/50 bg-slate-800/40 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4 text-3xl">{project.icon}</div>
                <div className="relative">
                  <motion.h4
                    className="font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors text-lg"
                    whileHover={{ x: 4 }}
                  >
                    {project.name}
                  </motion.h4>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">{project.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" title="Recognition & Awards">
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { award: 'Learned the Most Award', year: '2019', icon: '🎓' },
            { award: 'High Speed Learner Award', year: '2020', icon: '⚡' },
            { award: 'Hardworking Award', year: '2021', icon: '💼' },
            { award: 'Determination Award', year: '2022', icon: '🎯' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg p-7 border border-indigo-500/30 bg-gradient-to-br from-slate-800/60 to-slate-800/40 hover:border-indigo-500/60 transition-all duration-300"
              whileHover={{ scale: 1.06, rotate: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative">
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{item.award}</h4>
                <motion.p
                  className="text-sm text-indigo-400 font-semibold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {item.year}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Expert in Quality",
                text: "With 6+ years of dedicated experience, I've mastered the art of ensuring product excellence through meticulous testing strategies and comprehensive automation frameworks."
              },
              {
                title: "Continuous Learner",
                text: "My commitment to staying ahead of industry trends and adopting cutting-edge testing methodologies ensures I deliver modern, scalable solutions."
              },
              {
                title: "Team Leader",
                text: "I specialize in mentoring junior engineers, establishing best practices, and fostering a culture of quality-first development."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg border border-indigo-500/30 bg-slate-800/40 hover:bg-slate-800/60 hover:border-indigo-400/50 transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  className="flex items-center gap-3 mb-3"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                </motion.div>
                <p className="text-slate-300 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: Award, label: 'Experience', value: '6+ Years', subtext: 'QA Engineering' },
              { icon: Target, label: 'Specialization', value: 'Full-Stack', subtext: 'Testing & Automation' },
              { icon: Zap, label: 'Expertise', value: 'Precision', subtext: 'Quality Assurance' },
              { icon: TrendingUp, label: 'Focus', value: 'Excellence', subtext: 'Continuous Improvement' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-5 rounded-lg border border-slate-700/50 bg-slate-800/40 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer"
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="flex-shrink-0 mt-1"
                  >
                    <stat.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-slate-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-500">{stat.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let's Connect & Build Together">
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={itemVariants} className="text-center text-slate-300 mb-12 text-lg leading-relaxed">
            Let's discuss! I am deeply curious about technology and always eager to learn and adapt to new tech stacks. Let's connect and explore how we can innovate together!
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <MotionButton text="Send Email" isPrimary href="mailto:kausalyakirankumar@gmail.com" size="lg" />
            <MotionButton text="LinkedIn Profile" isPrimary={false} href="https://linkedin.com/in/kausalya-kiran-kumar-4671a2140" size="lg" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-lg border border-indigo-500/30 bg-gradient-to-br from-slate-800/60 to-slate-800/40 text-center"
          >
            <p className="text-slate-300 mb-2 font-semibold">📍 Shollinganallur, Chennai - 600119</p>
            <p className="text-slate-300 mb-6 font-semibold">📞 +91 86986 27690</p>
            <motion.div
              className="h-1 bg-gradient-to-r from-indigo-400 via-indigo-500 to-transparent rounded-full"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        </motion.div>
      </Section>

      {/* Footer */}
      <motion.footer
        className="relative py-12 px-4 border-t border-indigo-500/20 bg-gradient-to-t from-slate-950 via-slate-900 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            className="text-slate-400 text-sm tracking-wide"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2024 Kausalya Kiran Kumar. Crafted with precision, expertise, and attention to detail.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
};

const Section = ({ id, title, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id={id} ref={ref} className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative">
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-black mb-16 text-center"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-indigo-500">
          {title}
        </span>
      </motion.h2>
      {children}
    </section>
  );
};

const MotionButton = ({ text, isPrimary, href, size = 'md' }) => {
  const sizeClass = size === 'lg' ? 'px-12 py-4 text-base' : 'px-8 py-3 text-sm';

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') && !href.startsWith('mailto') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="inline-block"
    >
      <motion.button
        className={`relative overflow-hidden rounded-lg font-bold transition-all duration-300 ${isPrimary
          ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:shadow-2xl hover:shadow-indigo-500/40'
          : 'border-2 border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 hover:text-indigo-200'
          } ${sizeClass}`}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.93 }}
      >
        <span className="relative z-10">{text}</span>
      </motion.button>
    </motion.a>
  );
};

const ExperienceCard = ({ icon: Icon, title, company, period, highlights, delay }) => (
  <motion.div
    className="group relative overflow-hidden rounded-lg p-7 border border-slate-700/50 bg-slate-800/40 hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300"
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -6 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <motion.div
      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-indigo-500 to-transparent"
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay }}
      style={{ transformOrigin: 'left' }}
    />
    <div className="relative">
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex-shrink-0 mt-1"
        >
          <Icon className="w-6 h-6 text-indigo-400" />
        </motion.div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
            {title}
          </h3>
          <p className="text-indigo-400 text-sm font-semibold">{company}</p>
          <p className="text-slate-500 text-xs mt-1">{period}</p>
        </div>
      </div>
      <ul className="space-y-3 mt-4">
        {highlights.map((highlight, idx) => (
          <motion.li
            key={idx}
            className="text-slate-300 flex gap-3 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + idx * 0.1 }}
          >
            <span className="text-indigo-400 font-bold flex-shrink-0 mt-0.5">→</span>
            <span>{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default Portfolio;