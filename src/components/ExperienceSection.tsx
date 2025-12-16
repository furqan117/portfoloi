import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'SomNOG Workshop',
    organization: 'SomNOG',
    description: 'Participated in technical workshops focused on networking, security, and modern technologies.',
    date: '7 – 11 December 2024 & 2025',
    type: 'Workshop',
    icon: '🌐',
  },
  {
    title: 'PyCon Somalia 2025',
    organization: 'PyCon Somalia',
    description: 'Attended Python and software development sessions, community networking, and tech talks.',
    date: '2025',
    type: 'Conference',
    icon: '🐍',
  },
  {
    title: 'Full-Stack Development Scholarship',
    organization: 'Deero Institution',
    description: 'Awarded a full scholarship to study Full-Stack Web Development, covering both frontend and backend technologies.',
    date: '2-Month Intensive Program',
    type: 'Scholarship',
    icon: '🎓',
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Workshops & Programs</h2>
          <p className="section-subtitle">Learning and growth experiences</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-primary text-sm">{exp.organization}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
