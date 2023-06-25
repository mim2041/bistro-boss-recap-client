import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUser, FaUsers } from 'react-icons/fa';
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic isAdmin based on Data
    // const isAdmin = true;

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-4">Open drawer</label>
                <Outlet></Outlet>
            
            </div> 
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 h-full bg-yellow-700 text-base-content">
                {/* Sidebar content here */}
                
                {
                    isAdmin ? <>
                        <li><NavLink to='/dashboard/adminhome'><FaHome/> Admin Home</NavLink></li>
                        <li><NavLink to='/dashboard/addItem'><FaUtensils/> Add an Items</NavLink></li>
                        <li><NavLink to='/dashboard/manageitems'><FaWallet/> Manage Items</NavLink></li>
                        
                        <li><NavLink to='/dashboard/bookings'><FaBook/> Manage Bookings</NavLink></li>
                        
                        <li><NavLink to='/dashboard/allusers'><FaUsers/> All Users</NavLink></li>
                        
                    </> : 
                    <>
                    <li><NavLink to='/dashboard/userhome'><FaHome/> Users Home</NavLink></li>
                <li><NavLink to='/dashboard/reservations'><FaCalendarAlt/> Reservations</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaWallet/> Payment History</NavLink></li>
                <li>
                    <NavLink to='/dashboard/mycart'>
                <FaShoppingCart></FaShoppingCart> My Cart <span className="badge badge-secondary">+{cart?.length || 0}</span></NavLink>
                </li>
                    </>
                }
                

                <div className="divider"></div>

                <li><NavLink to='/'><FaHome/>Home</NavLink></li>
                <li><NavLink to='/menu'><FaHome/> Our Menu</NavLink></li>
                <li><NavLink to='/order/salad'><FaHome/> Order Food</NavLink></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;