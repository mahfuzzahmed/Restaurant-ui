import { Link } from "react-router-dom";
import Cover from "../Home/menu/Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({ img, title, items }) => {
    return (
        <div className="py-8">
            {title && <Cover title={title} img={img}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-14">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}>

                    </MenuItem>)
                }
            </div>
                <Link to={`/order/${title}`}><button className="btn btn-outline border-b-4 mt-7 text-white"> Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;