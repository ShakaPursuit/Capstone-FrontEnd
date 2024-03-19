import React from "react";
import { useEffect } from "react";





const LineBar=({number })=>{
  useEffect(() => {
    document.documentElement.style.setProperty('--my-number', `${number}`);
  }, [number]);
    
    
  
       
      return (<>
     
  


    <label>Goal Progress
    </label>
    
    
    
  <div class="graph">
    <div class="bar" >70%</div>

    <div class="bar2" >40%</div>
    <div class="bar3" >30%</div>
  </div>
  {/* <div class="label">Goal 1</div>
  <div class="label">Goal 2</div>
  <div class="label">Goal 3</div> */}

    
    
    
    
    
    </>)
    
    
    
    
};



export default LineBar

