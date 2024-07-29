import React from 'react'
const skills = {
  'Programming Languages': ['JavaScript', 'TypeScript', '.NET MVC', '.NET Core'],
  'Front-End Framework': ['React'],
  'Back-End Framework': ['.NET WEB API'],
  'Databases': ['MySQL', 'PostgreSQL', 'MS SQL'],
  'DevOps & Cloud': ['Azure'],
};
const AboutPage = () => {
  return (
    <>
      <section id="skills" className="py-2">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 icon-orange-block">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(skills).map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 icon-orange-block">{category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {skills[category].map((skill, index) => (
                  <li key={index} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutPage