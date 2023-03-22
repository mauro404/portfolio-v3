import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center z-20">
      <div className="absolute border border-[#333333] rounded-full h-[150px] md:h-[200px] w-[150px] md:w-[200px] mt-48 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[225px] md:h-[300px] w-[225px] md:w-[300px] mt-48" />
      <div className="absolute border border-[#333333] rounded-full h-[375px] md:h-[500px] w-[375px] md:w-[500px] mt-48" />
      <div className="absolute border border-[#3B71CA] rounded-full h-[488px] md:h-[650px] w-[488px] md:w-[650px] mt-48 animate-pulse opacity-20 " />
      <div className="absolute border border-[#333333] rounded-full h-[600px] md:h-[800px] w-[600px] md:w-[800px] mt-48" />
    </motion.div>
  );
}
