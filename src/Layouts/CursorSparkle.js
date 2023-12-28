import React, { useEffect } from 'react'

function CursorSparkle() {

    // useEffect(() => {
    //     const cursorSparkle = document.querySelector('.cursor-sparkle');
    
    //     document.addEventListener('mousemove', (e) => {
    //       cursorSparkle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    //       cursorSparkle.style.opacity = '1';
    //       setTimeout(() => {
    //         cursorSparkle.style.opacity = '0';
    //       }, 200);
    //     });
    //   }, []);


  return (
    <div className="cursor-sparkle"></div>
  )
}

export default CursorSparkle