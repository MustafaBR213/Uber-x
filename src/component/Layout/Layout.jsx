import React from 'react'
import Router from '../../routes/Router'
import Sidebar from '../Sidebar/Sidebar'
import TopNav from '../TopNav/TopNav'

const Layout = () => {
  return (
    <>
    <Sidebar /><div className='layout'>
      <div className='main_layout'>
        <TopNav />
        <div className='content'>
          <Router />
        </div>
      </div>
    </div>
    </>
  );
}

export default Layout