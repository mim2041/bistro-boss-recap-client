import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';



const MyCart = () => {
    const [cart] = useCart();
    // console.log(cart.price);
    const total = cart.reduce((sum, item) => item.price + sum, 0);


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] mt-10 flex justify-evenly ">
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${total}</h2>
                <button className="btn btn-warning btn-small">Pay</button>
            </div>

            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>#</th>
                    <th>Food</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    cart.map((item, index) => <tr
                        key={item._id}
                    >
                        <td>{index + 1}</td>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </td>
                        <td>{item.name}</td>
                        <td className="text-end">${item.price}</td>
                        <td>
                        <button className="btn btn-ghost bg-orange-500 btn-lg"><FaTrashAlt/></button>
                        </td>
                    </tr>)
                }
                
                
                </tbody>
                
            </table>
</div>
        </div>
    );
};

export default MyCart;