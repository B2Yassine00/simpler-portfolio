import { SpecSectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { cv, github, linkedin, profile } from "../assets";

const Home = () => {
    return (
        <section className="justify-center relative w-full h-screen mx-auto">
            <motion.div variants={fadeIn("", "", 0.1, 1)}>
                <div className={`absolute inset-0 top-[120px] lg:flex justify-center gap-20 max-w-7xl mx-auto ${styles.paddingX} items-center`}>
                    <div className="flex justify-center">    
                        <img src={profile} alt="profile picture" className="rounded-[50%] w-[275px] lg:w-[400px] lg:h-[400px]" />
                    </div>
                    <div className="text-center mt-8 lg:mt-0">
                        <p className="text-[#555555] font-semibold animate-bounce">Hello, I'm</p>
                        <h1 className="text-5xl font-semibold p-3">Banouq Yassine</h1>
                        <h3 className="text-[1.75rem] font-semibold text-[#555555] mb-4">Software & DevOps Engineer</h3>
                        <div className="flex justify-center gap-4">    
                            <a href={cv} download={cv} className="p-4 w-32 border-2 text-[13.3333px] border-black rounded-[2rem] font-semibold transition-all ease-in-out duration-300 hover:bg-black hover:text-white hover:">
                                Download CV    
                            </a>
                            <a href="#contact" className="bg-black hover:ring-8 transition-all ease-in-out duration-300 ring-gray-300 text-white text-[13.3333px] p-4 w-32 border-2 border-black rounded-[2rem] font-semibold">Contact Info</a>
                        </div>
                        <div className="flex justify-center gap-4 mt-4">
                            <a href="https://linkedin.com/">
                                <img src={linkedin} alt="linkedin" className="h-8" />
                            </a>
                            <a href="https://github.com/">
                                <img src={github} alt="linkedin" className="h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default SpecSectionWrapper(Home,"home");