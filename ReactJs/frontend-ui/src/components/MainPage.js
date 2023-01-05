import React from 'react'
import './MainPage.css'
import { Link } from 'react-router-dom'
import Home from "./Home"
function MainPage(){
    return(
        <div className='hello'>
            <h1 className='head'>Welcome To Website</h1>
            <Link to='/Home'>
                <button class="button-31" role="button">Get Started</button>
            </Link>
        </div>
    )
}
export default MainPage;