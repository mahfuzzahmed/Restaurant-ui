import SectionTitle from "../../../Components/SectionTitle";
import featuredIMG from "../../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item py-14 bg-fixed ">
            <div className="">
                <SectionTitle
                    heading={"Check it out"}
                    subheading={"FROM OUR MENU"}
                ></SectionTitle>
                <div className="md:flex justify-center items-center gap-10 text-white bg-black bg-opacity-50">
                    <div> <img src={featuredIMG} alt="" /></div>
                    <div>
                        <h3>March 20, 2023</h3>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-b-4 mt-7 text-white"> Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;