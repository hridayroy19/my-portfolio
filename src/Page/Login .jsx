import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import { FaGoogle } from "react-icons/fa";



const Login  = () => {
  const {logIn,siginGoogle} =useContext(AuthContext);

const navigate = useNavigate();

  const handelLogin = e =>{
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password);
    
      logIn(email, password)
      .then( res => {
        const user = res.user;
        toast.success('Successfully Login!')
        console.log(user)
        navigate("/")
        
      })
    .catch(error => console.log(error));
    return toast.error(" please try again ")
    
    }


  const handelGoogleSignWith=()=>{
    siginGoogle()
    .then(res=>{
    console.log(res.user)
   navigate("/")
   toast.success('Successfully Login!')
    })
  
    .catch(error=>{
      console.error(error)
    
    });
  
  
  }

    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col py-16 px-7 justify-between gap-9 bg-white lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <img src="https://i.ibb.co/CvgyLPj/Best-Passws-1408198405.webp" alt="" className="w-[80%] h-[50%] " />
    </div>
    <div className="card shrink-0  w-[44%]  ">
      <form onSubmit={handelLogin} >
        <h1 className="text-2xl font-bold">Interested to join?</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <h1 className="text-center ">
          Don’t have account? <Link className="underline font-bold" to={"/register"}>Sign up</Link>
    </h1>
    <div  className=" grid grid-cols-2 text-center  rounded-lg w-36 bg-blue-400  gap-3 mx-auto  items-center border">
       <p className="uppercase text-xl font-bold p-2 px-2 "> google </p> <button onClick={handelGoogleSignWith} className=" text-2xl "> <FaGoogle/> </button>
        </div>
    </div>
   
  </div>
</div>  
        </div>
    );
};

export default Login ;