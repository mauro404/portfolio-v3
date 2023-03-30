import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./Circles";

export default function Home() {
  const [text, count] = useTypewriter({
    words: [
      "Hello World!",
      "My name is Mauro.",
      "<FullStackDeveloper />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-3/4 md:h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden md:overflow-visible pt-8 lg:pt-24 w-full">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="/images/bnw-headshot.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-2xl md:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#3B71CA" />
        </h1>

      </div>
    </div>
  );
}
