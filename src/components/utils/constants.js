import React from "react";
import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sanjit Kumar",
  titlePre: "Hey, I'm ",
  // title: "Hey, I'm Sanjit",
  titleArray: ["Sanjit", "a UI Developer", "a UI Designer"],
  emojiArray: ["🖐", "👾", "🎨"],
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript | Reactjs | Nodejs."
  ),
  subText: emoji(
    "And I'm looking to leverage my skills to produce seamless & profitable UI 💰."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pfEbIkUhs24ZbmpVkX8_tmLQP-bytqrN/view?usp=sharing",
};

const navbarTitles = {
  skills: "Skills",
  education: "Education",
  work: "Work Experiences",
  projects: "Projects",
  contact: "Contact Me",
};

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Application Developer",
      company: "TELUS International",
      companylogo: require("../../assets/images/telus.jpg"),
      date: "Feb 2020 – Present",
      desc:
        "Design and develop user-friendly website using ReactJS, JavaScript, HTML/CSS and other technologies",
      descBullets: ["ReactJS, node.js, JavaScript"],
    },
    {
      role: "Software Engineer",
      company: "Idemia",
      companylogo: require("../../assets/images/idemia.jpeg"),
      date: "June 2017 – Feb 2020",
      desc:
        "As a Software Engg I was trained on developing websites using different tech stack and managing teams and projects.",
      descBullets: ["C# & .Net framework", "ReactJS, node.js, JavaScript"],
    },
  ],
};

const projectInfo = [
  {
    role: " Application Developer",
    project: emoji(" My TELUS App 🌐"),
    desc:
      " A web app, designed and developed to manage your TV account plans, pay your bills, check your mobile/wifi data and a lot more.",
    tech: ["ReactJS, node.js, JavaScript, Python"],
  },
  {
    role: " Application Developer & Designer",
    project: emoji(" Analyse Tool 📡"),
    desc:
      " A web app which is used to identify the traffic rule violation from the data coming from Radar",
    tech: ["ReactJS, JavaScript"],
  },
];

const socialMediaLinks = {
  github: "https://github.com/sanjit2194/",
  linkedin: "https://www.linkedin.com/in/sanjit21/",
  gmail: "sanjit.kumar211994@gmail.com",
  facebook: "https://www.facebook.com/sanjit.kumar.7146/",
  instagram: "https://www.instagram.com/sanjit.94/",
  // Instagram and Twitter are also supported in the links!
};

const skillsSection = {
  title: "What I do?",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop both client and server software"),
    emoji(
      "⚡ Develop interactive Front End / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal stacks"),
    emoji(
      "⚡ Modify existing software to correct errors, adapt to new hardware and improve performance."
    ),
    emoji(
      "⚡ Collaborate with team members to create applications’ system analysis based on clients’ requirements."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal stacks"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "S'O'A University",
      logo: require("../../assets/images/soa.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 2013 - April 2017",
    },
    {
      schoolName: "Irodov College of Science",
      logo: require("../../assets/images/ics.svg"),
      subHeader: "Sr. Secondary School",
      duration: "Aug 2011 - April 2013",
    },
    {
      schoolName: "D.A.V Public School",
      logo: require("../../assets/images/dav.svg"),
      subHeader: "Secondary School",
      duration: "Aug 2001 - April 2011",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Wanna discuss a project or maybe just want to say hi, my Inbox is open for all.",
  number: " +91-8249179433",
  location: " Noida, India",
  email_address: "kumar.sanjit211994@gmail.com",
};

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

const { Provider, Consumer } = React.createContext();

export {
  greeting,
  workExperiences,
  navbarTitles,
  socialMediaLinks,
  Provider,
  Consumer,
  skillsSection,
  techStack,
  educationInfo,
  contactInfo,
  openSource,
  projectInfo,
};
