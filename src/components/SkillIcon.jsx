"use client";

import "devicon/devicon.min.css";

const SkillIcon = ({ name, className }) => {
  // Map skill names to Devicon classes
  const iconMap = {
    "HTML5": "devicon-html5-plain",
    "CSS3": "devicon-css3-plain",
    "JavaScript": "devicon-javascript-plain",
    "TypeScript": "devicon-typescript-plain",
    "React": "devicon-react-original",
    "React Native": "devicon-react-original",
    "Redux": "devicon-redux-original",
    "Next.js": "devicon-nextjs-original",
    "Tailwind CSS": "devicon-tailwindcss-plain",
    "Node.js": "devicon-nodejs-plain",
    "Express": "devicon-express-original",
    "Python": "devicon-python-plain",
    "Java": "devicon-java-plain",
    "GraphQL": "devicon-graphql-plain",
    "MongoDB": "devicon-mongodb-plain",
    "MySQL": "devicon-mysql-plain",
    "Git": "devicon-git-plain",
    "VS Code": "devicon-vscode-plain",
    "Postman": "devicon-postman-plain",
    "Docker": "devicon-docker-plain",
    "AWS": "devicon-amazonwebservices-plain",
    "Firebase": "devicon-firebase-plain",
    "Jest": "devicon-jest-plain",
    "npm": "devicon-npm-original-wordmark",
    "Yarn": "devicon-yarn-plain",
    "Linux": "devicon-linux-plain"
  };

  const iconClass = iconMap[name] || "devicon-javascript-plain"; // fallback icon

  return (
    <i className={`${iconClass} colored ${className}`}></i>
  );
};

export default SkillIcon; 