// import React from "react";

// import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

// const Experience = () => {
//   return (
//     <section id="journey">
//       <div className="py-20 w-full ">
//         <h1 className="heading">
//           My <span className="text-purple">Journey</span>
//         </h1>

//         <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
//           {workExperience.map((card) => (
//             <Button
//               key={card.id}
//               //   random duration will be fun , I think , may be not
//               duration={Math.floor(Math.random() * 10000) + 10000}
//               borderRadius="1.75rem"
//               style={{
//                 //   add these two
//                 //   you can generate the color from here https://cssgradient.io/
//                 background: "rgb(4,7,29)",
//                 backgroundColor:
//                   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//                 // add this border radius to make it more rounded so that the moving border is more realistic
//                 borderRadius: `calc(1.75rem* 0.96)`,
//               }}
//               // remove bg-white dark:bg-slate-900
//               className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//             >
//               <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
//                 <img
//                   src={card.thumbnail}
//                   alt={card.thumbnail}
//                   className="lg:w-32 md:w-20 w-16"
//                 />
//                 <div className="lg:ms-5">
//                   <h1 className="text-start text-xl md:text-2xl font-bold">
//                     {card.title}
//                   </h1>
//                   <p className="text-start text-white-100 mt-3 font-semibold">
//                     {card.desc}
//                   </p>
//                 </div>
//               </div>
//             </Button>
//           ))}
//         </div>
//       </div>
//     </section>
    
//   );
// };

// export default Experience;

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

