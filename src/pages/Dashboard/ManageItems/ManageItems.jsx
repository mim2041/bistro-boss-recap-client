
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    console.log('deleted res', res.data);
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your Item has been deleted.',
                            'success'
                          )
                    }
                })
              
            }
          })
    }
    return (
        <div className="w-full">
            <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"} ></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        menu.map((item, index) => <tr key={item._id}>
                            <td>
                            {index + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="recipe" />
                                </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>
                            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrash></FaTrash></button>
                            </td>
                        </tr>)
                    }
                    
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default ManageItems;