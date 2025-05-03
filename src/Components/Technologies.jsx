import { DiJavascript } from "react-icons/di"
import {  FaHtml5, FaJava, FaNodeJs } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa6"
// import { MdJavascript } from "react-icons/md"
import { RiReactjsLine } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import {motion} from "framer-motion"


const iconvariants=(duration) => ({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse",

    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-2 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
         className="flex flex-wrap items-center justify-center gap-4"> 
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}>
           <RiReactjsLine className="text-7xl text-cyan-400"/>
          </motion.div>
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(3)}
           className="p-4">
            <TbBrandNextjs className="text-7xl "/>
          </motion.div>
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(5)}
           className="p-4">
            <SiMysql className="text-7xl text-cyan-500" />
          </motion.div>
          <motion.div 
          initial="initial"
          animate="animate"
          variants={iconvariants(2)}
          className="p-4">
            <DiJavascript className="text-7xl text-yellow-400"/>
          </motion.div>
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(6)}
           className="p-4 ">
            <FaHtml5 className="text-7xl text-orange-700"/>
          </motion.div>
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(4)}
           className="p-4">
            <FaCss3Alt className="text-7xl text-blue-400"/>
          </motion.div>
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2)}
           className="p-4">
            <FaJava className="text-7xl text-red-500"/>
          </motion.div>
          <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(4)}
           className="p-4">
            <FaNodeJs  className="text-7xl text-green-500"/>
          </motion.div>
          
        </motion.div>
      
    </div>
  )
}

export default Technologies
