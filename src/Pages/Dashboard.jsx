import React from 'react'
import TopBar from '../Components/SideBar/TopBar/TopBar'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='relative'>
            <TopBar />
            <div className="flex gap-1 mt-[70px]">
                <SideBar />
                <Outlet />
            </div>
        </div>
    )
}
