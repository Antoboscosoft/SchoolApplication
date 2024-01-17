import React, { useState } from 'react';
import '../Assets/Stylesheetes/TestPage.css'
import { Link } from 'react-router-dom';

function TestPage() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const newX = Math.random() * window.innerWidth;
        const newY = Math.random() * window.innerHeight;
        setPosition({ x: newX, y: newY });
    };

    return (
        <div className='Test_main '>
            <div className=''>
                <h4 className="logout_style"><Link to={"/"}>Logout</Link></h4>
            </div>
            <div className='bg_img'>
                <h1 style={{ border: "2px solid Tomato", color: 'do' }}>Damn World</h1>


                <h1 style={{ border: "2px solid DodgerBlue", background: 'dodgerblue' }}>Black World</h1>

                <h1 style={{ border: "2px solid Violet" }}>Dark World</h1>
                {/* In this button hover to move somewhere */}
                {/* <button className='moving-button' style={{ top: position.y, left: position.x }} onMouseEnter={handleMouseMove}>If you dare, click me..! </button> */}
            </div>
            <div>
                <p style={{ color: 'dodgerblue' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>

        </div>
    )
}

export default TestPage