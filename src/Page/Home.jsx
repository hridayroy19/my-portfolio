import Banner from "../component/Banner/Banner";
import Myprojcet from "../component/Myprojcet/Myprojcet";
import Skaill from "../component/Skaill/Skaill";
import Study from "../component/Study/Study";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <div className="px-20">
           <Skaill></Skaill>
            <Myprojcet></Myprojcet>
            <Study></Study>
           </div>
        </div>
    );
};

export default Home;