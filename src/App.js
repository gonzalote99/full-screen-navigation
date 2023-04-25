import React from "react";
import MaximizableView from './MaximizableView';
import "./style.css";

function App() {
return (
<React.Fragment>
<div className="row">
 <div className="lg-7 col">
 <div className="paper">
  <div className="row">
  <div className="col-fill col">
    <MaximizableView backgroundColor="#efefef">
      <img
      src="https://raw.githubusercontent.com/HuXn-WebDev/HTML-CSS-JavaScript-100-Projects/main/31.%20Full%20Screen%20Navigation/images/6536956.jpg" 
      alt="title card"
      />
      <div className="h1 padding-top">
       image description
        </div>
      </MaximizableView>
    </div>
    </div>
   </div>
   </div>
  </div>
  </React.Fragment>
)
}

export default App;