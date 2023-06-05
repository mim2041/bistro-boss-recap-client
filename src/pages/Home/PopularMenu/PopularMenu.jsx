import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    })

    return (
        <section>
            <SectionTitle heading={"From our menu"} subHeading={"Popular Items"}></SectionTitle>

            <div>
                {
                    menu.map(item => <MenuItem 
                        key={item._id}
                    item={item}
                    >
                    
                    </MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;