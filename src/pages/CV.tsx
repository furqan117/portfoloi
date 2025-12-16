import {
  Download,
  Mail,
  Github,
  MapPin,
  GraduationCap,
  Briefcase,
  Code,
  Award,
} 
from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Buttons (hidden on print) */}
      <div className="print:hidden fixed top-6 right-6 z-50 flex gap-3">
        <Button onClick={handlePrint}>
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
        <header className="mb-10 pb-8 border-b border-gray-300">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Furqan Farhan Dahir
          </h1>
          <p className="text-xl text-gray-700 mb-4">Frontend Developer</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <a
              href="mailto:furqaanfarxaan2@gmail.com"
              className="flex items-center gap-2 hover:text-black"
            >
              <Mail className="h-4 w-4" />
              furqaanfarxaan2@gmail.com
            </a>

            <a
              href="https://github.com/furqan117"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black"
            >
              <Github className="h-4 w-4" />
              github.com/furqan117
            </a>

            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Somalia
            </span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Passionate Frontend Developer with a Bachelor's degree in Computer
            Science from Jamhuriya University of Science & Technology. Experienced
            in building modern web applications using React, JavaScript, and
            related technologies. Strong foundation in frontend and backend
            development with hands-on team projects. Eager to grow and
            contribute to impactful products.
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <div className="flex justify-between flex-wrap mb-2">
                <h3 className="font-semibold">
                  Bachelor of Computer Science
                </h3>
                <span className="text-sm text-gray-600">2021 – 2025</span>
              </div>
              <p className="text-gray-700">
                Jamhuriya University of Science & Technology
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <div className="flex justify-between flex-wrap mb-2">
                <h3 className="font-semibold">
                  Full-Stack Web Development (Scholarship)
                </h3>
                <span className="text-sm text-gray-600">
                  2-Month Intensive
                </span>
              </div>
              <p className="text-gray-700">Deero Institution</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Code className="h-5 w-5" />
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-sm text-gray-700">
                HTML5, CSS3, Tailwind CSS, Bootstrap, JavaScript, React, Next.js
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-sm text-gray-700">PHP, Java</p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Database</h3>
              <p className="text-sm text-gray-700">
                MySQL, PostgreSQL, MongoDB
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-sm text-gray-700">
                Git & GitHub, Docker, VS Code, NetBeans
              </p>
            </div>
          </div>
        </section>

        {/* Projectss*/}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Projects
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-1">
                🏥 Doctor Appointment System
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                Web system for managing doctor schedules, patients, and admin
                controls.
              </p>
              <p className="text-xs text-gray-600">
                React • Next.js • JavaScript
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-1">
                🏨 Hotel Management System
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                Desktop application for room booking, billing, and guest
                management.
              </p>
              <p className="text-xs text-gray-600">
                Java • MySQL • JDBC • Swing
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white border border-gray-200">
              <h3 className="font-semibold mb-1">
                🕌 Islamic Learning App
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                Interactive Islamic learning web application.
              </p>
              <p className="text-xs text-gray-600">
                React • Tailwind CSS • API
              </p>
            </div>
          </div>
        </section>

        {/* Workshops */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5" />
            Workshops & Programs
          </h2>

          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white border border-gray-200 flex justify-between">
              <div>
                <h3 className="font-semibold">SomNOG Workshop</h3>
                <p className="text-sm text-gray-700">
                  Networking & security technologies
                </p>
              </div>
              <span className="text-sm text-gray-600">2024 – 2025</span>
            </div>

            <div className="p-3 rounded-lg bg-white border border-gray-200 flex justify-between">
              <div>
                <h3 className="font-semibold">PyCon Somalia</h3>
                <p className="text-sm text-gray-700">
                  Python development sessions
                </p>
              </div>
              <span className="text-sm text-gray-600">2025</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          References available upon request
        </footer>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          button, a {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
