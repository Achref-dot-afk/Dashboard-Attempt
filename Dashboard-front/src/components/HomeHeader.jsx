import React from 'react'
import {theme} from '../theme'
import { MdDownload } from "react-icons/md";
import { useSelector } from 'react-redux';
const HomeHeader = () => {
  const lightTheme = theme('light');
  const isDark = useSelector(state => state.isDark);
  return (
    <div className='flex justify-between items-center p-4'>
        <div className='text-center text-white'>
            <h2 className="font-bold" style={{color: lightTheme.palette.secondary.main,fontSize: lightTheme.typography.h2.fontSize}} >DASHBOARD</h2>
            <h4 style={{color : isDark.isDark ? '' : 'black'}}>Welcome to your dashboard</h4>
        </div>
        <div className='flex items-center gap-3 text-white cursor-pointer rounded bg-sky-700 py-2 px-4'>
            <MdDownload/>
            <a href="#">Download Reports</a>
        </div>
    </div>
  )
}

export default HomeHeader