import React from 'react';
import './About.css';
import ProfileImage from "../images/2517908.jpg"

function About() {
  const skills = [
    { name: 'HTML', level: '95%' },
    { name: 'CSS', level: '93%' },
    { name: 'Bootstrap', level: '91%' },
    { name: 'Tailwind CSS', level: '87%' },
    { name: 'JavaScript', level: '83%' },
    { name: 'JQuey', level: '65%' },
    { name: 'React js', level: '55%' },
    { name: 'Git-Hub', level: '75%' },
  ];

  const softskills = [
    { name: 'User Experience', level: "100%" },
    { name: 'Responsive Web Design', level: '100%' },
    { name: 'Problem Solving', level: '100%' },
    { name: 'Self-Motivation', level: '100%' },
  ];

  const education = [
    { degree: 'Bachelor of Technology in Computer Science and Engineering', institution: 'Gaikwad Patil Collage Of Engineering, Nagpur University', year: 'June 2024', SGPA: '7.5' },
    { degree: '12th Grade', institution: 'Bhagwati Girls High School And Junior Collage', year: '2020', Percentage: '53.60' },
    { degree: '10th Grade', institution: 'Adarsh Sanskar Vidyalaya', year: '2018', Percentage: '74.60' },
  ];
  return (
    <section id='about' className='about'>
      <div className='container about-me'>
        <div className='heading-wrapper'>
          <h2>About Me</h2>
        </div>
        <h3>Front End Developer</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <img src={ProfileImage} alt="Profile-Image" className='profile-img' />
          </div>
          <div className='col-lg-8 pt-4 pt-lg-0 content'>
            <h3>Front End Developer & Website Designer</h3>
            <p className='fst-italic'>
              I'm a recent B.Tech graduate in Computer Science and Engineering with hands-on experience in building attractive and user-friendly websites through school projects and internships. I am a quick learner and passionate about enhancing website user experiences. My expertise includes creating excellent projects and excelling in website development. I am ready to join a dynamic team and thrive in a fast-paced environment.            </p>
            <div className='row'>
              <div className='col-lg-6 '>
                <ul className='info-list'>
                  <li style={{ marginBottom: "10px" }}>
                    <i className="fa-solid fa-chevron-right"></i>{' '}
                    <strong>Phone:</strong> <span>+91-8080943319</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>{' '}
                    <strong>City:</strong> <span>Nagpur</span>
                  </li>
                </ul>
              </div>
              <div className='col-lg-6'>
                <ul className='info-list'>
                  <li style={{ marginBottom: "10px" }}>
                    <i className="fa-solid fa-chevron-right"></i>{' '}
                    <strong>Email:</strong> <span>vrushalikhedkar0704@gmail.com</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>{' '}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='education'>
          <div className='section-list'>
            <div className='heading-wrapper'>
              <h2>Education</h2>
            </div>
          </div>
          <div className='row education-content'>
            {education.map((edu, index) => (
              <div key={index} className='col-lg-12 education-item'>
                <h4>{edu.degree}</h4>
                <p><strong>Institution : </strong> {edu.institution}</p>
                <p><strong>Year : </strong> {edu.year}</p>
                {edu.SGPA && <p><strong>SGPA : </strong> {edu.SGPA}</p>}
                {edu.Percentage && <p><strong>Percentage:</strong> {edu.Percentage}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className='skills'>
          <div className='section-list'>
            <div className='heading-wrapper'>
              <h2>Technical Skills</h2>
            </div>
          </div>
          <div className='row skills-content'>
            {skills.map((skill, index) => (
              <div key={index} className='col-lg-6 skill'>
                <h4>{skill.name}</h4>
                <div className='skill-bar'>
                  <div className='skill-level' style={{ width: skill.level }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=' skills'>
          <div className='section-list'>
            <div className='heading-wrapper'>
              <h2>Soft Skills</h2>
            </div>

          </div>
          <div className='row skills-content'>
            {softskills.map((softskills, index) => (
              <div key={index} className='col-lg-6 skill'>
                <h4>{softskills.name}</h4>
                <div className='skill-bar'>
                  <div className='skill-level' style={{ width: softskills.level }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
