export const profile = {
  name: "Jasper Matthew Dumdumaya",
  photo: "/photo.jpg",
  headline: "Software Engineer Building Across the Stack",
  degree: "MS, Software Engineering",
  occupation: "Retail Store Associate I, Amazon",
  intro: [
    "Hi, I'm Jasper, a software engineering graduate from San Jose State University focusing on full stack and cloud development. I love working across the whole stack, from designing clean, responsive front ends to building reliable services and data layers behind them. I enjoy taking an idea from a rough concept to a working product, and I'm always looking to learn more along the way.",

    "Outside of code, I like to get hands-on with hardware. I build computers and mod game controllers, which keeps me curious about how things work at every level, from the circuit board to the browser.",

    "When I'm away from the keyboard, you'll find me playing games, spending time with my dog, traveling to new places, or playing guitar. These interests keep me creative and balanced, and they show up in the way I approach my work.",

    "I'm currently looking for opportunities where I can contribute to a great team, keep growing as an engineer, and build software that people enjoy using. Take a look at my projects and feel free to get in touch."
  ],
  email: "2jmd0711@gmail.com",
  resume: "/Resume_JasperMatthewDumdumaya.pdf",
  links: [
    { label: "GitHub", href: "https://github.com/jmd0711" },
    { label: "LinkedIn", href: "https://linkedin.com/in/jasper-matthew-dumdumaya" },
  ],
};

export const projects = [
  {
    title: "DermaSight",
    summary:
      "Designed and deployed a full-stack web application that analyzes uploaded skin lesion images using a trained ML model, enabling automated preliminary condition assessment via image-based inference.",
    role: "Team of 4, Capstone",
    stack: ["Next.js", "React", "Flask", "MongoDB", "Amazon S3", "Vercel"],
    //live: "https://example.com",
    code: "https://github.com/jmd0711/DermaSight",
  },
  {
    title: "Email Spam Detection",
    summary:
      "An end-to-end machine-learning pipeline for spam email classification using the CEAS08 and SpamAssassin datasets, achieving a cross-data accuracy of 74%.",
    role: "Solo project",
    stack: ["Python", "Scikit-Learn", "Pandas", "CLI"],
    code: "https://github.com/jmd0711/SpamDetection",
  },
  {
    title: "Airport Management Website",
    summary:
      "A full stack project that allows users to manage flights and passengers in a given airport.",
    role: "Team of 4",
    stack: ["React", "SpringBoot", "AWS EC2", "AWS RDS"],
    code: "",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "C++", "C", "Java", "SQL"],
  Frontend: ["React", "HTML/CSS", "Next.js"],
  Backend: ["Spring Boot", "Flask", "MySQL", "MongoDB", "REST APIs"],
  Cloud: ["AWS EC2", "AWS RDS", "Vercel"],
  Tooling: ["Git", "Docker", "Scikit-Learn", "ChatGPT", "Claude"],
};
