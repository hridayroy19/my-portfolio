import { FaArrowAltCircleDown } from "react-icons/fa";
const Banner = () => {
    return (
        <div  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <div className="hero bg-blue-100 opacity-90 h-[90vh] ">
            <div className="hero-content items-center flex-col lg:gap-28 lg:flex-row-reverse ">
              <img src="https://i.ibb.co/PtV8QKv/20230409224628-IMG-7255.jpg" className="max-w-sm w-[40%]  lg:w-full  rounded-[50%] mt-2 lg:mt-14 " />
              <div className="">
                {/* <h4 className="text-3xl font-bold text-[#111]">---SALE FEVER---</h4> */}
                <h1 className=" lg:py-7 lg:text-5xl text-xl  font-bold text-[#111]"> Hridoy Chandra Roy </h1> 
                    <p className=" font-medium text-[#111]  lg:text-2xl  ">Hello👋, I’m Hridoy 😊, .I love to do most of the things with <br />
                     javaScript.I am Skilled At MERN Stack. I have a strong passion for learning & implementing new web technologies and standards. </p>


                     <button
            className="text-[#4441f0] mb-4  mt-6  text-[17px] font-semibold">
          <a className="flex items-center text-center  gap-2 bg-green-500 p-2 rounded-md" href="/public/ASSERMENT_ SCIC.pdf" download={"resume.pdf"}>  RESUME <FaArrowAltCircleDown/> </a>
          </button>



                    <div className=" lg:mt-5 ">
              <input type="text" placeholder="Searching for..." className="input rounded-3xl input-bordered lg:py-3 w-full max-w-md" />

              <div className="avatar-group text-center items-center ml-12 lg:mt-3 -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-12 bg-neutral text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
              </div>
              </div>
             
            </div>
          </div>
            {/* </div>
        </div> */}


</div>
    );
};

export default Banner;