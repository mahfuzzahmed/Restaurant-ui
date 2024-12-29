import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularItem from "./PopularItem";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItem></PopularItem>
            <Featured></Featured>
        </div>
    );
};

export default Home;