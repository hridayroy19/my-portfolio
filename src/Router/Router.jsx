import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLaout/Main";
import Home from "../Page/Home";
import Contact from "../Page/Contact";
import About from "../Page/About";
import Login from "../Page/Login ";
import Register from "../Page/Register";
import Project from "../component/Myprojcet/Myprojcet";



const MyRouter =createBrowserRouter([{
    path:"/",
    element:<Main></Main>,
    children:[{
        path:"/",
        element:<Home></Home>
    },
    {
        path:"/contact",
        element:<Contact></Contact>
    },
    {
        path:"/about",
        element:<About></About>
    },
    {
        path:"/project",
        element:<Project></Project>
    },
{
    path:"/login",
    element:<Login></Login>
},
{
    path:"/register",
    element:<Register></Register>
}

]
}])

export default MyRouter;