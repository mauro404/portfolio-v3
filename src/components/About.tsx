import { motion } from "framer-motion";

export default function About() {
  return ( 
    <div className="min-h-screen md:text-left max-w-5xl px-12 mx-auto">
      <h3 className="pt-0 md:pt-2 text-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="grid md:grid-cols-2 py-20 gap-8 opacity-80">
        <motion.img
          initial={{
            x: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          // viewport={{ once: true }}
          src="/images/cvpic.jpeg"
          className="flex-shrink-0 object-cover md:rounded-lg md:w-[375px] md:h-[450px] mx-auto h-32 w-32 rounded-full "
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="grid content-center"
        >
          <p className="lg:text-base text-sm pb-2">
            I am enthusiastic about quiz, puzzle and board games - I usually say
            that chess is my first language because I started playing before I
            was alphabetized in my mother tongue - but I never thought that
            something like that could be more than a hobby... until I started
            coding.
          </p>
          <p className="lg:text-base text-sm pb-2">
            With coding I get the same satisfaction that I experience with those
            activities: the process of constantly learning something new, to
            challenge yourself and the rewarding feeling that only something
            demanding can give.
          </p>
          <p className="lg:text-base text-sm pb-6">
            Even though my journey in this field has just begun, I can assure
            that I'm hooked and I’m here for the long run.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
