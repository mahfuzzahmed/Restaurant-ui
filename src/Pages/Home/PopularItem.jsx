import { useEffect, useState } from "react";
import MenuItem from "../Shared/MenuItem";
import SectionTitle from "../../Components/SectionTitle";

const PopularItem = () => {
    const [menu , setMenu] = useState([])
    useEffect(()=>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === "popular")
            setMenu(popularItem)
        })
    },[])
    return (
        <div>
            <SectionTitle
            heading={"From Our Menu"}
            subheading={"Popular Item"}>

            </SectionTitle>
           <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem 
                    key={item._id}
                    item={item}>
    
                    </MenuItem> )
                }
           </div>
        </div>
    );
};

export default PopularItem;