import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';

const Root = () => {
    return (<>
    <Outlet></Outlet>
    <Footer/>
</>);
};

export default Root;