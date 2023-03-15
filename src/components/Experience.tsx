import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  CodeBracketIcon,
  BuildingOffice2Icon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen max-w-6xl mx-auto px-12 "
    >
      <h3 className="pt-0 md:pt-8 text-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <p className="md:text-base text-sm pt-14 opacity-80">
        I’m a career changer with a background in Law and Public Administration.
        I have professional experience on different roles and interacting
        directly with a wide range of audiences such as entrepreneurs, judges
        and legal professionals, representatives of social organizations and
        public sectors, customer service, amongst other.
        <br />
        If you want to know more about my professional experience, I invite you
        to take a look at my {""}
        <span className="decoration-[#3B71CA] underline font-bold">
          <Link
            to={"https://www.linkedin.com/in/mauromsantos/"}
            target="_blank"
          >
            LinkedIn profile
          </Link>
        </span>
        .
      </p>

      <div className=" mx-auto grid md:grid-cols-2 pt-8 gap-10 opacity-80">
        <div>
          <div className="flex items-center space-x-1">
            <CodeBracketIcon className="text-[#478cfa] h-6 w-6" />
            <h2 className="font-bold py-2 text-xl text-[#478cfa]">Coding</h2>
          </div>
          <p className="text-sm pb-2">
            A MERN full stack web developer committed to writing clean, clear
            and maintainable code. Besides the MERN stack (MongoDB, Express,
            React and Node.Js), my main stack includes Git and GitHub for
            version control, Bootstrap and Figma for styling and, as one might
            expect, the power trio HTML 5, CSS and JavaScript (ES6). Recently I
            have worked Next.js, Redux, Firebase and Tailwind CSS.
          </p>
          <h3 className="font-semibold py-0 text-base text-[#3B71CA]">
            Full-Stack Web Development
          </h3>
          <p className="font-thin pb-1 text-sm">Ironhack | RMT</p>
          <p className="text-sm">9-week intensive web development bootcamp:</p>
          <ul className="text-sm list-disc ml-5 pb-4">
            <li className="">
              Front-end technologies learned: HTML | CSS | JavaScript(ES6) |
              React
            </li>
            <li className="">
              Back-end technologies learned: ExpressJs | NodeJs | MongoDb |
              Axios
            </li>
          </ul>

          <div className="flex items-center space-x-1">
            <SparklesIcon className="text-[#478cfa] h-6 w-6" />
            <h2 className="font-bold py-2 text-xl text-[#3d87ff]">Skills</h2>
          </div>
          <h3 className="font-semibold pb-1 text-base text-[#3B71CA]">
            Languages:{" "}
            <span className="font-thin text-sm text-white">
              {" "}
              English (fluent); Spanish (fluent); Portuguese (native); French
              (intermediate).
            </span>
          </h3>
          <h3 className="font-semibold py-0 text-base text-[#3B71CA]">
            Softskills:{" "}
            <span className="font-thin text-sm text-white">
              {" "}
              Eloquent communicator; well-organized; flexible; solution
              oriented.
            </span>
          </h3>
        </div>

        <div>
          <div className="flex items-center space-x-1">
            <BuildingOffice2Icon className="text-[#478cfa] h-6 w-6" />
            <h2 className="font-bold py-2 text-xl text-[#478cfa]">
              Relevant Work Experience
            </h2>
          </div>

          <h3 className="font-bold py-0 text-base text-[#3B71CA]">
            Local Innovation Agent
          </h3>
          <p className="font-thin py-0 text-sm text-white pb-1">
            Brazilian Micro and Small Business Support Service (SEBRAE) &
            National Council for Scientific and Technological Development (CNPQ)
          </p>
          <ul className="text-sm list-disc ml-5 pb-2">
            <li className="">
              Consultancy and advisory services for over 50 micro and small
              companies to improve competitiveness, through project management
              with project planning, prioritization and support (SEBRAE);
            </li>
            <li className="">
              Reports and case studies to illustrate the impacts that an
              innovative approach on micro and small business can sustain,
              moreover creating a database with literature consistent with the
              local reality (CNPQ).
            </li>
          </ul>

          <div className="flex items-center space-x-1">
            <AcademicCapIcon className="text-[#478cfa] h-6 w-6" />
            <h2 className="font-bold py-2 text-xl text-[#478cfa]">Education</h2>
          </div>

          <h3 className="font-semibold py-0 text-base text-[#3B71CA]">
            MSc in Economics and Public Policy
          </h3>
          <p className="font-thin pb-2 text-sm">
            ISEG - Lisbon School of Economics and Management, University of
            Lisbon
          </p>

          <h3 className="font-semibold py-0 text-base text-[#3B71CA]">
            Bachelor of Laws
          </h3>
          <p className="font-thin pb-2 text-sm">
            Mackenzie Presbyterian University
          </p>

          <h3 className="font-semibold py-0 text-base text-[#3B71CA]">
            Bachelor in Public Policy Management
          </h3>
          <p className="font-thin pb-8 text-sm">University of Sao Paulo</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
