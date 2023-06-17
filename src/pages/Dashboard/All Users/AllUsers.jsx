import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const {data: users=[], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1000
                      })
                }
            })
    }

    const handleDelete = (user) => {

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <div>
                <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    {
                                    user.role === 'admin' ? 'admin' : 
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 "><FaUserShield/></button>
                                    }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 "><FaTrashAlt/></button>
                                    </td>
                                </tr>)
                            }
                        {/* row 1 */}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;