import { BsGithub } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src="https://i.ibb.co/WcDZNtJ/20230409234326-IMG-7354-removebg-removebg-preview.png" alt="" className="md:w-[420px] rounded-[10%] h-[420px] object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Hridoy</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          {/* <button className="btn-primary mt-8">Contact Me</button> */}
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              <div
                className="text-gray-200 flex gap-3  text-3xl hover:text-white cursor-pointer ">
                  <p> <BsGithub className="hover:text-sky-400 " ></BsGithub> </p>
                   <p><SlSocialInstagram className="hover:text-sky-400 " ></SlSocialInstagram> </p>
                   <p><CiFacebook className="hover:text-sky-400 " ></CiFacebook> </p>
                   <p><FaLinkedin className="hover:text-sky-400 " ></FaLinkedin> </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
