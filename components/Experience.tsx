// import React from "react";

// import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";


import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { workExperience } from "@/data";

// Define the types for your work experience data
interface Experience {
  id: number;
  title: string;
  company_name: string;
  date: string;
  desc: string;
  className: string;
  thumbnail: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      contentStyle={{
        background: "#12003D",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: "#4e4e4e" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.thumbnail}
            alt={experience.title}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-white text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">
          {experience.desc}
        </li>
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="journey">
      <div className="py-20 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h1 className="heading">
              My <span className="text-purple">Journey</span>
          </h1>
        </motion.div>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline animate={false}>
            {workExperience.map((card) => (
              <ExperienceCard
                key={card.id}
                experience={{
                  id: card.id,
                  title: card.title,
                  company_name: card.company_name,
                  date: card.date || "Date not provided",
                  thumbnail: card.thumbnail,
                  desc: card.desc,
                  className: card.className,  // Added className
                }}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;

