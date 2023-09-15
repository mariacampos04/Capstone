import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import './App.css';
import { Login } from './components/Login';
import Sorting from './components/Sorting';
import DropdownMenu from './components/DropDownMenu';
import Filter from './components/Filter';

export default function App() {
  return (
    <>
      <header>Summer Sale Going On Now! Free shipping for orders over $50!</header>

      <h1 id="windsor">Windsor</h1>

      <div className="container">

        <img
          className="girl"
          src="https://images.unsplash.com/photo-1619719773508-b39524e5e410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80"
          alt="girl shopping"
        />
        <div className="navbar">
          {/* Use the DropdownMenu component */}
          <DropdownMenu />
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/filter" element={<Filter />} /> 

          </Routes>
        </div>
      </div>


    </>
  );
}
