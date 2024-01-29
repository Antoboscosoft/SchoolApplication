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
import './App.css';
// import CursorSparkle from '../src/Layouts/CursorSparkle'
import { useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from './Layouts/Login.js'
import Home from './Home.js'
import Game from './Components/Game.js';
import TestPage from './Components/TestPage.js';
import ChatRoom from './Components/ChatRoom.js';
import ChatApp from './Components/ChatApp.js';
import DesignPage from './Components/DesignPage.js';
import MoteLogo from '../src/Layouts/MoteLogo.js'

function App() {

  // let slideIndex = 0;


  // useStates:----

  // const [slideIndex, setSlideIndex] = useState(0);


  // UseEffects:----

  // useEffect(() => {
  //   showSlides(slideIndex);
  // }, [slideIndex]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     plusSlides(1); // Automatically move to the next image
  //   }, 5000); // Change image every 5 seconds

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, []);


  // Functions:----

  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }

  // function plusSlides(n) {
  //   setSlideIndex((prevIndex) => {
  //     let newIndex = prevIndex + n;
  //     if (newIndex >= 4) {
  //       newIndex = 0;
  //     }
  //     if (newIndex < 0) {
  //       newIndex = 3;
  //     }
  //     return newIndex;
  //   });
  // }


  // function showSlides(n) {
  //   const slides = document.getElementsByClassName("mySlides");
  //   if (n >= slides.length) {
  //     slideIndex = 0;
  //   }
  //   if (n < 0) {
  //     slideIndex = slides.length - 1;
  //   }
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slides[slideIndex].style.display = "block";
  // }




  return (
    <HashRouter>
      <Routes>
        <Route path='/' exact index element={<Login />} />
        <Route path='/home' index element={<Home />} />
        <Route path='/*' index element={<Game />} />
        <Route path='Dash' exact element={<TestPage/>}/>
        <Route path='ChatRoom' index element={<ChatRoom />}/>
        <Route path='ChatApp' index element={<ChatApp/>}/>
        <Route path='DesignPage' index element={<DesignPage/>}/>
        <Route path='MoteLogo' index element={<MoteLogo/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
