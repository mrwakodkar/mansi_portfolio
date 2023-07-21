import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title , experience_title , description}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-lg font-playfair">{experience_title}</p>
        <p className="text-sm mt-7">
          {description}
        </p>
      </div>

      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      
    </motion.div>
  );
};

const descriptions1 = "Implemented robust error handling and logging mechanisms in the server codebase, enabling faster identification and resolution of issues, reducing downtime by 60%, and improving overall system reliability."
const descriptions2 = "Developed an Intelligent Video Surveillance System using Python, YOLO (You Only Look Once) object detection algorithm, OpenCV, and camera integration, enabling real-time traffic incident detection and analysis."
const description3 = "Optimized the vehicle incident detection algorithm for improved performance, reducing processing time by 50% and enabling real-time analysis and tracking of vehicles in high-resolution video feeds."
const description4 = "Worked on the e-learning Android App Lokavidya"
const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">EXPER</span>IENCE
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Agile software developer with 2.5 years of experience in diverse startup
environments.Proven track record of driving company growth through
innovative solutions and impactful contributions
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-amber-500
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            WORK EXPERIENCE
          </div>
          <Project 
          title="Project 1"
          experience_title="Software Engineer (2021 - Present)"
          description={descriptions1}
          />
          <Project 
          title="Project 2"
          experience_title="Executive Software Developer (07/2021 - 09/2021)"
          description={descriptions2} 
          />

          {/* ROW 3 */}
          <Project 
          title="Project 3"
          experience_title="SDE Intern (01/2021 - 07/2021)"
          description={description3}
           />
          <Project 
          title="Project 4"
          experience_title="Android Intern at IIT Bombay (08/2020 - 02/2021) "
          description={description4} 
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            INTERNSHIPS
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
