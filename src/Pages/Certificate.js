import React from 'react';
import './Certificate.css';
import collagePoject from '../images/clgProject Certificate.jpg';
import FrontEnd_Course from '../images/frontEnd course.jpg';
import FrontEnd_Developer from '../images/frontEnd developer.png';
import Hexolt from '../images/Hexolt.jpg';
import mahindra_pride from '../images/mahindra pide certificate.jpg';
import skillVertex from '../images/Skill vertex.jpg';
import Upskill from '../images/upSkills.jpg';

const certificateData = [
  {
    title: 'Front end develiper',
    image: Hexolt,
    description: 'This is 3 Month of paid Font End Developer Internship Certificate From Hexolt Life Solutions pvt. ltd.',
    linkText: 'Hexolt Life Solutions pvt. ltd'
  },
  {
    title: 'Front end develiper',
    image: FrontEnd_Developer,
    description: 'This is 4 Month of paid Font End Developer Internship Certificate From Hyper tech global technologies Pvt ltd',
    linkText: 'Hyper tech global technologies Pvt ltd'
  },
  {
    title: 'Front end',
    image: FrontEnd_Course,
    description: 'This is Font End Developer Course Certificate From Hyper tech global technologies Pvt ltd',
    linkText: 'Hyper tech global technologies Pvt ltd'
  },
  {
    title: 'Front end develiper',
    image: collagePoject,
    description: 'This is my Final Year Project',

  },
];

const extraCurriculumData = [
  {
    title: 'Nandi Foundation Tech Mahindra',
    image: mahindra_pride,
    description: 'I have completed 7 Days of Employability Skill Programme where I learned skills for cracking interviews for jobs or internships.',
    link: 'https://ssssamritsar.edu.in/employability-skills-by-mahindra-pride-classroom',
    linkText: 'Mahindra Pride Classroom'
  },
  {
    title: 'Campus Coordinator',
    image: skillVertex,
    description: 'This is my 1 month of campus coordinator',
    linkText: 'Skill Vertex'
  },
  {
    title: 'Cambridge',
    image: Upskill,
    description: 'Government approved certificate by the Government of India Ministry of Commerce and Industry.',
    link: 'https://ipindia.gov.in/newsdetail.htm?774',
    linkText: 'NIPAM'
  },
];

const Certificate = () => {
  return (
    <section id='certificate' className='certificate'>
      <div className='container certificate-me'>

        <div className='heading-wrapper'>
          <h2>Certificate</h2>
        </div>

        <div className='row gy-4'>
          {certificateData.map((certificate, index) => (
            <div key={index} className='col-md-6' data-aos='fade-up' data-aos-delay={index * 300}>
              <div className='card-custom rounded-4 bg-base shadow-effect'>
                <div className='card-custom-image rounded-4'>
                  <img className='rounded-4' src={certificate.image} alt={certificate.title} />
                </div>
                <div className='card-custom-content p-4'>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.description}</p>
                  <a href={certificate.link} className='custom-link'>{certificate.linkText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row pb-4' data-aos='fade-up'>
          <div className='col-lg-8'>
            <h2>My Extra Curricular Certificates</h2>
          </div>
        </div>

        <div className='row gy-4'>
          {extraCurriculumData.map((certificate, index) => (
            <div key={index} className='col-md-6' data-aos='fade-up' data-aos-delay={index * 300}>
              <div className='card-custom rounded-4 bg-base shadow-effect'>
                <div className='card-custom-image rounded-4'>
                  <img className='rounded-4' src={certificate.image} alt={certificate.title} />
                </div>
                <div className='card-custom-content p-4'>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.description}</p>
                  <a href={certificate.link} className='custom-link'>{certificate.linkText}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificate;
