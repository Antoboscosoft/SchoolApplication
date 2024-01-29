import React from 'react';
// import SchoolLogo1 from '../Assets/Images/LogoMoto.png';
import '../Assets/Stylesheetes/MoteLogo.css';
import { Link } from 'react-router-dom';

function SchoolLogo() {
  return (
    <div>
      <div className=''>
        <h4 className="logout_style"><Link to={"/"}>Logout</Link></h4>
      </div>
      <div className='SchoolLogo1'>
        Jilu Jakku dhandii mere kerey check dhu dhn di.
      </div>
      {/* <div></div> */}
    </div>
  )
}

export default SchoolLogo