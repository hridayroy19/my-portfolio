import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handelLogut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // commit
    return (
        <>
<div className="navbar  opacity-100 px-20 bg-gray-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold " : ""
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold " : ""
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0] underline text-[17px] font-semibold" : ""
            }
          >
            CONTACT
          </NavLink>
      
      </ul>
    </div>
    <h1 className="flex items-center text-xl font-bold text-black gap-2"> <FaUserLarge/> HRIDOY ROY</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-4 px-1">
    <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-500 underline text-[17px] font-semibold " : ""
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-500 underline text-[17px] font-semibold " : ""
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-green-500 underline text-[17px] font-semibold" : ""
            }
          >
            CONTACT
          </NavLink>
          {/* <button
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#4441f0]  underline text-[17px] font-semibold" : ""
            }
          >
          <a className="flex items-center text-center  gap-2 bg-green-500 p-2 rounded-md" href="/public/ASSERMENT_ SCIC.pdf" download={"resume.pdf"}>  RESUME</a>
          </button> */}
    </ul>
  </div>
  <div  className="navbar-end">
  {
    user ?
    <>
    <div className= " flex justify-center items-center gap-2">
      { user &&
        <div className="gap-2 mr-2"><p>{user.displayName}</p>
           
        </div>
     
        }
    </div>

    <button onClick={handelLogut} className="text-white bg-[#4441f0]  text-[17px] font-semibold uppercase p-1 py-2 px-1 text-center w-20 rounded-2xl">LoGOut</button>
    </>
    : <Link to='/login' ><button  className="text-white bg-[#4441f0]  text-[17px] font-semibold uppercase p-1 py-1 px-1 text-center w-20 rounded-2xl">Login</button></Link>
  }
    </div>
</div>
        </>
    );
};

export default Navbar;