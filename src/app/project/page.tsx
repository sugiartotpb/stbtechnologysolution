import React from 'react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Developed a microservices-based architecture to improve the scalability and performance of the platform.',
    technologies: 'Java, Spring Boot, React, Docker, Kubernetes, AWS'
  },
  {
    title: 'Real-Time Chat Application',
    description: 'Built a real-time chat application with WebSocket for seamless communication.',
    technologies: 'Node.js, Express, React, Redux, PostgreSQL, Socket.io'
  },
  {
    title: 'Task Management Tool',
    description: 'Created a task management tool for teams to collaborate and manage projects efficiently.',
    technologies: 'Django, Vue.js, MySQL, Docker'
  }
];

const ProjectPage = () => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-8 icon-orange-block">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 icon-orange-block">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-gray-700">Technologies: {project.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectPage