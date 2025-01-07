import React from "react";

import BallCanvas from "./ui/BallCanvas";
import { technologies } from "@/data";

const Tech: React.FC = () => {
    return (
        <section id="tech">
            <h1 className="heading py-20">
                My{" "}
                <span className="text-purple">Skills</span>
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </section>
        
    );
};

export default Tech;
