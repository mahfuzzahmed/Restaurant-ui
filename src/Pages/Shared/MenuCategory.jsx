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
        </div>
    );
};

export default MenuCategory;