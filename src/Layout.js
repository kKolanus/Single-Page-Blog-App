import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from './context/DataContext';
import useWindowSize from './hooks/useWindowSize';

const Layout = () => {
  const { search, setSearch } = useContext(DataContext);
  const {width} = useWindowSize();
  return (
    <div className="App">
      <Header 
      width={width}
      title="Single Page Blog App"
      />
      <Nav 
      search={search}
      setSearch={setSearch}/>
      <Outlet/>
      <Footer/>
      </div>
  )
}

export default Layout