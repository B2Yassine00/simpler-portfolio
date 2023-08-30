import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SpecSectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#ffffff",
        border:"solid 0.1rem black",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-black text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-black text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-black text-[12px] md:text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="sm:mx-40 pt-[80vh] md:pt-[50vh] lg:pt-[10vh]">
      <motion.div variants={textVariant()} className="flex flex-col items-center justify-center">
                <p className="text-[#555555] text-center text-[16px]">Explore My Academic</p>
                <h1 className="text-5xl text-center font-bold">Career Path</h1>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline lineColor="black">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SpecSectionWrapper(Experience, "experiences");