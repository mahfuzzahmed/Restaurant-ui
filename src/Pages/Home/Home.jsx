import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularItem from "./PopularItem";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;