import { Download, Mail, Github, MapPin, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Print Button - Hidden when printing */}
      <div className="print:hidden fixed top-6 right-6 z-50 flex gap-3">
        <Button onClick={handlePrint} className="glow-primary">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline" asChild>
          <a href="/">Back to Portfolio</a>
        </Button>
      </div>

      {/* CV Content */}
      <div className="max-w-4xl mx-auto p-8 md:p-12 print:p-8 print:max-w-none">
        {/* Header */}
        <header className="mb-10 pb-8 border-b border-border print:border-primary/20">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text print:text-foreground">
            Furqan Farhan Dahir
          </h1>
          <p className="text-xl text-primary mb-4">Frontend Developer</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="mailto:furqaanfarxaan2@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              furqaanfarxaan2@gmail.com
            </a>
            <a href="https://github.com/furqan117" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="h-4 w-4" />
              github.com/furqan117
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Somalia
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
            <Briefcase className="h-5 w-5" />
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionate Frontend Developer with a Bachelor's degree in Computer Science from Jamhuriya University 
            of Science & Technology. Experienced in building modern web applications using React, JavaScript, 
            and related technologies. Strong foundation in both frontend and backend development with hands-on 
            experience in team-based projects. Eager to contribute to meaningful projects and grow in a 
            professional environment.
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
            <GraduationCap className="h-5 w-5" />
            Education
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="font-semibold">Bachelor of Computer Science</h3>
                <span className="text-sm text-primary font-mono">2021 – 2025</span>
              </div>
              <p className="text-muted-foreground">Jamhuriya University of Science & Technology</p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="font-semibold">Full-Stack Web Development (Scholarship)</h3>
                <span className="text-sm text-primary font-mono">2-Month Intensive</span>
              </div>
              <p className="text-muted-foreground">Deero Institution</p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
            <Code className="h-5 w-5" />
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-muted-foreground">
                HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, React, Next.js
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-muted-foreground">
                PHP, Java
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-muted-foreground">
                MySQL, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <h3 className="font-semibold mb-2">Tools & Others</h3>
              <p className="text-sm text-muted-foreground">
                Git & GitHub, Docker, VS Code, NetBeans
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
            <Briefcase className="h-5 w-5" />
            Projects
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                <h3 className="font-semibold">🏥 Doctor Appointment System</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">Team Project</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Web-based system for managing doctor schedules, patient appointments, and admin controls.
              </p>
              <p className="text-xs font-mono text-primary">React • Next.js • JavaScript • Database</p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <h3 className="font-semibold mb-2">🏨 Hotel Management System</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Desktop application for managing hotel operations including room bookings, guest management, and billing.
              </p>
              <p className="text-xs font-mono text-primary">Java • MySQL • JDBC • Swing</p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <h3 className="font-semibold mb-2">🕌 Islamic Learning App</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Interactive web application for Islamic teachings, prayers, and Quran recitation.
              </p>
              <p className="text-xs font-mono text-primary">React • JavaScript • Tailwind CSS • API Integration</p>
            </div>
          </div>
        </section>

        {/* Workshops & Certifications */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
            <Award className="h-5 w-5" />
            Workshops & Programs
          </h2>
          
          <div className="space-y-3">
            <div className="flex flex-wrap justify-between items-center p-3 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <div>
                <h3 className="font-semibold">SomNOG Workshop</h3>
                <p className="text-sm text-muted-foreground">Networking, security, and modern technologies</p>
              </div>
              <span className="text-sm text-primary font-mono">Dec 2024 & 2025</span>
            </div>

            <div className="flex flex-wrap justify-between items-center p-3 rounded-lg bg-secondary/30 print:bg-transparent print:border print:border-border">
              <div>
                <h3 className="font-semibold">PyCon Somalia 2025</h3>
                <p className="text-sm text-muted-foreground">Python development sessions and tech talks</p>
              </div>
              <span className="text-sm text-primary font-mono">2025</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border text-center text-sm text-muted-foreground print:border-primary/20">
          <p>References available upon request</p>
        </footer>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .gradient-text {
            background: none !important;
            -webkit-text-fill-color: black !important;
            color: black !important;
          }
          .text-primary {
            color: #0891b2 !important;
          }
          .text-muted-foreground {
            color: #525252 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
