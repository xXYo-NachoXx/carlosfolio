const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Carlos Gómez | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Carlos Gómez ",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hi, Pura Vida!",
  sub: "Carlos Gómez",
  logo_name: "Nacho",
  resumeLink:
    "https://drive.google.com/file/d/11NSk1hXkxcDyiFwwglxWG7eSUyJzAG4k/view?usp=sharing",
};

//what i do?
const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS, Angular & NodeJS",
        "⚡ Creating application backend in Node, Express & Asp.Net Core, applying different Software Engineering concepts",
        "⚡ Having experience developing end to end infrastruture for Web Apps",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Webpack",
          fontAwesomeClassname: "simple-icons:webpack",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#00F",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Site Realibility",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable hosting systems for applications",
        "⚡ Implementing Log management for any app on the Web,  with ELK stack",
        "⚡ Provide solutions on the cloud for hosting, rounting and cloud storage",
        "⚡ Server management ",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos-azure",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Full Stack - SWE",
        subtitle: "Intel",
        date: "January 2021 - present",
        content: [
          "Developing my role as a Full Stack Developer, for different applications in the team",
        ],
      },
      {
        title: "Site Realibility Intern",
        subtitle: "Intel",
        date: "July 2020 - December 2020",
        content: [
          "Developed my role as a Site Reliability Engineer (Intern),   creating a bridge between development and operations by applying a software engineering mindset.",
        ],
      },
      {
        title: "SWE Fullstack Intern",
        subtitle: "UNED (Costa Rican University)",
        date: "February 2020 - June 2020",
        content: [
          "Developed a system to manage head count of different resources at tech organization",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor Computer Science",
          subtitle: "Instituto Tecnológico de Costa Rica",
          date: "2017 - 2020",
          content: ["Overall: 92.5/100 graduated with honors"],
        },
        {
          title: "Master Computer Science",
          subtitle: "Universidad de Costa Rica",
          date: "2022",
          content: ["Soon"],
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description: "Feel free to message me, I will reply ASAP.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Heredia, Costa Rica",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+506 86615654",
  },
};

export {
  settings,
  seo,
  greeting,
  skills,
  projectsHeader,
  contactPageData,
  resumeleft,
  resumeright,
};
