import React from 'react';
import Navbar from "../NavBar/NavBar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
    return (
        <div className='holder'>
            <header className='header'>
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-text fs-18 fw-3'>To learn to read is to light a fire; every syllable that is spelled out is a spark. —Victor Hug</h2><br />
                    <p className='header-title text-capitalize'>Discover a whole other world</p>
                    <SearchForm />
                </div>
            </header>
        </div>
    )
}
export default Header