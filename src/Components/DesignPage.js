import React from 'react';
import '../Assets/Stylesheetes/DesignPage.css'
import { Link } from 'react-router-dom';

function DesignPage() {
    return (
        <div>
            <div className='Header'>
            </div>
            <div className=''>
                <h4 className="logout_style"><Link to={"/"}>Logout</Link></h4>
            </div>
            DesignPage
            <div className='Body ImgBg'></div>
            <div className='Footer'></div>
        </div>
    )
}

export default DesignPage