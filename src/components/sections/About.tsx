import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";


import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";



interface IEducationCard {
  date: string;
  title: string;
  institution: string;
}

const EducationCard: React.FC<IEducationCard> = ({ date, title, institution }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[180px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
          <p className="text-center text-[16px] text-white">{institution}</p>
          <p className="text-center text-[14px] text-secondary">{date}</p>
        </div>
      </motion.div>
    </div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

   
      <Header useMotion={true} {...config.sections.education} />

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
  {config.sections.education.items?.map((item, index) => (
    <EducationCard key={index} {...item} />
  ))}
</div>


     
    </>
  );
};

export default SectionWrapper(About, "about");
