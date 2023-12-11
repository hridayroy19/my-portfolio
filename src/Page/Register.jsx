import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";
import toast from "react-hot-toast";

const Register = () => {

  const { crateUser}= useContext(AuthContext);
  const navigate = useNavigate();
  const handelRegister= e =>{
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    console.log(name,email,password);

    crateUser(email,password)
    .then(res =>{
      const user = res.user;
      console.log(user)
      toast.success('Successfully Registation!')
      navigate("/")
    })
.catch(error => console.log(error));
  }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col py-16 px-7 justify-between gap-9 bg-white lg:flex-row-reverse">
  <div className="text-center lg:text-left">
      <img src="https://i.ibb.co/CvgyLPj/Best-Passws-1408198405.webp" alt="" className="w-[80%] h-[50%] " />
  </div>
  <div className="card shrink-0  w-[44%]  ">
    <form onSubmit={handelRegister}>
      <h1 className="text-2xl font-bold">Interested to join?</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
      </div>
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
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <h1 className="text-center ">
        Don’t have account? <Link className="underline font-bold" to={"/register"}>Sign up</Link>
  </h1>
  </div>
 
</div>
</div>  
      </div>
    );
};

export default Register;