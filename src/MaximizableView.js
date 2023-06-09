import React from 'react';
import useFullscreenStatus from './useFullscreenStatus';


export default function MaximizableView ({children , backgroundColor}) {
  const maximizableElement = React.useRef(null);
   let isFullscreen, setIsFullscreen;
   let errorMessage;

   try {
     [isFullscreen, setIsFullscreen] = useFullscreenStatus(maximizableElement);
   } catch(e) {
     errorMessage = "not support";
     isFullscreen = false;
     setIsFullscreen = undefined
   }

   const handleExitFullscreen = () => document.exitFullscreen();

   return (

    <div
    ref={maximizableElement}
    className={`maximizable-container ${
      isFullscreen ? "fullscreen" : "default"
    }`}
    style={{backgroundColor: isFullscreen ? backgroundColor : null}}
    >
      <div className="maximizable-content">{children}</div>
      <div className="maximizable-actions">
        {errorMessage ? (
          <button 
              onClick={() => 
              alert("not support")}
          >{errorMessage}</button>
        ) : isFullscreen ? (
          <button onClick={handleExitFullscreen}>exit fullscreen</button>
        ) : (
          <button onClick={setIsFullscreen}>fullscreen</button>
        )}
        </div>
     
      </div>
   )
}