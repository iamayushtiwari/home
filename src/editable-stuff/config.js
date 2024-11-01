// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Ayush",
  middleName: "",
  lastName: "Tiwari",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/iamayushtiwari",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/iam_ayushtiwari/",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/iamayushtiwari/",
    },
    {
      image: "fas fa-code",
      url: "https://leetcode.com/iamayushtiwari/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/iamayushtiwari/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/ayushtiwari.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ayushtiwari.png"),
  linkedinImgUrl: '',
  imageSize: 375,
  message:
    "Dynamic and detail-oriented Node.js Developer with over 3 years of experience in backend development, specializing in building scalable and efficient applications. Proficient in Node.js, MongoDB, and Express.js, with a strong focus on application performance optimization, system scalability, and security audits. Proven track record of implementing secure coding practices and conducting thorough vulnerability assessments to enhance application integrity and compliance with industry standards. Adept at collaborating with cross-functional teams to support key business objectives and deliver robust backend solutions. Seeking to leverage expertise in Node.js and microservices architecture to contribute to innovative projects in a challenging environment.",
  resume: "https://drive.google.com/file/d/1mIBMoICi3CMwCZy7mCRhVTK9fwGmHNZH/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project length will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specific projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "iamayushtiwari", //i.e."iamayushtiwari"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "CERTIFICATES",
  message:
    "By featuring my Coding Ninjas certificates in the dedicated section of my portfolio website,I proudly demonstrate my proven proficiency in Node.js, Express.js, and JavaScript. These essential skills empower me to develop exceptional web solutions that are characterized by their superior quality, scalability, and performance. With this expertise, I am well-equipped to deliver outstanding outcomes for clients and projects alike, ensuring optimal satisfaction and success.",
  images: [
    {
      img: require("./backendExcellence.png"),
      label: "",
      paragraph: ""
    },
    {
      img: require("./backendCompletion.png"),
      label: "",
      paragraph: ""
    },
    {
      img: require("./frontendCompletion.png"),
      label: "",
      paragraph: ""
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Backend", value: 90 },
    { name: "Node.js", value: 75 },
    { name: "JavaScript", value: 50 },
    { name: "SERN", value: 50 },
    { name: "MERN", value: 50 },
    { name: "Git", value: 85 },
    { name: "HTML/CSS", value: 55 },
    { name: "Data Structures & Algorithm with Java", value: 85 },

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Node.js Backend opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ayushtiwari81197@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer - Node js Developer',// Here Add Company Name
      companylogo: require('../assets/img/Radiant.jpg'),
      date: 'Jun 2024 – present',
    },
    {
      role: 'Software Engineer - Node js Developer',// Here Add Company Name
      companylogo: require('../assets/img/Staqo-logo.png'),
      date: 'Aug 2023 – Jun 2024',
    },
    {
      role: 'Software Engineer - Node js Developer',// Here Add Company Name
      companylogo: require('../assets/img/Capgemini_logo.png'),
      date: 'Oct 2021 – May 2023',
    },
  ]
}

// Blog SECTION
const blog = {
  show: false,
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, blog };
