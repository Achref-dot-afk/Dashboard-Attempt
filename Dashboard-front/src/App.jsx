import React from 'react';
import Topbar from './pages/global/Topbar'
import {theme} from './theme'
import SidebarNav from  './pages/global/SidebarNav' 
import HomeHeader from './components/HomeHeader';
import { useSelector } from 'react-redux';

function App() {
  const darkTheme = theme('dark');
  const lightTheme = theme('light');
  const isDark = useSelector(state => state.isDark);
  
  return (
    <div className='app'>
      <main className='content' style={{ backgroundColor: isDark.isDark ? darkTheme.palette.primary.main : lightTheme.palette.primary.main }}>
        <SidebarNav/>
        <div className='w-full'>
          <Topbar/>
          <HomeHeader/>
        </div>
      </main>
    </div>
  );
}

export default App;
