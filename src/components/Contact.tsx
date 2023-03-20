import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cpv08fr",
        "template_gxijixc",
        form.current,
        "tFEi8C4X5oer0aGIL"
      )
      .then(
        () => {
          toast.success("Your e-mail has been sent!", {
            style: {
              border: "1px solid #3B71CA",
              padding: "16px",
              color: "#3B71CA",
            },
            iconTheme: {
              primary: "#3B71CA",
              secondary: "#BDBDBD",
            },
          });
        },
        (error) => {
          toast.error(error.message);
        }
      );
    e.target.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen max-w-7xl mx-auto px-12"
    >
      <h3 className="pt-2 text-center top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col py-8 lg:py-12">
        <h4 className="md:text-base text-sm text-center opacity-80">
          I am currently looking for a full time position, but I am also
          interested in freelancing and collabing with other devs. <br />
          <span className="decoration-[#3B71CA] underline font-bold">
            Lets Talk!
          </span>
        </h4>

        <div className="space-x-4 md:flex mx-auto content-center py-8 opacity-80">
          <div className="flex items-center space-x-1 justify-center">
            <PhoneIcon className="text-[#3B71CA] h-5 w-5 animate-pulse" />
            <p className="text-sm">+49 157 31877836</p>
          </div>
          <div className="flex items-center space-x-1 justify-center">
            <EnvelopeIcon className="text-[#3B71CA] h-6 w-6 animate-pulse" />
            <p className="text-sm">mau.mansano@gmail.com</p>
          </div>
          <div className="flex items-center space-x-1 justify-center">
            <MapPinIcon className="text-[#3B71CA] h-6 w-6 animate-pulse" />
            <p className="text-sm">Berlin, Germany</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 mx-auto w-full md:w-3/5 lg:w-2/5"
        >
          <input
            className="contactInput"
            placeholder="Name"
            name="user_name"
            type="text"
            required
          />

          <input
            className="contactInput"
            placeholder="Email"
            name="user_email"
            type="text"
            required
          />

          <input
            className="contactInput"
            placeholder="Subject"
            name="subject"
            type="text"
            required
          />

          <textarea
            className="contactInput h-36"
            placeholder="Message"
            name="message"
            required
          />

          <button
            type="submit"
            className="opacity-80 bg-[#3B71CA] py-3 md:py-5 px-10 rounded-lg font-normal lg:text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
