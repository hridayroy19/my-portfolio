 import { FaFacebook } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
           <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
        
      </label> 
 {/* https://www.linkedin.com/in/hridoy-chandra-roy-9313732a4/
 https://github.com/hridayroy19
 */}
      <div className="text-3xl p-3 gap-3 flex"> <span>  <a href="https://www.facebook.com/hridayray.hriday.1/"><FaFacebook /> </a></span> <span>
        <samp> <a href="https://github.com/hridayroy19"><FaGithub/></a></samp></span> <span> <a href="https://www.linkedin.com/in/hridoy-chandra-roy-9313732a4/ ">< FaLinkedin/></a></span> </div>

      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>

</footer> 
    <hr />
<div className="flex text-center lg:flex-row flex-col items-center py-5 justify-between px-20 ">
 <div>
 <p>2022. Learn With Hridoy - All rights reserved.</p>
 </div>
   <div>
{/* hello https://i.ibb.co/SNGQdGq/nexus.png
https://i.ibb.co/g7pH3Ds/bkash-1.png
https://i.ibb.co/3dQY8M7/rocket.png
https://i.ibb.co/g7pH3Ds/bkash-1.png */}
<marquee  direction="left">

<div className="flex  w-[400px]  mt-3 gap-2">
<img src="https://i.ibb.co/g7pH3Ds/bkash-1.png" alt="" className=" w-[25%] h-[30%]" />
<img src="https://i.ibb.co/3dQY8M7/rocket.png" alt="" className=" w-[25%] h-[30%] " />
<img src="https://i.ibb.co/SNGQdGq/nexus.png" alt="" className=" w-[25%] h-[30%] "/>
<img src="https://i.ibb.co/g7pH3Ds/bkash-1.png" alt="" className=" w-[25%] h-[30%] " />
<img src="https://i.ibb.co/3dQY8M7/rocket.png" alt="" className=" w-[25%] h-[30%] "/>
</div>
</marquee>
   </div>
  </div>
        </>
    );
};

export default Footer;