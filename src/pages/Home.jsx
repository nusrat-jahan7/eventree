import Banner from "../components/Banner";
import Clients from "../components/Clients";
import Faq from "../components/Faq";
import Services from "./Services";

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <Banner />
      <Services />
      <Clients/>
      <Faq />
    </div>
  );
};

export default Home;
