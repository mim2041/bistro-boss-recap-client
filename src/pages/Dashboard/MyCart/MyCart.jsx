import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const MyCart = () => {
    const [cart, refetch] = useCart();

    // how does reduce work?
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
              })
            }
          })
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] mt-10 flex justify-evenly ">
                <h2 className="text-3xl">Total Items: {cart.length}</h2>
                <h2 className="text-3xl">Total Price: ${total}</h2>
                <Link to='/dashboard/payment'><button className="btn btn-warning btn-small">Pay</button></Link>
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
                                    <img src={item.image} alt="food" />
                                </div>
                            </div>
                        </td>
                        <td>{item.name}</td>
                        <td className="text-end">${item.price}</td>
                        <td>
                        <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-orange-500 "><FaTrashAlt/></button>
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