import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Stylesheetes/Login.css'

function Login() {

  // useState:
  const [textIndex, setTextIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [erasing, setErasing] = useState(false);
  const [loginOpacity, setLoginOpacity] = useState(1);

  const [showConstruction, setShowConstruction] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const texts = [
    "Yes, I am good to do my things good and enough,",
    "Yes, you are correct it's from the begon i noticed.",
    "Yes, I accept your agreement do my needful to the way.",
    "Yes, will you be mine in the future?",
    "Yes, I accept you situation and the thing."
  ];

  // const scrollingText = "Keep abreast of hot news topics and current events and then let readers know how your company and clients are affected by these events. Examples can include seasonal events, such as the weather, as well as changes in laws and policies by the municipal, state or federal governments.";
  const scrollingText = "Inga irukura enga aalunga ellam romba nallavanga, ad da da da ivangala patthi sonnale apadeye pullarikkum, ambuttu alaga pesu vainga, ivangala adichchikka aaley illa pathukongalen, Enna da ivan ippade solluran nu paakuringa la, theriyala sollanum thnuchchcii solliten - (Ambuttudha)...";


  // useEffect:
  useEffect(() => {
    // const typeText = () => {
    //   if (letterIndex < texts[textIndex].length) {
    //     setLetterIndex(letterIndex + 1);
    //   } else if(textIndex < texts.length - 1) {
    //     setTimeout( () => {
    //       setLetterIndex(0);
    //       setTextIndex((textIndex + 1) % texts.length);
    //       // setTimeout(typeText, 500);
    //     }, 3000);
    //   } else {
    //     setTimeout(() => {
    //     clearInterval(interval);
    //     }, 3000);
    //   }
    // };

    //Some means(First letter erasing appearing )
    // const typeText = () => {
    //   if (letterIndex < texts[textIndex].length) {
    //     setLetterIndex(letterIndex + 1);
    //   } else {
    //     setTimeout(() => {
    //       setLetterIndex(0);
    //       if (textIndex < texts.length - 1) {
    //         setTextIndex((textIndex + 1) % texts.length);
    //       } else {
    //         setTextIndex(0); // Reset to the first sentence if it's the last one
    //       }
    //     }, 3000); // Adjusted the delay to 3000 milliseconds (3 seconds)
    //   }
    // };

    const typeText = () => {
      if (letterIndex < texts[textIndex].length) {
        setLetterIndex(letterIndex + 1);
      } else if (erasing) {
        setTimeout(() => {
          setLetterIndex(0);
          setErasing(false);
          setTextIndex((textIndex + 1) % texts.length);
        }, 500);
      } else {
        setTimeout(() => {
          setErasing(true);
        }, 3000); // Adjusted the delay to 3000 milliseconds (3 seconds)
      }
    };


    const eraseText = () => {
      if (letterIndex > 0) {
        setLetterIndex(letterIndex - 1);
      } else {
        setLetterIndex(0);
        setTimeout(() => {
          setTextIndex((textIndex + 1) % texts.length);
          // setTimeout(typeText, 500);
        }, 1000);
      }
    };

    const interval = setInterval(typeText, 100);
    return () => clearInterval(interval);
  }, [textIndex, letterIndex, erasing]);


  // Toggle opacity every 2 seconds
  useEffect(() => {
    const opacityInterval = setInterval(() => {
      setLoginOpacity((prevOpacity) => (prevOpacity === 0 ? 1 : 0));
    }, 1500);
    return () => clearInterval(opacityInterval);
  }, []);


  const handlePreviewClick = () => {
    console.log('show construct: ', showConstruction, "showContent :", showContent);
    setShowConstruction(false); // Hide the construction message
    setShowContent(true); // Show the content
    console.log('show construct: ', showConstruction, "showContent :", showContent);

  };

  const handleClick = () => {
    if (showContent) {
      setShowConstruction(true);
      setShowContent(true);
    } else {
      setShowConstruction(true);
      setShowContent(true);
    }
  };



  return (

    <>{!showContent && (
      <div className="construction-message">
        <p>This page is under construction</p>
        <div className=''>
          <button className="button_preview" onClick={() => handlePreviewClick()}>
            Preview
          </button>
          {/* <h4 className="logout_style"><Link to={"/"}>Logout</Link></h4> */}
        </div>

      </div>
    )}
    <div className={`Login_Container ${showConstruction ? 'blur' : ''}`}>
      


      <div className='Header_container'>
        <div>{texts[textIndex].substring(0, letterIndex)}</div>
      </div>
      <div className='Body_Container'>
        <div className={`text-black ${loginOpacity === 0 ? 'hidden' : ''}`}><Link to={"/home"}>Login</Link></div>
        <div className='text-black'><Link to={"/ChatRoom"}>ChatRoom</Link></div>
        <div className='text-black'><Link to={"/ChatApp"}>ChatApp</Link></div>
        <div className='text-black'><Link to={"/dash"}>dash</Link></div>
      </div>
      <div className='Fotter_Container'>
        <p className='Fotter_title'>
          Fotter text
        </p>
        <marquee behavior="scroll" direction="left" scrollamount='12'>{scrollingText}</marquee>
      </div>
    </div>
    </>
  )
}

export default Login