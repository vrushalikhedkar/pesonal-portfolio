import React from 'react';
import './Experience.css';

function Experience() {
  const experience = [
    {
      Company: 'Hyper Tech Global Technologies Pvt Ltd',
      Position: 'Front End Developer',
      Location: 'Remote',
      Duration: 'March 2024 - July 2024',
      Summery: [
        'Built user-friendly websites and web applications using React.js.',
        'Ensured the web applications were responsive and worked well on different devices.'
      ],
      Project: 'https://www.hypertechglobaltechnologies.com/'
    },
    {
      Company: 'Hexolt Life Solutions Pvt. Ltd',
      Position: 'Front End Developer Intern',
      Location: 'Nagpur, Maharashtra',
      Duration: 'Nov 2023 - Feb 2024',
      Summery: [
        'Enhanced user experience by developing responsive and interactive web applications.',
        'Created visually appealing and responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript.'
      ],
      Project: [
        { name: 'Friend Furnier', url: 'https://friendstimber.com/' },
        { name: 'Friend Timber', url: 'https://timber.hexolt.com/' }
      ]
    }
  ];

  return (
    <section id='experience' className='experience'>
      <div className='container experience-me'>
        <div className='heading-wrapper'>
          <h2 >Experience</h2>
        </div>

        <div className='row'>
          {experience.map((exe, index) => (
            <div key={index} className='col-lg-12 experience-item'>
              <h3>{exe.Company}</h3>
              <p><strong>Position:</strong> {exe.Position}</p>
              <p><strong>Location:</strong> {exe.Location}</p>
              <p><strong>Duration:</strong> {exe.Duration}</p>
              <p><strong>Summary:</strong></p>
              <ul>
                {exe.Summery.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p><strong>Project:</strong></p>
              {Array.isArray(exe.Project) ? (
                <ul>
                  {exe.Project.map((proj, idx) => (
                    <li key={idx}>
                      <a href={proj.url} target="_blank" rel="noopener noreferrer">{proj.name}</a>
                    </li>
                  ))}
                </ul>
              ) : (
                <a href={exe.Project} target="_blank" rel="noopener noreferrer">{exe.Project}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
