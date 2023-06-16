import { Helmet } from "react-helmet-async";
import Cover from "../../../shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../../../shared/MenuCategory/MenuCategory";
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title={"our menu"}></Cover>

            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>

            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>

            {/* desert menu items */}
            <MenuCategory items={dessert}
                title="dessert"
                img={desertImg}
            ></MenuCategory>

            {/* soup menu items */}
            <MenuCategory items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>

            {/* salad menu items */}
            <MenuCategory items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;