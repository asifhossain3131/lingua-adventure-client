import React from 'react';
import DashboardSidebar from './sidebar/DashboardSidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
          <DashboardSidebar></DashboardSidebar>
          <div className='w-full'>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Dashboard;