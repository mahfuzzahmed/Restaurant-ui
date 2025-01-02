import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import menuCover from '../../../assets/menu/banner3.jpg'
import desertIMG from '../../../assets/menu/dessert-bg.jpeg'
import pizzaIMG from '../../../assets/menu/pizza-bg.jpg'
import saladIMG from '../../../assets/menu/salad-bg.jpg'
import soupIMG from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../../Shared/MenuCategory";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
    const [menu] =useMenu()
    const offered = menu.filter(item=> item.category === "offered")
    const dessert = menu.filter(item=> item.category === "dessert")
    const pizza = menu.filter(item=> item.category === "pizza")
    const salad = menu.filter(item=> item.category === "salad")
    const soup = menu.filter(item=> item.category === "soup")
    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={menuCover} title={"Our Menu"}></Cover>
            <SectionTitle heading={"Don't miss"} subheading={"Todays Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* Desert */}
            <MenuCategory img={desertIMG} title={"desserts"} items={dessert}></MenuCategory>
            {/* pizza */}
            <MenuCategory img={pizzaIMG} title={"pizza"} items={pizza}></MenuCategory>
            {/* salad */}
            <MenuCategory img={saladIMG} title={"salad"} items={salad}></MenuCategory>
            {/* soup */}
            <MenuCategory img={soupIMG} title={"soup"} items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;