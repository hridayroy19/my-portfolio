import Exprence from "../component/Exprence/Exprence";
import Myprojcet from "../component/Myprojcet/Myprojcet";
import Skaill from "../component/Skaill/Skaill";
import { FaArrowAltCircleDown } from "react-icons/fa";

const About = () => {
  return (
  <>

<div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/PtV8QKv/20230409224628-IMG-7255.jpg"
          className="max-w-sm lg:w-full w-[70%] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-3xl font-bold">
            Learn Something Good, Do Something Better
          </h1>
          <p className="py-6">
          Hello 👋, I’m Hridoy 😊, .I love to do most of the things with javaScript.I am Skilled At MERN Stack. I have a strong passion for learning & implementing new web technologies and standards. I’m currently studying (Diploma in computer Engineering 💻 ) , Dinajpur Bangladesh.
          <br />
          i am a MERN stack junior Web developer , I know something about the background --React.js /MongoDB--
          </p>
          <button
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0]  underline text-[17px] font-semibold" : ""
            }
          >
          <a className="flex items-center text-center  gap-2 bg-green-500 p-2 rounded-md" href="/public/ASSERMENT_ SCIC.pdf" download={"resume.pdf"}>  RESUME <FaArrowAltCircleDown/> </a>
          </button>
        </div>

      </div>
    </div>
   <div className=" lg:px-20">
   <Skaill></Skaill>
   <Myprojcet></Myprojcet>
   <Exprence></Exprence>
   </div>
  </>
  );
};

export default About;
