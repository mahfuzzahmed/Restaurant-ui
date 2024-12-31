import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularItem from "./PopularItem";
import Testimonials from "./Testimonials";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;