import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-12 w-full">
      <h3 className="pt-2 text-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 pt-8 lg:pt-16 gap-4">
        <div className="hover:opacity-100 opacity-70 transition-opacity duration-200">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className="bg-[#292929] rounded-lg p-8 "
          >
            <img src="/images/chatgpt_maurosantos.jpg" alt="" className="rounded-lg" />

            <h4 className="font-bold py-2">ChatGPT Clone</h4>

            <div className="flex py-2">
              <img
                src="/images/next-logo.png"
                alt=""
                className="h-5 w-5 mr-1"
              />
              <img
                src="/images/firebase-logo.png"
                alt=""
                className="h-5 w-6 mr-1"
              />
              <img
                src="/images/tailwind-logo.png"
                alt=""
                className="h-5 w-6 mr-1"
              />
              <img src="/images/ts-logo.png" alt="" className="h-5 w-5 mr-1" />
            </div>

            <p className="text-sm px-1 py-2 text-justify">
              Leveraging the OpenAI API this ChatGPT Clone was built with
              TypeScript, Next.js 13, Tailwind CSS for styling and Firebase on
              the backend.
            </p>

            <div className="flex justify-end items-center pt-3">
              <Link
                to={"https://chatgpt-clone-project.vercel.app/"}
                target="_blank"
              >
                <button className="text-xs border px-3 py-4 mr-2 font-semibold bg-[#36,36,36] rounded-lg">
                  View Demo
                </button>
              </Link>
              <Link to={"https://github.com/mauro404/chatgpt-clone-project"} target="_blank">
                <button className="text-xs pr-3 rounded-lg bg-[#3B71CA]">
                  <SocialIcon
                    url="https://github.com/mauro404/chatgpt-clone-project"
                    target="_blank"
                    fgColor="white"
                    bgColor="transparent"
                  />
                  GitHub
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hover:opacity-100 opacity-70 transition-opacity duration-200">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="bg-[#292929] rounded-lg p-8 "
          >
            <img src="/images/balloons_maurosantos.jpg" alt="" className="rounded-lg" />

            <h4 className="font-bold py-2">Boolean Balloons</h4>

            <div className="flex py-2">
              <img
                src="/images/mongo-logo.png"
                alt=""
                className="h-5 w-6 mr-1"
              />
              <img
                src="/images/express-logo.png"
                alt=""
                className="h-5 w-5 mr-1"
              />
              <img
                src="/images/react-logo.png"
                alt=""
                className="h-5 w-6 mr-1"
              />
              <img
                src="/images/node-logo.png"
                alt=""
                className="h-5 w-5 mr-1"
              />
              <img
                src="/images/redux-logo.svg"
                alt=""
                className="h-5 w-6 mr-1"
              />
              <img src="/images/js-logo.png" alt="" className="h-5 w-6 mr-1" />
            </div>

            <p className="text-sm px-1 py-2 text-justify">
              A full e-commerce project created using the MERN stack, Redux for
              state management, Bootstrap for styling and Stripe for payments.
            </p>

            <div className="flex justify-end items-center pt-3">
              <Link
                to={"https://boolean-balloons.netlify.app/"}
                target="_blank"
              >
                <button className="text-xs border px-3 py-4 mr-2 font-semibold bg-[#36,36,36] rounded-lg">
                  View Demo
                </button>
              </Link>
              <Link
                to={"https://github.com/mauro404/boolean-balloons"}
                target="_blank"
              >
                <button className="text-xs pr-3 rounded-lg bg-[#3B71CA]">
                  <SocialIcon
                    url="https://github.com/mauro404/boolean-balloons"
                    target="_blank"
                    fgColor="white"
                    bgColor="transparent"
                  />
                  GitHub
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hover:opacity-100 opacity-70 transition-opacity duration-200">
          <motion.div
            initial={{
              x: +200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className="bg-[#292929] rounded-lg p-8 "
          >
            <img src="/images/space_maurosantos.jpg" alt="" className="rounded-lg" />

            <h4 className="font-bold py-2">Space(bar) Shooter</h4>

            <div className="flex py-2">
              <img
                src="/images/html-logo.png"
                alt=""
                className="h-5 w-6 mr-1"
              />
              <img src="/images/css-logo.png" alt="" className="h-5 w-6 mr-1" />
              <img src="/images/js-logo.png" alt="" className="h-5 w-6 mr-1" />
            </div>

            <p className="text-sm px-1 py-2 text-justify">
              The Space(bar) Shooter recreates the classic arcade game Space
              Invaders by using DOM, OOP, HTML, CSS and vanilla JavaScrpit.
            </p>

            <div className="flex justify-end pt-2">
              <Link to={"https://mauro404.github.io/game/"} target="_blank">
                <button className="text-xs border px-3 py-4 mr-2 font-semibold bg-[#36,36,36] rounded-lg">
                  View Demo
                </button>
              </Link>
              <Link
                to={"https://github.com/mauro404/game"}
                target="_blank"
              >
                <button className="text-xs  pr-3 rounded-lg bg-[#3B71CA]">
                  <SocialIcon
                    url="https://github.com/mauro404/game"
                    target="_blank"
                    fgColor="white"
                    bgColor="transparent"
                  />
                  GitHub
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
