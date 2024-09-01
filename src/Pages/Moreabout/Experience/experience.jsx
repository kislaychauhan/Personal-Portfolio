import React from 'react';
import './experience.css';
import exp from '../../../assets/exp.svg';

const internshipExperiences = [
  {
    company: "My Equation",
    location: "Work from Home",
    roles: [
      {
        title: "Design Team Lead",
        from: "Sep 2023",
        to: "jan 2024",
        description: "Leading a team of developers to build scalable web applications using React and Node.js."
      },
      {
        title: "Graphic Design Intern",
        from: "Jun 2023",
        to: "Sep 2023",
        description: "Worked on developing new features and improving performance of existing applications."
      }
    ]
  },
  {
    company: "Code Decoder",
    location: "Work from Home",
    roles: [
      {
        title: "Trainee - Web Devlopment",
        from: "Nov 2022",
        to: "Feb 2023",
        description: "Developed interactive UI components for various client projects using HTML, CSS, and JavaScript."
      }
    ]
  },
];

const volunteerExperiences = [
  {
    company: "Student Affairs Council",
    location: "GLA University",
    roles: [
      {
        title: "President",
        from: "Aug 2023",
        to: "Present",
        description: "Organizing community events and coordinating volunteer efforts."
      },
      {
        title: "Coordinator",
        from: "Sep 2022",
        to: "Aug 2023",
        description: "Organizing community events and coordinating volunteer efforts."
      }
    ]
  },
  {
    company: "National Service Scheme",
    location: "GLA University",
    roles: [
      {
        title: "Advisor",
        from: "Feb 2024",
        to: "Present",
        description: "Planning and executing community events and activities."
      },
      {
        title: "Head: Public Relations",
        from: "May 2023",
        to: "Feb 2024",
        description: "Organizing community events and coordinating volunteer efforts."
      },
      {
        title: "Member: Public Relations",
        from: "Dec 2022",
        to: "May 2023",
        description: "Organizing community events and coordinating volunteer efforts."
      },
      {
        title: "Council Member",
        from: "Apr 2022",
        to: "Jan 2023",
        description: "Organizing community events and coordinating volunteer efforts."
      }
    ]
  },
  {
    company: "Vihiti Theatre Club",
    location: "GLA University",
    roles: [
      {
        title: "Vice-President",
        from: "Aug 2023",
        to: "Present",
        description: "Assisted in daily operations and organized fundraising events."
      },
      {
        title: "Actor & Graphic Designer",
        from: "Sep 2021",
        to: "Aug 2023",
        description: "Organizing community events and coordinating volunteer efforts."
      }
    ]
  }
];

const calculateDuration = (from, to) => {
  const fromDate = new Date(from);
  const toDate = to.toLowerCase() === "present" ? new Date() : new Date(to);
  const diffTime = Math.abs(toDate - fromDate);
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
  const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  return `${diffYears > 0 ? diffYears + " yr " : ""}${diffMonths} mos`;
};

const Experience = () => {
  return (
    <div>
      <div className="hea" data-aos='slide-right'>
      <img className='title-img' src={exp} alt="" />
      <div className="title">Experience</div>
      </div>
    <div className="experience-container" >
      <div className="experience-section" data-aos='fade-right'>
        <div className="experience-heading">Internship/Training Experience</div>
        {internshipExperiences.map((experience, index) => (
          <div className="experience-item" key={index}>
            <div className="company-name">{experience.company}</div>
            <div className="job-location">{experience.location}</div>
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex} className={roleIndex > 0 ? "promotion" : ""}>
                <div className="job-title">{role.title}</div>
                <div className="job-duration">
                  {role.from} - {role.to} ({calculateDuration(role.from, role.to)})
                </div>
                <div className="job-description">{role.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="experience-section" data-aos='fade-left'>
        <div className="experience-heading">Volunteering/Co-Curricular Experience</div>
        {volunteerExperiences.map((experience, index) => (
          <div className="experience-item" key={index} >
            <div className="company-name">{experience.company}</div>
            <div className="job-location">{experience.location}</div>
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex} className={roleIndex > 0 ? "promotion" : ""}>
                <div className="job-title">{role.title}</div>
                <div className="job-duration">
                  {role.from} - {role.to} ({calculateDuration(role.from, role.to)})
                </div>
                <div className="job-description">{role.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Experience;
