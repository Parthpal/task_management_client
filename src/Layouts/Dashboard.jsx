import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import { useContext } from "react";

//import useCart from "../hooks/useCart";
//import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    //const [cart] = useCart();
    const {user,logOut}=useContext(AuthContext);
    const Navigate=useNavigate();
    return (<>
    {user?<>

    
        <div className="flex">
            {/* dashboard side bar */}

            <div className="w-64 min-h-screen bg-[#1A0F91] text-white ">
                <ul className="menu p-4 text-base">
            <div className="flex align-middle py-4 mb-10">
            <a className="normal-case text-xl font-semibold hidden md:block text-white">PriorityPilot</a>
            {
                user ?<>

              <div className='relative group flex'>
              <p className='absolute top-10 ml-5 group-hover:visible invisible text-white'>{user.displayName}</p>
              <div>
                  <img className="w-10 h-10 rounded-full border-2 border-white hidden md:block ml-5"  src={user.photoURL} />
              </div>
              </div>
                
                </>:
                ""
              }
            </div>
                            <li>
                                <NavLink to="/dashboard/ToDoTask">
                                    To-Do Task</NavLink>
                            </li>
                            
                    
                    {/* shared nav links */}
                    <div className="divider divider-info"></div>
                    <li>
                        <NavLink to="/">
                            
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </>:
        Navigate('/login')        }
        </> );
};

export default Dashboard;