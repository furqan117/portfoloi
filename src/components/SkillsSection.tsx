import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'React', 'Next.js'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['PHP', 'Java'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Docker', 'VS Code', 'NetBeans'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="skill-card"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="font-semibold text-lg mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
