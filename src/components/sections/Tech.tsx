import React from "react";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";





interface BallCanvasProps {
  icon: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <div className="ball-canvas">
      {icon ? <img src={icon} alt="icon" className="icon" /> : <span>{icon}</span>}
    </div>
  );
};



// technologies data
const technologies = [
  {
    category: "Front-end Development",
    items: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Back-end Development",
    items: [
      { name: "Laravel", icon: "https://w7.pngwing.com/pngs/758/884/png-transparent-circle-laravel-programming-round-icon-popular-services-brands-vol-icon.png" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Mongodb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "Programming Languages and databases",
    items: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    
    ],
  },
  {
    category: "Networking and Virtualisation",
    items: [
      { name: "Packet Tracer", icon: "https://img.icons8.com/ios-filled/50/000000/network.png" },
      { name: "GNS3", icon: "https://cdn.icon-icons.com/icons2/1381/PNG/512/gns3_94911.png" },
      { name: "Wireshark", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Wireshark_icon_new.png/800px-Wireshark_icon_new.png" },
      { name: "VMware ESXi", icon: "https://img.icons8.com/ios-filled/50/000000/virtual-machine.png" },
      { name: "VirtualBox", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg" },
    ],
  },
  {
    category: "DevOps and Tools",
    items: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Github", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
  {
    category: "Operating Systems",
    items: [
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
  },
];

const Tech: React.FC = () => {
  return (
    <div>
      <Header useMotion={true} {...config.sections.skills} />
      {technologies.map((techCategory) => (
        <div key={techCategory.category} className="mb-10">
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {techCategory.items.map((technology) => (
              <div className="h-28 w-28 flex flex-col items-center" key={technology.name}>
                <BallCanvas icon={technology.icon} />
                <p className="text-center mt-2">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


// Define types for SectionWrapper parameters
const SectionWrapper = (Component: React.FC, idName: string) => {
  return function HOC() {
    return (
      <section id={idName}>
        <Component />
      </section>
    );
  };
};

export default SectionWrapper(Tech, "tech");

// Styles (can be included in a CSS-in-JS approach or inline)
const styles = `
  .mb-10 {
    margin-bottom: 2.5rem;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .font-bold {
    font-weight: bold;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }

  .text-center {
    text-align: center;
  }

  .mt-2 {
    margin-top: 0.5rem;
  }

  .ball-canvas {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background: #f0f0f0;
    overflow: hidden;
  }

  .icon {
    max-width: 80%;
    max-height: 80%;
    border-radius: 50%;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);