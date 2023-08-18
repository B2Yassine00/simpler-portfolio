import { Tilt } from "react-tilt";
import { SpecSectionWrapper } from "../hoc";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const About = () => {
    return (
        <section className="h-[90vh] pt-[10vh] md:mx-40">
            <motion.div variants={fadeIn("", "", 0.1, 1)} className="flex flex-col items-center justify-center">
                <p className="text-[#555555] text-[16px] pt-7 md:pt-0 text-center">Get To Know Me</p>
                <h1 className="text-5xl text-center font-bold">About Me</h1>
            </motion.div>
            <div className="lg:flex justify-center sm:justify-normal">
                <motion.div className="md:h-[60vh] w-full lg:w-[50vw] flex justify-center items-center">
                    <ComputersCanvas />
                </motion.div>
                <div className="w-full flex flex-col justify-center">
                    <div className="flex-wrap justify-center flex my-8 gap-8">
                        <Tilt options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                            }}>
                                <div className="p-6 flex-1 flex-col flex justify-center bg-white rounded-[2rem] text-center text-   [#555555] border-[0.1rem] border-black cursor-pointer">
                                <img src="/src/assets/experience.png" alt="experience" className="h-8 object-contain" />
                                <h3 className="text-[18.72px] font-bold text-black">Experience</h3>
                                <p>4 months internship <br /> Software Engineer</p>
                            </div>
                        </Tilt>
                        <Tilt options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                            }}>   
                            <div className="p-6 flex-1 flex-col flex justify-center bg-white rounded-[2rem] text-center text-[#555555] border-[0.1rem] border-black cursor-pointer">
                                <img src="/src/assets/education.png" alt="experience" className="h-8 object-contain" />
                                <h3 className="text-[18.72px] font-bold text-black">Education</h3>
                                <p>4 months internship <br /> Software Engineer</p>
                            </div>
                        </Tilt>
                    </div>
                    <div className='w-full flex justify-center'>
                        <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='mt-8 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'
                        >
                        These projects demonstrate my skills with real-world examples. Each is briefly described with code repositories and live demos, showcasing problem-solving, tech versatility, and project management.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecSectionWrapper(About,"about");