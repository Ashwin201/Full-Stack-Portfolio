import dynamic from "next/dynamic";
import AnimatedText from "./AnimatedText";
import FrontEndSkills from "./FrontEndSkills";
import BackEndSkills from "./BackEndSkills";
import ToolsAndTechSkills from "./ToolsAndTechSkills";
const Services = dynamic(() => import("./Services"));

const Skills = () => {
  return (
    <>
      <div className="">
        <AnimatedText text="Skills & Abilities!" />

        <div className="flex flex-col mt-[80px]">
          {/* FrontEnd  Development */}
          <FrontEndSkills />

          {/* Backend  Development */}
          <BackEndSkills />
        </div>

        {/* Other Technologies*/}
        <ToolsAndTechSkills />

        {/* Services  Development */}
        <Services />
      </div>
    </>
  );
};

export default Skills;
