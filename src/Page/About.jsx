import Myprojcet from "../component/Myprojcet/Myprojcet";
import Skaill from "../component/Skaill/Skaill";

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
          i' m a MERN stack junior Web developer , I know something about the background --React.js /MongoDB--
          </p>
          <button className="btn btn-primary">learn more...</button>
        </div>

      </div>
    </div>
   <div className=" lg:px-20">
   <Skaill></Skaill>
   <Myprojcet></Myprojcet>
   </div>
  </>
  );
};

export default About;
