import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";


const MyCart = () => {
    const [cart] = useCart();
    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <h2 className="text-3xl">Total Items: {cart.length}</h2>
        </div>
    );
};

export default MyCart;