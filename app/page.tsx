"use client"

import { useState, useEffect } from "react"
//import { useRouter } from "next/router"
import Image from 'next/image';
import {
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Award,
  ExternalLink,
  Menu,
  X,
  Eye,
  Code,
  Terminal,
  Zap,
  BriefcaseBusiness,
  HandHelping,
  Cloudy,
  LaptopMinimal,
  Router,
} from "lucide-react"
import { Button } from "@/components/ui/button" // Assuming Button component is available

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visitCount, setVisitCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [activeProjectFilter, setActiveProjectFilter] = useState("All") // New state for project filter
  //const { basePath } = useRouter();
  useEffect(() => {
    setIsClient(true)
    const currentCount = localStorage.getItem("portfolio-visits")
    const newCount = currentCount ? Number.parseInt(currentCount) + 1 : 1
    localStorage.setItem("portfolio-visits", newCount.toString())
    setVisitCount(newCount)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const projectCategories = ["All", "Fullstack-Backend", "Desktop", "UI/UX", "Data Science and Machine Learning"]

  const projects = [
    {
      title: "OpenReview API Review Fetcher",
      tech: ["Python", "OpenReview API", "PyTorch", "Pandas"],
      description:
        "This project fetches papers and reviews from ICLR conferences using the OpenReview API. It supports both a CLI-based script and a REST API built with FastAPI.",
      github: "https://github.com/anusha-gpatel/ai_review_fetcher",
      demo: "#",
      gradient: "from-blue-500 to-purple-600",
      category: "Data Science and Machine Learning",
    },
    {
      title: "NuMoves",
      tech: ["Java", "Spring Boot", "Web Sockets", "MySQL", "ReactJS"],
      description: "A web-based chat application built with Spring Boot, supporting user authentication, a SQL database, and real-time messaging using WebSockets. It has a User registration and login (JWT-based authentication) page, added secure password handling with BCrypt. Also, Real-time chat via WebSockets (Spring Messaging) with MySQL database integration RESTful API for authentication and messaging.",
      github: "https://github.com/anushagpatel/NuMoves",
      demo: "#",
      gradient: "from-green-500 to-teal-600",
      category: "Desktop",
    },
    {
      title: "Codeforces Rating Watcher",
      tech: ["Python", "Firebase", "Azure Functions", "HTML", "CSS", "JavaScript"],
      description: "ML model for image classification with 95% accuracy using deep learning techniques.",
      github: "#",
      demo: "#",
      gradient: "from-pink-500 to-rose-600",
      category: "Fullstack-Backend",
    },
  ]

  const filteredProjects =
    activeProjectFilter === "All" ? projects : projects.filter((project) => project.category === activeProjectFilter)

  return (
    <div className="min-h-screen bg-[#fdfcf7] text-gray-900">
      {" "}
      {/* Changed main background to light beige */}
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fdfcf7]/95 backdrop-blur-sm border-b border-gray-200 z-50">
        {" "}
        {/* Changed nav background to light beige */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src="/icons8-portfolio-50.png" alt="Portfolio Icon" className="w-8 h-8 object-contain" />
              <span className="text-xl sm:text-xl text-gray-500">
                Anusha G Patel
              </span>
              {/* Visit Counter */}
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                <Eye size={16} />
                <span>{isClient ? visitCount.toLocaleString() : "0"} visits</span>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Certifications", "Skills", "Projects", "Testimonials"]
                .filter((item) => item !== "Education") // Ensure Education is filtered out
                .map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="text-gray-600 hover:text-cyan-600 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
            </div>
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-gray-600 hover:text-cyan-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-500 px-4 pb-4 sm:hidden">
                <Eye size={16} />
                <span>{isClient ? visitCount.toLocaleString() : "0"} visits</span>
              </div>
              {["About", "Experience", "Certifications", "Skills", "Projects", "Testimonials"]
                .filter((item) => item !== "Education") // Ensure Education is filtered out
                .map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="block w-full text-left px-4 py-2 text-gray-600 hover:text-cyan-600 hover:bg-gray-100 font-medium"
                  >
                    {item}
                  </button>
                ))}
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#fdfcf7]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          {/* Left Column: Name, Biodata */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-700">Anusha G Patel</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <p className="pl-4 text-xl text-gray-600 font-mono">MS Computer Systems Engineering</p>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed border-l-4 border-yellow-500 pl-4">
              I’m a Full-Stack Developer and Master’s student in Computer Systems at 
              Northeastern University, Boston, with over 4.5 years of experience building 
              scalable systems. A course in Advanced Cloud Technologies sparked my interest in
               cloud platforms, and I’ve since been actively exploring various services. 
               I’m currently focused on sharpening my skills in Java, C#, and full-stack development.
              Outside of coding, you’ll likely find me exploring Boston’s food 
                scene or scouting new running routes and local marathons to join.
            </p>
          </div>
          {/* Right Column: Profile Picture, Contact, Social */}
          <div className="flex flex-col items-center md:items-end gap-8">
            <div className="relative w-55 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600 p-1 shadow-2xl shadow-blue-200/50">
              <img
                //src={`${basePath}/my image.png `}
                src="/my_image.png"
                alt="Anusha G.Patel"
                className="w-full h-full object-cover rounded-full shadow-lg shadow-blue-200/50"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-blue-300/50 animate-pulse-slow"></div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                <Mail size={16} />
                <span>anushagpatel123@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                <Phone size={16} />
                <span>+1 (919) 559-1630</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-2 rounded-lg">
                <MapPin size={16} />
                <span>Northeastern University, Boston</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <a
                href="https://github.com/anushagpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <GitHub size={18} className="group-hover:text-cyan-600 transition-colors" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anusha-gpatel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 group social-link"
              >
                <Linkedin size={18} className="group-hover:text-blue-200 transition-colors" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://discord.com/users/anusha9741"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 hover:scale-105 group social-link"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:text-indigo-200 transition-colors"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="hidden sm:inline">Discord</span>
              </a>
              <a
                href="https://x.com/anusha_gpatel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-black hover:bg-gray-900 text-white rounded-lg transition-all duration-300 hover:scale-105 group social-link"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:text-gray-300 transition-colors"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="hidden sm:inline">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-[#fdfcf7]">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <BriefcaseBusiness className="text-cyan-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {/* Volunteering */}
            <div>
              
              <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">Northeastern University</h4>
                    <span className="text-cyan-600 font-mono text-sm">June 2025 - Present</span>
                  </div>
                  <p className="text-gray-700 mb-2">Research Assistant</p>
                  <p className="text-gray-600">
                    Mentoring undergrad
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Bias Analysis
                    </span>
                  </div>
                </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">IBM</h4>
                    <span className="text-cyan-600 font-mono text-sm">October 2022 - January 2024</span>
                  </div>
                  <p className="text-gray-700 mb-2">Application Developer</p>
                  <p className="text-gray-600">
                    Mentoring undergraduate students in programming fundamentals and helping them build their first
                    projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Java
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Spring Boot
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      AWS Lambda
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">                      
                    
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">Tata Consultancy Services</h4>
                    <span className="text-cyan-600 font-mono text-sm">January 2020 - October 2022</span>
                  </div>
                  <p className="text-gray-700 mb-2">System Engineer</p>
                  <p className="text-gray-600">
                    ong young women.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      C#
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      RESTAPIs
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      .Net Core
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      ReactJS
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Azure DevOps
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Perl
                    </span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs border border-gray-300">
                      Teamsite
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-10 bg-[#fdfcf7]">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-5">
            <Terminal className="text-cyan-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Tech Stack</h2>
          </div> 
          <div className="grid md:grid-cols-4 gap-5">
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-cyan-600 mb-4 flex items-center gap-2">
                <Code size={20} />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["C#", "Java","Python" ,"JavaScript", "TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-200 hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-cyan-600 mb-4 flex items-center gap-2">
                <Router size={20} />
                Backend Dev
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Django", "Flask", "Next.js", "Express"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm border border-green-200 hover:bg-green-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-cyan-600 mb-4 flex items-center gap-2">
                <LaptopMinimal size={20} /> Frameworks & Frontend Dev
              </h3>
              <div className="flex flex-wrap gap-2">
                {[".NET Core", "MVC", "HTML","CSS", "React","Ajax","Bootstrap","Node.js"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm border border-green-200 hover:bg-green-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-lg font-semibold text-cyan-600 mb-4 flex items-center gap-2">
                <Cloudy size={20} />
                 Cloud Technologies and Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Azure Paas", "AWS Lambda", "Azure DevOps", "Git", "SQL","MongoDB","MySQL","Hibernate"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200 hover:bg-purple-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-center text-gray-600 italic mb-2">"Change is inevitable, 
            so I keep exploring new technologies and learning on the go." </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 bg-[#fdfcf7]">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-cyan-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Personal Projects</h2>
          </div>
          {/* Project Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {projectCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveProjectFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeProjectFilter === category
                    ? "bg-cyan-600 text-white hover:bg-cyan-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    <GitHub size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 text-gray-600 hover:text-cyan-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="py-10 bg-[#fdfcf7]">
  <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="flex items-center gap-2 mb-6">
      <Award className="text-cyan-700" size={32} />
      <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card Template */}
      {[
        {
          src: "/image.png",
          alt: "Microsoft Certified Azure Fundamentals Badge",
          title: "AZ900 - Microsoft Azure Fundamentals",
          link: "https://www.credly.com/badges/62075e98-6492-4c80-9d1e-6da338ffc549/linked_in",
        },
        {
          src: "/reavct.png",
          alt: "Edureka React Frontend Developer Certificate",
          title: "React Frontend Developer",
        },
        {
          src: "/AI Workplace.jpeg",
          alt: "AI at Workplace - Northeastern University",
          title: "AI at Workplace",
        },
        {
          src: "/Azure.jpg",
          alt: "Azure DevOps",
          title: "Azure DevOps",
        },
      ].map((cert, index) => (
        <div
          key={index}
          className="bg-white p-4 border border-gray-200 hover:border-cyan-300 transition-colors flex flex-col items-center text-center rounded-lg"
        >
          <img
            src={cert.src}
            alt={cert.alt}
            className="w-50 h-48 mb-3 object-cover rounded-md shadow"
          />
          <h3 className="text-base font-semibold text-gray-900">{cert.title}</h3>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-sm mt-1 underline hover:text-cyan-600 transition-colors"
            > Credly Verification </a>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Testimonials & LeetCode Progress Section */}
      <section id="testimonials" className="py-8 bg-[#fdfcf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Linkedin className="text-cyan-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Testimonials & LeetCode Progress</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <p className="text-gray-700 mb-4 italic">
                "I had the opportunity to work with Anusha on one of IBM's Projects. Since the first day, she has shown
                herself to be an optimistic professional, fast learner and open to the cultural challenges posed by
                different teams. Anusha's ability to command a room and her technical skills generate great value for
                our team. I'm sure she will be a great asset to any team she joins."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">SK</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sunil Kumar Reddy</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    Advisory Consultant, IBM
                    <a
                      href="https://www.linkedin.com/in/thammisunil/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      <Linkedin size={16} />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <p className="text-gray-700 mb-4 italic">
                "Anusha is a talented full-stack developer with an exemplary work ethic. She is a valued member of our
                team. Anusha seamlessly integrates third-party APIs into our products, consistently delivering quick and
                positive results in terms of user interaction and retention. She manages the full software development
                lifecycle, from idea generation to building new and engaging features, conducting QA testing, and
                managing releases while also tracking performance metrics to evaluate the impact of her work. Her
                dedication, willingness to take on any project, and ability to quickly learn and apply new skills make
                her an asset to any organization."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">SP</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Siljo PJ</p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    Senior Software Engineer, TCS
                    <a
                      href="https://www.linkedin.com/in/siljo-pj-77a209164/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500"
                    >
                      <Linkedin size={16} />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            

            {/* LeetCode Progress */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
              <h3 className="text-xl font-semibold text-yellow-700 mb-6 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-700">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
                Daily Challenge & Solved Problems
              </h3>
              <div className="bg-gray-100 rounded-lg p-6 border border-gray-300 flex flex-col items-center justify-center">
                {!isClient ? (
                  <div className="flex items-center justify-center py-16">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-700"></div>
                    <span className="ml-3 text-gray-600">Loading LeetCode graph...</span>
                  </div>
                ) : (
                  <img
                    src="https://leetcode.card.workers.dev/?username=anushagpatel123"
                    alt="LeetCode Progress Graph"
                    className="w-full h-auto rounded-lg border border-gray-300"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-8 bg-[#fdfcf7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <HandHelping className="text-cyan-700" size={32} />
            <h2 className="text-3xl font-bold text-gray-900">Volunteering Experience</h2>
          </div>
          <div className="space-y-8">
            {/* Volunteering */}
            <div> 
              <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-cyan-300 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">MedsForMore</h4>
                    <span className="text-cyan-600 font-mono text-sm">March 2021 - July 2021 </span>
                  </div>
                  <p className="text-gray-700 mb-2">Covid Relief Ambassador</p>
                  <p className="text-gray-600">
                    I organized a medicines(unused) collection drive within my locality and encouraged my
                     peers & neighbours to donate unused/unexpired medicines available at their homes
                     and submit the medicines to your nearest Meds For More (MFM) collection centre.
                  </p>
                </div>
                </div>
                </div>
            </div>
            </div>
            </section>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 font-mono">© 2024 Anusha G Patel</p>
        </div>
      </footer>
    </div>
  )
}
