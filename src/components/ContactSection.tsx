import { motion } from 'framer-motion';
import { Mail, Github, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            I'm currently seeking an entry-level Frontend Developer position. 
            Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Send className="h-10 w-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Furqan Farhan Dahir</h3>
            <p className="text-muted-foreground mb-8">Frontend Developer</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button asChild size="lg" className="w-full sm:w-auto glow-primary">
                <a href="mailto:furqaanfarxaan2@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  furqaanfarxaan2@gmail.com
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="https://github.com/furqan117" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                View or download my CV for more details
              </p>
              <Button asChild size="lg" variant="outline" className="gradient-border bg-transparent">
                <a href="/cv">
                  <Download className="mr-2 h-4 w-4" />
                  View CV
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
