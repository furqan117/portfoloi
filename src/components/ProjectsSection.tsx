import { motion } from 'framer-motion';
import { ExternalLink, Github, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Doctor Appointment System',
    description: 'A web-based system that helps manage doctor schedules, patient appointments, and admin controls.',
    features: [
      'Role-based access (Admin, Doctor, Patient)',
      'Appointment booking & management',
      'Doctor availability scheduling',
      'Dashboard views for different users',
    ],
    tech: ['React', 'Next.js', 'JavaScript', 'Database'],
    github: 'https://github.com/somnog/Doctor-Appointment-System',
    isTeamProject: true,
    icon: '🏥',
  },
  {
    title: 'Hotel Management System',
    description: 'A comprehensive desktop application for managing hotel operations including room bookings, guest management, and billing.',
    features: [
      'Room reservation & availability tracking',
      'Guest check-in/check-out management',
      'Billing and invoice generation',
      'Staff management dashboard',
    ],
    tech: ['Java', 'MySQL', 'JDBC', 'Swing'],
    github: 'https://github.com/furqan117',
    isTeamProject: false,
    icon: '🏨',
  },
  {
    title: 'Islamic Learning App',
    description: 'An interactive web application designed to help users learn about Islamic teachings, prayers, and Quran recitation.',
    features: [
      'Prayer times & reminders',
      'Quran reading with translations',
      'Islamic calendar & events',
      'Daily duas and supplications',
    ],
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'API Integration'],
    github: 'https://github.com/furqan117',
    isTeamProject: false,
    icon: '🕌',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some things I've built</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="p-8">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                      <span className="text-3xl">{project.icon}</span>
                      {project.title}
                    </h3>
                    {project.isTeamProject && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        <Users className="h-3 w-3" />
                        Team Project
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-lg bg-secondary font-mono text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            You can find more of my projects on my GitHub profile
          </p>
          <Button asChild variant="outline" className="gradient-border bg-transparent">
            <a href="https://github.com/furqan117" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View All Projects
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
