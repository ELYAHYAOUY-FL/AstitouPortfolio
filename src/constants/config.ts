type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    education: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "mohamed astitou ",
    fullName: "mohamed astitou",
    email: "johndoe@mail.com",
  },
  hero: {
    name: "mohamed astitou",
    p: ["Software engineer and Master's student in  Security IT and Big Data"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      
      content: `As a passionate software engineer and Master's student in IT Security and Big Data, I am committed to exploring the latest technologies and solving complex problems. My background reflects a blend of analytical thinking, innovative problem-solving, and effective teamwork, underscoring my dedication and rigorous work ethic.`,
      
    },
    education: {
      p: "",
      h2: "Education.",
      items:[
        {
            "date": "2023 - 2025",
            "title": "Master's in IT Security and Big Data",
            "institution": "Faculty of Sciences and Techniques in Tangier"
        },
        {
            "date": "2019 - 2023",
            "title": "Bachelor's  in Mathematical and Computer Sciences",
            "institution": "Multidisciplinary Faculty of Larache"
        },
        {
            "date": "2022",
            "title": "CCNA (Cisco Certified Network Associate)",
            "institution": "Cisco Networking Academy"
        },
        {
            "date": "2018 - 2019",
            "title": "Baccalaureate  Mathematical Sciences",
            "institution": "Moulay Mohammed Ben Abdellah High School, Larache"
        }
    ],
    
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
