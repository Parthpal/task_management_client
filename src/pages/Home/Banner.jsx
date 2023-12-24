import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const Banner = () => {
    const {user}=useContext(AuthContext);
    return (
        <div data-aos="fade-right" className="hero min-h-screen bg-[#E6EDFD]">
        <div  className="hero-content flex-col lg:flex-row-reverse">
            <div data-aos="zoom-in-up" className=''>
            <img  src="https://i.ibb.co/8shcx7N/Task-management-1-removebg-preview.png" className="lg:max-w-lg max-h-full rounded-lg mx-auto" />
            </div>
            <div className=''>
                
            <h1 className="text-5xl font-bold">Effortless Task Mastery <br/> <span className='text-[#007CFF]'> With PriorityPilot</span></h1>
            <p className="py-6 text-gray-600 text-base">Streamline your workflow, set priorities, and achieve your goals seamlessly. Experience the next level of efficiency today </p>
            <div className='flex '>
                {
                    user ?
                    <Link to='/dashboard/ToDoTask' className="btn btn-primary w-1/2 font-bold text-2xl bg-[#007CFF]">Explore</Link>
                    : <Link to='/login' className="btn btn-primary w-1/2 font-bold text-2xl bg-[#007CFF]">Explore</Link>
                }
            
    
            </div>
            
            </div>
        </div>
        </div>
    );
};

export default Banner;