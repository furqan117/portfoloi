import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate Frontend Developer with a strong interest in building modern web applications 
              and real-world systems. I enjoy learning new technologies, working in teams, and solving 
              practical problems through code.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a solid foundation in Computer Science and hands-on experience in both frontend and 
              backend technologies, I strive to create seamless user experiences that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently seeking an entry-level Frontend Developer position where I can grow my technical 
              skills, gain real-world experience, and contribute to meaningful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-muted-foreground text-sm">Academic Background</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-semibold mb-1">Bachelor of Computer Science</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Jamhuriya University of Science & Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>2021 – 2025</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/30">
                  <h4 className="font-semibold mb-1">Full-Stack Web Development</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Deero Institution (Scholarship)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>2-Month Intensive Program</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
