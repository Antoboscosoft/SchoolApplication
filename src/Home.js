import React from 'react'
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import LogoMoto from '../src/Assets/Images/LogoMoto.png'
import img1 from '../src/Assets/Images/pexabay05.jpg'
import img2 from '../src/Assets/Images/Groot.jpg'
import img3 from '../src/Assets/Images/pexabay03.jpg'
import img4 from '../src/Assets/Images/pexabay04.jpg'
import img5 from '../src/Assets/Images/pexabay06.jpg'
import img6 from '../src/Assets/Images/pexabay07.jpg'
import img7 from '../src/Assets/Images/pexabay08.jpg'
import img8 from '../src/Assets/Images/pexabay09.jpg'
import img9 from '../src/Assets/Images/pexabay10.jpg'
import img10 from '../src/Assets/Images/pexabay11.jpg'
// import './App.css';
import './Assets/Stylesheetes/Home.css'
import { Link } from 'react-router-dom';

export default function Home() {



  // useStates:----

  const [slideIndex, setSlideIndex] = useState(0);


  // UseEffects:----

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      plusSlides(1); // Automatically move to the next image
    }, 50000); // Change image every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);


  // Functions:----

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  function plusSlides(n) {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      if (newIndex >= 4) {
        newIndex = 0;
      }
      if (newIndex < 0) {
        newIndex = 3;
      }
      return newIndex;
    });
  }


  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }






  return (
    // <div>home page 10</div>
    <div className="App">
      <header className="App-header">
        <p className='Main_logo'></p>
        <p> High-School &nbsp; &nbsp; </p>
        <a
          className="App-link"
          href="https://schools.org.in/krishanagiri/33311202802/st-antonys-hr-sec-elathagiri.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          My School
          {/* St.Antony's Higher Secondary School */}
        </a>
        <h4 className="logout_style"><Link to={"/"}>Logout</Link></h4>
      <h4 className=''> Game</h4>
      </header>
      {/* <div className='d-flex justify-content-center'>
      <h4 className=''><Link to={"/"}>Logout</Link></h4>
      <h4 className=''> Game</h4>
      </div> */}
      <div>
        <div className="slideshow-container">
          <p className='Img_slide'>
            <img src={img1} className={`mySlides ${slideIndex === 0 ? 'active' : ''}`} alt="Image 1" />
            <img src={img2} className={`mySlides ${slideIndex === 1 ? 'active' : ''}`} alt="Image 2" />
            <img src={img3} className={`mySlides ${slideIndex === 2 ? 'active' : ''}`} alt="Image 3" />
            <img src={img4} className={`mySlides ${slideIndex === 3 ? 'active' : ''}`} alt="Image 4" />
            <img src={img5} className={`mySlides ${slideIndex === 4 ? 'active' : ''}`} alt="Image 5" />
            <img src={img6} className={`mySlides ${slideIndex === 5 ? 'active' : ''}`} alt="Image 6" />
            <img src={img7} className={`mySlides ${slideIndex === 6 ? 'active' : ''}`} alt="Image 7" />
            <img src={img8} className={`mySlides ${slideIndex === 7 ? 'active' : ''}`} alt="Image 8" />
            <img src={img9} className={`mySlides ${slideIndex === 8 ? 'active' : ''}`} alt="Image 9" />
            <img src={img10} className={`mySlides ${slideIndex === 9 ? 'active' : ''}`} alt="Image 10" />

            <a className='prev' onClick={() => { plusSlides(-1) }}>&#10094;</a>
            <a className='next' onClick={() => { plusSlides(1) }}>&#10095;</a>
          </p>
        </div>

        {/* <CursorSparkle /> */}
      </div>
    </div>
  )
}
