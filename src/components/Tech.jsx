import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div>
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          <div style={{textAlign:"center"}}><span>{technology.name}</span></div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
