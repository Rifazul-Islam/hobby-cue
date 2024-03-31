import AddList from "../../components/AddList/AddList";
import Banner from "../../components/Banner/Banner";
import Community from "../../components/Community/Community";
import Footer from "../../components/Footer/Footer";
import MultipleService from "../../components/MultipleService/MultipleService";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MultipleService></MultipleService>
      <AddList></AddList>
      <Testimonials></Testimonials>
      <Community></Community>
      <Footer></Footer>
    </div>
  );
};

export default Home;
