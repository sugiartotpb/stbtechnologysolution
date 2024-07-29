import React from 'react'
const experiences = [
  {
    title: 'HRMS System',
    description: ['Implement and configure HRMS software solutions based on business needs and requirements.', 'Manage the day-to-day operation of the HRMS system, including troubleshooting and resolving issues.', 'Ensure compliance with data protection regulations and maintain data security protocols.', 'Collaborate with HR and IT teams to integrate HRMS with other business systems.'],
    technologies: 'Desktop app with c#, MS SQL Server'
  },
  {
    title: 'Travel Agent Application',
    description: ['Develop and integrate APIs for ferry ticketing, hotel, and car rental bookings.', 'Design and manage databases that store booking information, customer data, and travel itineraries.', 'Provide technical support and troubleshooting for software issues.', 'Manage software development projects from inception to completion.'],
    technologies: 'ASP .Net Mvc, MS SQL Server'
  },
  {
    title: 'Time Attendance System',
    description: ['Design, develop, and maintain time and attendance software applications.', 'Implement features for clocking in/out, leave requests, and employee scheduling.', 'Integrate time and attendance systems with other HR and payroll systems.', 'Develop and manage databases to store attendance records, employee data, and schedules.', 'Develop reporting tools to provide insights into attendance patterns, overtime, and compliance.'],
    technologies: 'ASP .Net Mvc, MS SQL Server, Crystal Report'
  }
];
const ExperiencePage = () => {
  return (
    <section id="projects" className="py-2">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8 icon-orange-block">EXPERIENCES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2 icon-orange-block">{experience.title}</h3>
              {/* <p className="mb-4">{project.description}</p> */}
              <ul className="list-disc list-inside space-y-2 mb-2">
                {experience.description.map((desc, index) => (
                  <li key={index} className="text-gray-700">{desc}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-700">Technologies: {experience.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencePage