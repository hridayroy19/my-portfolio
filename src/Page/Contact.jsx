import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            <div
              className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
            >
              <div className=" text-4xl  items-center justify-center text-white rounded-full">
                <p className="flex gap-4 items-center "> <MdOutlineEmail className=" text-white bg-cyan-600 p-1 rounded-full"></MdOutlineEmail> <span className="text-[22px] ">hrhridoyroy503@gmail.com</span> </p>

                <p className="flex gap-4 mb-2 items-center "> <MdOutlineAddIcCall className=" mt-2 text-white p-1 bg-cyan-600 rounded-full"></MdOutlineAddIcCall> <span className="text-[22px] "> +8801738211936 </span> </p>

                <p className="flex gap-4 items-center "> <CiLocationOn className=" text-white bg-cyan-600 p-1 rounded-full"></CiLocationOn> <span className="text-[22px] "> Dinajpur , Bangladesh </span> </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
