import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const Main = () => {
    return (
        <>
            <Header></Header>
            <div className='min-h-[calc(100vh-392px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;