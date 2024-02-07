import Banner from "../component/Banner/Banner";
import Exprence from "../component/Exprence/Exprence";
import Myprojcet from "../component/Myprojcet/Myprojcet";
import Skaill from "../component/Skaill/Skaill";
import Study from "../component/Study/Study";
import Contact from "./Contact";
// import Scontace from "../component/";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Home = () => {
    return (
        <>
                <div>
  <MessengerCustomerChat
    pageId="103365232464560"
    appId="763941302317239"

  />

      </div>
            <Banner></Banner>
           <div className="px-20">
           <Skaill></Skaill>
            <Myprojcet></Myprojcet>
          <div className="mt-10 mb-6">
          <Exprence></Exprence>
          </div>
            <Study></Study>
           </div>
           <Contact/>
           <div>
  <MessengerCustomerChat
    pageId="103365232464560"
    appId="763941302317239"

  />

      </div>
        </>
    );
};

export default Home;